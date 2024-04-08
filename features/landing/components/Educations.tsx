const educations = [
  {
    dateStart: "2018.03",
    dateEnd: "2024.02",
    title: "상명대학교 컴퓨터과학과 (GPA 3.86 / 4.5)",
  },
];

export default function Educations() {
  return (
    <>
      <h3 className="mt-6 text-xl font-bold text-slate-300">Education</h3>
      <ul className="mt-4 pl-2 flex flex-col gap-y-1">
        {educations.map((education) => (
          <li key={education.dateStart}>
            <div className="h-fit flex gap-x-2">
              <div className="w-1/4 flex flex-col justify-center text-sm">
                <p className="text-slate-400 text-left">
                  {education.dateStart} ~ {education.dateEnd}
                </p>
               
              </div>
              <div className="w-3/4 flex justify-start items-start border-l border-slate-400 pl-2">
                <p className="text-slate-400">{education.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
