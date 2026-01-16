"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// import { FontLoader } from "three/addons/loaders/FontLoader.js";
// import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene and Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x141414); // Dark blue-black for space
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 20);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff00ff, 2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ffff, 2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Create starry background
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 100;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // // Array to hold text meshes for animation
    // const textMeshes: Array<{
    //   mesh: THREE.Mesh;
    //   speedX: number;
    //   speedY: number;
    // }> = [];

    // // Load font and create 3D text
    // const loader = new FontLoader();
    // loader.load(
    //   "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
    //   function (font) {
    //     const fontOptions = {
    //       font: font,
    //       size: 0.8,
    //       height: 0.1,
    //       depth: 0.05,
    //       curveSegments: 12,
    //       bevelEnabled: true,
    //       bevelThickness: 0.01,
    //       bevelSize: 0.01,
    //       bevelSegments: 5,
    //     };

    //     const words = [
    //       "React",
    //       "Next.js",
    //       "JavaScript",
    //       "Typescript",
    //       "TailwindCSS",
    //       "Three.js",
    //       "Python",
    //     ];
    //     const colors = [
    //       0xff00ff, 0x00ffff, 0xffff00, 0xff6600, 0x00ff00, 0x0000ff, 0xff0000,
    //     ];
    //     const positions = [
    //       { x: -5, y: 3, z: 2 },
    //       { x: 5, y: 3, z: 1 },
    //       { x: -5, y: 0, z: -5 },
    //       { x: 5, y: 0, z: -4 },
    //       { x: 0, y: 4, z: -6 },
    //       { x: -5, y: -3, z: 0 },
    //       { x: 5, y: -3, z: 1 },
    //     ];

    //     words.forEach((word, index) => {
    //       const textGeo = new TextGeometry(word, fontOptions);
    //       textGeo.center();
    //       const textMaterial = new THREE.MeshStandardMaterial({
    //         color: colors[index],
    //         metalness: 0.6,
    //         roughness: 0.2,
    //       });
    //       const textMesh = new THREE.Mesh(textGeo, textMaterial);
    //       textMesh.position.set(
    //         positions[index].x,
    //         positions[index].y,
    //         positions[index].z
    //       );
    //       scene.add(textMesh);
    //       textMeshes.push({
    //         mesh: textMesh,
    //         speedX: 0.001 + index * 0.001,
    //         speedY: 0.003 - index * 0.0005,
    //       });
    //     });

    //     console.log("3D text loaded!");
    //   }
    // );

    // Animation loop
    function animate() {
      // Slowly rotate the starry background
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;

      // // Rotate all 3D text meshes
      // textMeshes.forEach((item) => {
      //   item.mesh.rotation.x += item.speedX;
      //   item.mesh.rotation.y += item.speedY;
      // });

      // Animate lights
      const time = Date.now() * 0.001;
      pointLight1.position.x = Math.sin(time) * 5;
      pointLight1.position.z = Math.cos(time) * 5;

      pointLight2.position.x = Math.cos(time * 0.7) * 5;
      pointLight2.position.z = Math.sin(time * 0.7) * 5;

      controls.update();
      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="scene-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
