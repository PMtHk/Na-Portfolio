import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>나주엽 포트폴리오</title>
        <meta name="description" content="Next.js를 이용한 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">홈</h1>
    </Layout>
  );
}
