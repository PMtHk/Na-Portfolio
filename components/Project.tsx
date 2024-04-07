import Image from "next/image";
import SkillTag from "./SkillTag";
import Link from "next/link";

const Project = ({
  item: {
    project,
    project_url,
    description,
    date_start,
    date_end,
    img_src,
    img_link,
    skills,
    live,
  },
}: {
  item: {
    project: string;
    project_url: string;
    description: string[];
    date_start: string;
    date_end: string;
    img_src: string;
    img_link: string;
    skills: string[];
    live: boolean;
  };
}) => {
  return (
    <li className="mb-10">
      <div className="p-4 flex group relative gap-4 pl-2 transition-all lg:hover:opacity-100 lg:hover:rounded-xl lg:hover:bg-slate-800/20 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
        <div className="w-1/4 flex-col">
          <Link
            className="font-medium leading-tight text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
            href={img_link}
            target="_blank"
            rel="nonreferrer"
            aria-label={`Visit ${project}`}
          >
            <Image
              alt={project}
              src={img_src}
              width={200}
              height={120}
              className="border-2 rounded-lg border-slate-400/10 group-hover:-translate-y-0.5 group-hover:border-slate-300/20"
            />
          </Link>
          <p className="pl-2 pt-3 text-slate-400 italic">{date_start}</p>
          <p className="pl-4 pt-1 text-slate-400 italic text-right">
            ~ {date_end}
          </p>
        </div>
        <div className="w-3/4 flex flex-col">
          <h3>
            <a
              className="font-medium leading-tight text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
              href={project_url}
              target="_blank"
              rel="nonreferrer"
              aria-label={`Visit ${project}`}
            >
              <span>
                {project}
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
            {live && (
              <span className="ml-4 px-1 text-xs rounded border-red-300/70 bg-red-300/70">
                Live
              </span>
            )}
          </h3>
          <ul className="flex flex-col">
            {description.map((item, index) => {
              return (
                <li
                  key={index + 1}
                  className="mt-2 text-sm leading-normal text-slate-400 break-keep"
                >
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {skills.map((skill) => (
              <SkillTag skill={skill} key={skill} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Project;
