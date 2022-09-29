import Link from 'next/link';
import Animation from './animation';
import TypeAni from '../typeAnimation';

export default function Hero() {
  return (
      <div className='container mx-auto mt-0 flex px-5 py-16 lg:flex-row flex-col items-center'>
        <div className='xl:flex-grow lg:w-1/2 xl:pr-24 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center'>
          <h1 className='title-font text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl mb-4 font-medium text-gray-900'>
            안녕하세요. <br />
            <TypeAni />
            <br />
            개발자 나주엽 입니다.
          </h1>

          <div className='flex mt-3 justify-center'>
            <Link href='/projects'>
              <a className='inline-flex text-white bg-blue-600 border-0 py-2 px-5 focus:outline-none dark:hover:bg-indigo-600 rounded text-md lg:text-xl dark:text-white'>
                프로젝트 보러가기
              </a>
            </Link>
            <Link href='/studies'>
              <a className='inline-flex text-white ml-2 bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:text-slate-400 dark:hover:bg-indigo-400 rounded text-md lg:text-xl dark:text-white '>
                스터디 보러가기
              </a>
            </Link>
          </div>
        </div>
        <div className='xl:max-w-lg xl:w-full lg:w-1/2 w-5/6'>
          <Animation />
        </div>
      </div>
  );
}
