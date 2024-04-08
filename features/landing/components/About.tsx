const About = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About Me
        </h2>
      </div>
      <h2 className="hidden lg:block mt-2 mb-6 font-bold  text-2xl normal-case tracking-normal text-slate-200">
        About Me
      </h2>

      <div className="mt-4 pl-2 text-slate-400 break-keep">
        <p>새로운 기술을 배우고 실전에 적용하는 것을 즐기는 개발자입니다.</p>
        <p>사용자와 직접 소통하는 프론트엔드 개발을 좋아합니다.</p>
        <p>
          팀원을 돕고 함께하기 위해 다양한 분야를 새로 접하는 데 두려움이
          없습니다.
        </p>
        <p>
          최근에는 기록의 중요성을 깨닫고 지식을 정리하고 글로 남기면서 성장하고
          있습니다.
        </p>
      </div>
    </>
  );
};

export default About;
