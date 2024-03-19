import Image from 'next/image';
import SkillTag from './SkillTag';
import { projects } from '@/data/portfolio';
import Project from './Project';

const Projects = () => {
  return (
    <div>
      <h2 className='mt-2 mb-6 text-2xl font-bold text-slate-300 hidden lg:block'>
        Projects
      </h2>
      <ul >
        {
          projects.map((item) => {
            return <Project key={item.project} item={item}/>
          })
        }
      </ul>
    </div>
  );
};

export default Projects;
