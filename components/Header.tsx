import Link from "next/link";

export const Header = ({ activeLink }: { activeLink: string }) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <div>
            <h1
              id="header"
              className="font-bold text-[28px] md:text-[32px] text-[#E3E8F0] xl:text-[48px]"
            >
              <a href="/">나주엽 | Jooyeob Na</a>
            </h1>
          </div>

          <div className="mt-4">
            <a href="mailto:zooby88@naver.com" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#94a3b8"
                className="h-6 w-6"
                version="1.1"
                viewBox="0 0 75.294 75.294"
              >
                <g>
                  <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9   c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089   H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065   c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016   c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102   c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069   c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" />
                </g>
              </svg>
              <span className="ml-4 text-slate-400">zooby88@naver.com</span>
            </a>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#94a3b8"
                viewBox="0 0 24 24"
              >
                <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
              </svg>
              <span className="ml-4 text-slate-400">010 - 2496 - 5168</span>
            </div>
          </div>

          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <Link
                  className="group flex items-center py-3 hover:transition-transform hover:translate-x-1"
                  href="#about"
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === "about"
                        ? "text-emerald-300"
                        : "text-slate-500"
                    } font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                  >
                    #About
                  </span>
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="group flex items-center py-3 hover:transition-transform hover:translate-x-1"
                  href="#experience"
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === "experience"
                        ? "text-emerald-300"
                        : "text-slate-500"
                    } font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 line-through`}
                  >
                    #Experience
                  </span>
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="group flex items-center py-3 hover:transition-transform hover:translate-x-1"
                  href="#projects"
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === "projects"
                        ? "text-emerald-300"
                        : "text-slate-500"
                    } font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                  >
                    #Projects
                  </span>
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="group flex items-center py-3 hover:transition-transform hover:translate-x-1"
                  href="#others"
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === "others"
                        ? "text-emerald-300"
                        : "text-slate-500"
                    } font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                  >
                    #Others
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="mt-6 flex items-center" aria-label="Social media">
          <li className="mr-5">
            <a
              href="https://github.com/PMtHk"
              rel="nonreferrer"
              target="_blank"
            >
              <span className="sr-only">Github Link</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#E3E8F0"
                className="h-6 w-6 lg:h-8 lg:w-8"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>

          <li className="mr-4">
            <a
              href="https://velog.io/@pmthk__"
              rel="nonreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 192 192"
                enable-background="new 0 0 28 28"
                xmlSpace="preserve"
                width="32"
              >
                <path
                  id="Website"
                  fill="#D1CECC"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/JooyeobNa_Resume.pdf"
              download="나주엽_프론트엔드_개발자"
            >
              <span className="sr-only">Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                version="1.1"
                fill="#E3E8F0"
                className="h-8 w-8 lg:h-11 lg:w-11"
                aria-hidden="true"
              >
                <path d="M334.336 616.3456c0 11.5712 9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944H355.4304c-11.6736 0-21.0944 9.5232-21.0944 21.0944zM670.9248 702.0544H355.4304c-11.5712 0-21.0944 9.5232-21.0944 21.0944s9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944z" />
                <path d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m27.4432 87.1424l97.1776 97.1776h-89.9072c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072z m137.1136 562.7904s0 0.1024 0 0l-479.0272 0.1024s-0.1024 0-0.1024-0.1024V208.1792s0-0.1024 0.1024-0.1024h297.984l1.6384 1.6384v133.12c0 27.2384 22.3232 49.4592 49.4592 49.4592h129.9456v423.5264z" />
                <path d="M428.8512 388.7104c37.1712 0 67.2768-30.1056 67.2768-67.2768 0-37.1712-30.1056-67.2768-67.2768-67.2768S361.472 284.16 361.472 321.4336c0 37.1712 30.1056 67.2768 67.3792 67.2768z m0-97.6896c16.7936 0 30.4128 13.6192 30.4128 30.4128s-13.6192 30.4128-30.4128 30.4128-30.4128-13.6192-30.4128-30.4128 13.6192-30.4128 30.4128-30.4128zM355.4304 504.7296c11.6736 0 21.0944-9.4208 21.0944-21.0944 0-22.8352 23.9616-42.1888 52.3264-42.1888s52.3264 19.2512 52.3264 42.1888c0 11.6736 9.4208 21.0944 21.0944 21.0944s21.0944-9.4208 21.0944-21.0944c0-46.4896-42.3936-84.3776-94.5152-84.3776s-94.5152 37.888-94.5152 84.3776c0 11.6736 9.4208 21.0944 21.0944 21.0944z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
