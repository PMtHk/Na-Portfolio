const certificates = [
  {
    date: "2024.04.05",
    title: "SQL 개발자",
    serialNo: "SQLD-052004824",
    publisher: "한국데이터산업진흥원",
  },
  {
    date: "2023.09.01",
    title: "정보처리기사",
    serialNo: "23202070513X",
    publisher: "한국산업인력공단",
  },
];

export default function Certificates() {
  return (
    <>
      <h3 className="mt-6 text-xl font-bold text-slate-300">Certificate</h3>
      <ul className="mt-4 pl-2 flex flex-col gap-y-1">
        {certificates.map((certificate) => (
          <li key={certificate.serialNo}>
            <div className="h-fit flex gap-x-2">
              <div className="w-1/4 flex flex-col justify-center text-sm">
                <p className="text-slate-400 text-left">{certificate.date}</p>
              </div>
              <div className="w-3/4 flex justify-start items-start">
                <p className="text-slate-400">{certificate.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
