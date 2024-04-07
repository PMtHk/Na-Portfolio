import About from "./About";
import Others from "../features/landing/components/Others";
import Projects from "./Projects";

export const Main = ({
  handleScroll: throttleScroll,
}: {
  handleScroll: (e: any) => void;
}) => {
  return (
    <main
      className="pt-24 lg:w-1/2 lg:py-24 lg:overflow-scroll lg:h-screen scroll-smooth scrollbar-hide"
      style={{}}
      onScroll={(e) => throttleScroll(e)}
    >
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <About />
      </section>
      {/* <section
        id='experience'
        className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        aria-label='Expreience'
      >
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
          <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
            Experience
          </h2>
        </div>
      </section> */}
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <Projects />
      </section>
      <section
        id="others"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:min-h-[calc(100vh_-_21rem)]"
        aria-label="Others"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"></div>
        <Others />
      </section>
    </main>
  );
};
