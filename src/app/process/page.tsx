import Image from "next/image";
import Link from "next/link";
import PrototypeVideo from "@/components/common/PrototypeVideo";

const projectDetails = [
  { label: "Project", value: "Stocks Dashboard UX process" },
  { label: "Role", value: "UX research, user flow, wireframes, prototyping" },
  {
    label: "Goal",
    value: "Help users scan market data and compare stocks faster",
  },
  {
    label: "Tools",
    value: "Figma, flow mapping, wireframes, interactive prototype",
  },
];

const processSteps = [
  {
    title: "Define The Dashboard Problem",
    eyebrow: "01 Research",
    description:
      "A stock dashboard can become overwhelming quickly, so I focused the experience around the user's core tasks: searching for a stock, reading price movement, comparing chart data, and saving items to revisit.",
  },
  {
    title: "Map The User Flow",
    eyebrow: "02 Structure",
    description:
      "I mapped the path from landing on the dashboard to searching, viewing a stock detail, reading the chart, and managing a watchlist so each screen had a clear purpose.",
  },
  {
    title: "Sketch Low-Fidelity Layouts",
    eyebrow: "03 Prototype",
    description:
      "The first wireframes explored hierarchy before visual polish: where the search belongs, how the chart should dominate the page, and how supporting market details should stay easy to scan.",
  },
  {
    title: "Refine Into A Prototype",
    eyebrow: "04 Iterate",
    description:
      "The mid-fidelity screens and prototype refined spacing, navigation, chart emphasis, and watchlist interactions before moving into development.",
  },
];

const outcomes = [
  "A clearer dashboard structure that supports quick scanning without hiding important financial details.",
  "A user flow that connects search, stock detail, chart reading, and watchlist actions.",
  "A prototype that made the product direction easier to validate before implementation.",
];

const testing = [
  {
    title: "Testing and User Feedback",
    description:
      "The testing phase helped validate the dashboard structure, user flow, and prototype before moving into development. The user feedback helped refine the dashboard structure and user flow. For example after testing I decided to centralize the search bar at the top to make it more visible and easier to use.",
  },
];

const artifacts = [
  {
    title: "User Flow",
    description:
      "The flow chart defines how users move through the dashboard, from discovery and search to viewing details and saving stocks.",
    image: "/stocks-dashboard-ux/flow-chart.png",
    alt: "Stocks dashboard UX flow chart",
  },
  {
    title: "Low-Fidelity Wireframe",
    description:
      "Early wireframes helped test layout hierarchy without getting distracted by visual design decisions.",
    image: "/stocks-dashboard-ux/low-fidelity-wireframe.png",
    alt: "Low fidelity stocks dashboard wireframe",
  },
  {
    title: "Mid-Fidelity Wireframes",
    description:
      "The mid-fidelity pass tightened the dashboard layout, chart area, supporting info, and responsive structure.",
    image: "/stocks-dashboard-ux/mid-fidelity.png",
    alt: "Mid fidelity stocks dashboard wireframes",
  },
];

