const SkillTag = ({ skill }: { skill: string }) => {
  return (
    <li className='mr-1.5 mt-2'>
      <div className='flex items-center rounded-full bg-slate-300/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-300'>
        {skill}
      </div>
    </li>
  );
};


export default SkillTag;