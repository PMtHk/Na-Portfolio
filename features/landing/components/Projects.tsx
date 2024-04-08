import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "portfolio",
    title: "Next.js를 이용한 Portfolio",
    description:
      "Next.js를 활용해 이 포트폴리오 사이트를 제작했습니다. Vercel을 통해 배포하고 있습니다.",
    dateStart: "2023.11",
    imgSrc: "/portfolio.png",
    finished: false,
  },
  {
    id: "crossonline",
    title: "CS 용어 가로세로 낱말퍼즐",
    description:
      "ChatGPT를 활용해 생성된 CS 용어 문제를 가로세로 낱말퍼즐로 풀어볼 수 있는 서비스를 제작하고 있습니다. Next.js와 TypeScript를 활용해 제작하고 있습니다.",
    dateStart: "2024.01",
    dateEnd: undefined,
    imgSrc: "/crossonline.png",
    finished: false,
  },
  {
    id: "gaoncare",
    title: "Next.js를 이용한 홈페이지 제작",
    description:
      "공지사항, 상담신청, 센터소개 등 간단한 기능을 제공하는 홈페이지를 제작했습니다. Next.js와 TypeScript를 활용해 제작하였으며, MongoDB를 사용해 데이터를 저장하고 AWS Amplify로 배포하고 있습니다.",
    dateStart: "2024.01",
    dateEnd: "2024.03",
    imgSrc: "/gaoncare.png",
    finished: true,
  },
  {
    id: "matchgg",
    title: "게이머를 위한 매칭 플랫폼 제작",
    description:
      "기존 줄글 형태의 게이머 매칭 서비스를 개선하고자 카드형 UI 기반의 매칭 플랫폼을 제작했습니다. 실시간 채팅 및 웹 푸시 알림을 구현했으며, 많은 이미지 파일을 제공하기 위해 별도의 이미지 CDN을 구현했습니다.",
    dateStart: "2023.01",
    dateEnd: "2023.09",
    imgSrc: "/matchgg.png",
    finished: true,
  },
  {
    id: "ozzang",
    title: "옷장 - 의류 관리 서비스",
    description:
      "소프트웨어 공학 수업에서 진행한 팀 프로젝트로, 의류 관리 서비스를 제작했습니다. React를 활용해 프론트엔드를 구현했으며, Express, MongoDB, AWS S3를 활용해 백엔드를 구현했습니다.",
    dateStart: "2022.03",
    dateEnd: "2023.06",
    imgSrc: "/ozzang.png",
    finished: true,
  },
];

const Projects = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <h2 className="hidden lg:block mt-2 mb-6 font-bold  text-2xl normal-case tracking-normal text-slate-200">
        Projects
      </h2>

      <ul className="flex flex-col">
        {projects
          .sort((a, b) => +b.dateStart - +a.dateStart)
          .map((project) => {
            return (
              <li key={project.id} className="mb-10">
                <div className="p-4 flex group relative gap-4 transition-all lg:hover:opacity-100 lg:hover:rounded-xl lg:hover:bg-sky-400/5 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
                  <div className="w-1/4 flex-col">
                    <Link
                      className="font-medium leading-tight text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      href={`/projects/${project.id}`}
                      target="_blank"
                      rel="nonreferrer"
                      aria-label={`Visit ${project}`}
                    >
                      <Image
                        alt={project.title}
                        src={project.imgSrc}
                        width={200}
                        height={120}
                        className="border-2 rounded-lg border-slate-400/10 group-hover:-translate-y-0.5 group-hover:border-slate-300/20"
                      />
                    </Link>
                  </div>
                  <div className="w-3/4 flex flex-col">
                    <h3>
                      <a
                        className="font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href={""}
                        target="_blank"
                        rel="nonreferrer"
                        aria-label={`Visit ${project}`}
                      >
                        <span>
                          {project.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </h3>

                    <p className="text-sm text-slate-400">{`${
                      project.dateStart
                    } - ${project.finished ? project.dateEnd : "진행 중"} `}</p>

                    <p className="mt-4 text-sm text-slate-300 break-keep">
                      {project.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Projects;
