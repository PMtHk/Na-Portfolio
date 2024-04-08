import About from "./components/About";
import Others from "./components/Others";
import Projects from "./components/Projects";
// import Careers from "./components/Careers";

export default function Main({
  handleScroll: throttleScroll,
}: {
  handleScroll: (e: any) => void;
}) {
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
        <About />
      </section>
      {/* <section
        id="careers"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Careers"
      >
        <Careers />
      </section> */}
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Projects"
      >
        <Projects />
      </section>
      <section
        id="others"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:min-h-[calc(100vh_-_21rem)]"
        aria-label="Others"
      >
        <Others />
      </section>
    </main>
  );
}