const relatedProjects = [
  "BuildFlow App",
  "React Stocks Dashboard",
  "Vue3 Stocks Dashboard",
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      <section
        id="top"
        className="px-4 sm:px-6 lg:px-8 h-screen/2 border-b border-white/10 backdrop-blur-md xl:backdrop-blur-none "
        style={{
          backgroundImage: `url('/stocks-dashboard-ux/comp-bg4.png')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="backdrop-blur-md xl:backdrop-blur-none h-full py-20">
          <div className="max-w-6xl mx-auto ">
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-end ">
              <div>
                <p className="text-primary uppercase tracking-[0.35em] text-sm mb-6">
                  UX Process Case Study
                </p>
                <h1 className="text-5xl sm:text-7xl font-bold leading-tight text-white mb-8">
                  Designing the Stocks Dashboard experience.
                </h1>
                <p className="text-lg sm:text-xl text-dark-accent leading-relaxed max-w-2xl">
                  A walkthrough of the UX process behind the stocks dashboard:
                  turning a data-heavy product into a clear flow for search,
                  chart reading, stock details, and watchlist decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div>
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">
              TLDR
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The UX work made the dashboard easier to understand before it was
              built.
            </h2>
            <p className="text-dark-accent leading-relaxed">
              Instead of starting with UI polish, I mapped the user journey,
              blocked out the dashboard structure, and used wireframes to make
              sure the financial data had a clear hierarchy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {projectDetails.map((detail) => (
              <div
                key={detail.label}
                className="bg-dark-secondary border border-white/10 rounded-2xl p-6"
              >
                <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
                  {detail.label}
                </p>
                <p className="text-dark-accent leading-relaxed">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-24 ">
        <div className="bg-dark-tertiary border border-dark-secondary/10 rounded-4xl m-5 py-16">
          <div className="max-w-6xl mx-auto rounded-3xl p-10">
            <div className="max-w-3xl mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                The Approach
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                From market data complexity to a guided dashboard flow.
              </h2>
              <p className="text-dark-accent text-lg leading-relaxed">
                The UX process focused on reducing decision fatigue. The
                dashboard needed to feel useful at a glance while still giving
                users enough depth to inspect a stock, understand chart
                movement, and return to saved items.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className="bg-dark-primary border border-white/10 rounded-3xl p-7 hover:border-primary/40 transition-colors"
                >
                  <p className="text-secondary text-sm uppercase tracking-[0.25em] mb-5">
                    {step.eyebrow}
                  </p>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-dark-accent leading-relaxed">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Design Artifacts
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              The process moved from flow to wireframes to prototype.
            </h2>
            <p className="text-dark-accent text-lg leading-relaxed">
              These artifacts show the thinking behind the final dashboard:
              first the user path, then the rough page structure, then a more
              polished layout that could be tested and implemented.
            </p>
          </div>

          <div className="space-y-10">
            <article
              key={artifacts[0].title}
              className="grid lg:grid-cols-12 gap-6 items-center bg-dark-secondary border border-white/10 rounded-3xl p-5 sm:p-7"
            >
              <div className="lg:col-span-6 lg:col-start-4 text-center lg:text-left">
                <p className="text-secondary uppercase tracking-[0.25em] text-sm mb-4">
                  Artifact 01
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
                  {artifacts[0].title}
                </h3>
                <p className="text-dark-accent leading-relaxed">
                  {artifacts[0].description}
                </p>
              </div>
              <div className="lg:col-span-12 max-h-[100vh] w-full overflow-auto rounded-2xl bg-dark-button border border-white/10">
                <Image
                  src={artifacts[0].image}
                  alt={artifacts[0].alt}
                  width={3304}
                  height={4608}
                  className="h-auto w-full"
                />
              </div>
            </article>
          </div>
          <div className="space-y-10 pt-10">
            <article
              key={artifacts[1].title}
              className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-center  p-5 sm:p-7"
            >
              <div className="text-center lg:text-left">
                <p className="text-secondary uppercase tracking-[0.25em] text-sm mb-4">
                  Artifact 02
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {artifacts[1].title}
                </h3>
                <p className="text-dark-accent leading-relaxed">
                  {artifacts[1].description}
                </p>
              </div>
              <div className="relative w-full justify-self-stretch aspect-video rounded-2xl overflow-hidden bg-dark-button border border-white/10">
                <Image
                  src={artifacts[1].image}
                  alt={artifacts[1].alt}
                  fill
                  sizes="(min-width: 1024px) 100%, 100vw"
                  className="object-contain"
                />
              </div>
            </article>
          </div>
          <div className="space-y-10">
            <article
              key={artifacts[2].title}
              className="relative grid lg:grid-cols-12 gap-6 items-center bg-dark-secondary border border-white/10 rounded-3xl p-5 sm:p-7"
            >
              <div className="bg-dark-tertiary p-5 rounded-3xl lg:absolute lg:top-15 lg:left-75 lg:col-span-7 lg:col-start-6 lg:mr-10 text-center lg:text-left">
                <p className="text-secondary uppercase tracking-[0.25em] text-sm mb-4">
                  Artifact 03
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {artifacts[2].title}
                </h3>
                <p className="text-dark-accent leading-relaxed">
                  {artifacts[2].description}
                </p>
              </div>
              <div className="lg:col-span-12 max-h-[100vh] w-full overflow-auto rounded-2xl bg-dark-button border border-white/10">
                <Image
                  src={artifacts[2].image}
                  alt={artifacts[2].alt}
                  width={3304}
                  height={4608}
                  className="h-auto w-full"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-dark-tertiary border border-dark-secondary/10 rounded-4xl m-5 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div className="bg-dark-primary border border-white/10 rounded-3xl p-4">
              <PrototypeVideo />
            </div>

            <div>
              <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">
                Prototype
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                The prototype connects the core dashboard interactions.
              </h2>
              <p className="text-dark-accent text-lg leading-relaxed mb-6">
                The prototype demonstrates how the user moves through the
                dashboard experience: reviewing market information, finding a
                stock, reading the chart, and using the watchlist as a return
                path.
              </p>
              <div className="space-y-4">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-4 text-dark-accent leading-relaxed"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p>{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 lg:col-start-3">
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">
              Testing
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Testing and User Feedback
            </h2>
            <p className="text-dark-accent text-lg leading-relaxed mb-6">
              The testing phase helped validate the dashboard structure, user
              flow, and prototype before moving into development. The user
              feedback helped refine the dashboard structure and user flow.
            </p>
            <p className="text-dark-accent text-lg leading-relaxed mb-6">
              For example, after feedback from users, I centralized the search
              bar into its own dropdown overlay in the development phase. This
              made search even more prominent and easier to use while still
              allowing users to quickly search, compare matches, and open a
              stock, all without losing context.
            </p>
            <p className="text-dark-accent text-lg leading-relaxed mb-6">
              You can view the finalized versions of the stocks dashboard by
              clicking the project links below and select the view live button
              for each project.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Projects You May Like
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedProjects.map((project) => (
              <Link
                key={project}
                href="/#projects"
                className="group bg-dark-secondary border border-white/10 rounded-2xl p-6 hover:border-secondary/50 transition-colors"
              >
                <p className="text-lg font-semibold mb-3">{project}</p>
                <p className="text-dark-accent group-hover:text-white transition-colors">
                  View project details
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="#top"
              className="text-primary hover:text-white transition-colors"
            >
              Back to top
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
