import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, PDATABASE_ID, SDATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen mb-10 px-3'>
        <Head>
          <title>나주엽 포트폴리오</title>
          <meta name='description' content='나주엽 포트폴리오' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl font-bold lg:text-6xl mt-3'>
          <span className='pl-4 text-blue-500'>
            {projects.results.length}개
          </span>{' '}
          의 프로젝트
        </h1>

        <div className='grid grid-cols-1 xl:grid-cols-2 p-12 m-4 gap-8'>
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// getServerSideProps Render 시마다 fetch data
export async function getServerSideProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'WorkPeriod',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${PDATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0]?.plain_text
  );

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
