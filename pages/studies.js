import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, PDATABASE_ID, SDATABASE_ID } from '../config';
import StudyItem from '../components/studies/study-item';

export default function Studies({ studies }) {

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen mb-10 px-3'>
        <Head>
          <title>나주엽 포트폴리오</title>
          <meta name='description' content='나주엽 포트폴리오' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl font-bold lg:text-6xl mt-3'>
          <span className='pl-4 text-blue-500'>{studies.results.length}개</span>{' '}
          의 스터디
        </h1>

        <div className='grid grid-cols-1 xl:grid-cols-2 p-12 m-4 gap-8'>
          {studies.results.map((aStudy) => (
            <StudyItem key={aStudy.id} data={aStudy} />
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
    `https://api.notion.com/v1/databases/${SDATABASE_ID}/query`,
    options
  );

  const studies = await res.json();

  const studyNames = studies.results.map(
    (aStudy) => aStudy.properties.Name.title[0]?.plain_text
  );

  return {
    props: { studies }, // will be passed to the page component as props
  };
}
