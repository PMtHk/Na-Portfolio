import Link from 'next/link';
import Animation from './animation';
import TypeAni from '../typeAnimation';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pl-8 md:pr-4 md:pl-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font text-4xl sm:text-4xl xl:text-5xl mb-4 font-medium text-gray-900'>
          안녕하세요. <br />
          <TypeAni className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900' /><br />
          개발자 나주엽 입니다.
        </h1>
        <div className='flex-col s:flex-clg:flex lg:justify-center'>
          <Link href='/projects'>
            <a className='inline-flex text-white bg-indigo-400 border-0 py-2 px-5 focus:outline-none dark:hover:bg-indigo-600 rounded text-md lg:text-lg dark:text-white'>
              프로젝트 보러가기
            </a>
          </Link>
          <Link href='/studies'>
            <a className='inline-flex text-white ml-2 bg-indigo-600 border-0 py-2 px-5 focus:outline-none dark:hover:bg-indigo-400 rounded text-md lg:text-lg dark:text-slate-400 '>
              스터디 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
