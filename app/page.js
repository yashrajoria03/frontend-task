import Image from "next/image";
import Nav from "@components/Nav";
import Header from "@components/Header";
export default function Home() {
  return (
    <section className="h-screen  mx-auto">
      <Header />
      <hr />
      <Nav />
    </section>
  );
}
