const Others = () => {
  return (
    <div>
      <h3 className="mt-2 text-xl font-bold text-slate-300">Education</h3>
      <div className="mt-4 pl-2 flex">
        <div className="w-1/4 flex flex-col justify-center items-start">
          <p className="text-slate-400 italic">2018.03 ~ 2024.02</p>
        </div>
        <div className="w-3/4 flex justify-start items-start">
          <p className="text-slate-400">
            상명대학교 컴퓨터과학과 <span className="text-xs italic">GPA 3.86 / 4.50</span>
          </p>
        </div>
      </div>

      <h3 className="mt-12 text-xl font-bold text-slate-300">Certificate</h3>
      <div className="mt-4 pl-2 flex">
        <div className="w-1/4 flex flex-col justify-center items-start">
          <p className="text-slate-400 italic">2023.09</p>
        </div>
        <div className="w-3/4 flex justify-start items-start">
          <p className="text-slate-400">정보처리기사</p>
        </div>
      </div>
    </div>
  );
};

export default Others;
