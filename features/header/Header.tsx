import ExternalLinks from "@/features/header/components/ExternalLinks";
import Title from "@/features/header/components/Title";
import Link from "next/link";

const menus = [
  { id: "about", link: "#about", text: "About" },
  { id: "experience", link: "#experience", text: "Experience", disable: true },
  { id: "projects", link: "#projects", text: "Projects" },
  { id: "others", link: "#others", text: "Others" },
];

export default function Header({ activeLink }: { activeLink: string }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <Title />

          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {menus
                .filter((menu) => !menu.disable)
                .map((menu) => (
                  <li key={menu.id} className="mt-4">
                    <Link
                      className="group flex items-center py-1 hover:transition-transform hover:translate-x-1 dark:"
                      href={menu.link}
                    >
                      <span
                        className={`mr-4 h-px ${
                          activeLink === menu.id
                            ? "bg-emerald-300 w-16"
                            : "bg-slate-500 w-8"
                        } transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                      />
                      <span
                        className={`nav-text text-xs ${
                          activeLink === menu.id
                            ? "text-emerald-300"
                            : "text-slate-500"
                        } font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                      >
                        {menu.text}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <ExternalLinks />
      </div>
    </header>
  );
}
