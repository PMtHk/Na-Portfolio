import Image from 'next/image';

export default function StudyItem({ data }) {
  const title = data.properties.Name.title[0]?.plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0]?.plain_text;
  const imgSrc =
    data?.cover?.file?.url ||
    data?.cover?.external?.url ||
    'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80';
  const tags = data.properties.Tags?.multi_select;
  const start = data.properties.WorkPeriod?.date?.start;
  const end = data.properties.WorkPeriod?.date?.end;

  return (
    <div className='item-card max-w-lg min-w-full'>
      <Image
        className='rounded-t-xl'
        src={imgSrc}
        alt='cover image'
        width='100%'
        height='50%'
        layout='responsive'
        objectFit='cover'
        quality={100}
      />

      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='mt-4 text-xl'>{description}</h3>
        <a href={github}>Github Link</a>
        <p className='my-1 '>
          공부기간 : {start} ~ {end}
        </p>
        <div className='flex items-start flex-wrap mt-2'>
          {tags.map((aTag) => (
            <h1
              className='px-2 py-1 mr-1 my-1 rounded-lg bg-sky-200 dark:bg-sky-700 w-30'
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
