import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>나주엽 포트폴리오</title>
        <meta name="description" content="Next.js를 이용한 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>홈</h1>
    </Layout>
  );
}
