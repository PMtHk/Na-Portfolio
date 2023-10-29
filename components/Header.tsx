import Link from 'next/link';

export const Header = ({ activeLink }: { activeLink: string }) => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      <div className='w-full h-full flex flex-col justify-between'>
        <div>
          <div>
            <h1
              id='header'
              className='font-bold text-[28px] md:text-[32px] text-[#E3E8F0] xl:text-[48px]'
            >
              <a href='/'>나주엽 | Jooyeob Na</a>
            </h1>
            <h2 className='mt-3 text-xl text-[#E3E8F0]'>
              프론트엔드 개발자를 꿈꾸는 학생
            </h2>
            <p className='mt-3 text-sm text-[#93A3B8]'>
              호기심이 많아 새로운 것들을 찾아보는 것을 좋아하고,
              <br /> 직접 만들어보는 것을 좋아하는 프론트엔드 개발자,
              나주엽입니다.
            </p>
          </div>
          <nav className='nav hidden lg:block' aria-label='In-page jump links'>
            <ul className='mt-16 w-max'>
              <li>
                <Link
                  className='group flex items-center py-3 hover:transition-transform hover:translate-x-1'
                  href='#about'
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === 'about'
                        ? 'text-emerald-300'
                        : 'text-slate-500'
                    } font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                  >
                    #About
                  </span>
                </Link>
              </li>
              <li className='mt-4'>
                <Link
                  className='group flex items-center py-3 hover:transition-transform hover:translate-x-1'
                  href='#experience'
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === 'experience'
                        ? 'text-emerald-300'
                        : 'text-slate-500'
                    } font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 line-through`}
                  >
                    #Experience
                  </span>
                </Link>
              </li>
              <li className='mt-4'>
                <Link
                  className='group flex items-center py-3 hover:transition-transform hover:translate-x-1'
                  href='#projects'
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === 'projects'
                        ? 'text-emerald-300'
                        : 'text-slate-500'
                    } font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                  >
                    #Projects
                  </span>
                </Link>
              </li>
              <li className='mt-4'>
                <Link
                  className='group flex items-center py-3 hover:transition-transform hover:translate-x-1'
                  href='#others'
                >
                  <span
                    className={`nav-text text-xs ${
                      activeLink === 'others'
                        ? 'text-emerald-300'
                        : 'text-slate-500'
                    } font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                  >
                    #Others
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className='mt-6 flex items-center' aria-label='Social media'>
          <li className='mr-5'>
            <a
              href='https://github.com/PMtHk'
              rel='nonreferrer'
              target='_blank'
            >
              <span className='sr-only'>Github Link</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='#E3E8F0'
                className='h-6 w-6 lg:h-8 lg:w-8'
                aria-hidden='true'
              >
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
              </svg>
            </a>
          </li>
          <li className='mr-4'>
            <a
              href='https://www.instagram.com/j__ye_b/'
              rel='nonreferrer'
              target='_blank'
            >
              <span className='sr-only'>Instagram Link</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1000 1000'
                fill='#E3E8F0'
                className='h-6 w-6 lg:h-8 lg:w-8'
                aria-hidden='true'
              >
                <path d='M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34'></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="/JooyeobNa.pdf" download="JooyeobNa">
              <span className='sr-only'>Download Resume</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1024 1024'
                version='1.1'
                fill='#E3E8F0'
                className='h-8 w-8 lg:h-11 lg:w-11'
                aria-hidden='true'
              >
                <path d='M334.336 616.3456c0 11.5712 9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944H355.4304c-11.6736 0-21.0944 9.5232-21.0944 21.0944zM670.9248 702.0544H355.4304c-11.5712 0-21.0944 9.5232-21.0944 21.0944s9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944z' />
                <path d='M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m27.4432 87.1424l97.1776 97.1776h-89.9072c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072z m137.1136 562.7904s0 0.1024 0 0l-479.0272 0.1024s-0.1024 0-0.1024-0.1024V208.1792s0-0.1024 0.1024-0.1024h297.984l1.6384 1.6384v133.12c0 27.2384 22.3232 49.4592 49.4592 49.4592h129.9456v423.5264z' />
                <path d='M428.8512 388.7104c37.1712 0 67.2768-30.1056 67.2768-67.2768 0-37.1712-30.1056-67.2768-67.2768-67.2768S361.472 284.16 361.472 321.4336c0 37.1712 30.1056 67.2768 67.3792 67.2768z m0-97.6896c16.7936 0 30.4128 13.6192 30.4128 30.4128s-13.6192 30.4128-30.4128 30.4128-30.4128-13.6192-30.4128-30.4128 13.6192-30.4128 30.4128-30.4128zM355.4304 504.7296c11.6736 0 21.0944-9.4208 21.0944-21.0944 0-22.8352 23.9616-42.1888 52.3264-42.1888s52.3264 19.2512 52.3264 42.1888c0 11.6736 9.4208 21.0944 21.0944 21.0944s21.0944-9.4208 21.0944-21.0944c0-46.4896-42.3936-84.3776-94.5152-84.3776s-94.5152 37.888-94.5152 84.3776c0 11.6736 9.4208 21.0944 21.0944 21.0944z' />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
