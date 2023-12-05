import Head from "next/head";
import Nav from "@components/Nav";
import Header from "@components/Header";
import SearchArea from "@components/SearchArea";
import Result from "@components/Result";
import { inter } from "@util/font";

export default function Home() {
  return (
    <section className={`h-screen  mx-auto ${inter.classname}`}>
      <Head>
        <title>Blockchain Explorer</title>
      </Head>
      <Header />
      <hr />
      <Nav />
      <SearchArea />
      <Result />
    </section>
  );
}
