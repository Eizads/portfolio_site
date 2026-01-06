'use client';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef } from 'react';
import animationData from '../../../public/animation.json';

export default function LottieAnimation() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlayingRef.current) {
            lottieRef.current?.goToAndStop(0);
            lottieRef.current?.play();
            isPlayingRef.current = true;
          } else if (!entry.isIntersecting) {
            isPlayingRef.current = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleComplete = () => {
    isPlayingRef.current = false;
  };

  return (
    <div ref={containerRef} className="w-full max-w-md">
      <Lottie 
        lottieRef={lottieRef}
        animationData={animationData} 
        loop={false}
        autoplay={false}
        onComplete={handleComplete}
        className="w-full h-full scale-125"
      />
    </div>
  );
} 