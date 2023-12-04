import Head from "next/head";
import Nav from "@components/Nav";
import Header from "@components/Header";
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
      {/* <section className=" mx-auto bg-[#F5F5F5] h-[30vh] mt-4 ">
        <div className=" flex flex-col items-start justify-center container mx-auto h-full">
          <h1 className="text-xl font-medium">
            The Ethereum Blockchain Developer
          </h1>
          <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              class="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Search your domain name"
            />
            <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
                Search
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-violet-600 h-[30vh] mt-4 flex flex-col  justify-center">
        <div class=" flex justify-center ">
          <div class="container mx-auto   p-14">
            <form>
              <h1 class=" font-medium md:font-semibold text-white text-lg md:text-4xl my-3">
                The Ethereum Blockchain Developer
              </h1>
              <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                <input
                  class="text-base text-gray-400 flex-grow outline-none px-2 "
                  type="text"
                  placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                />
                <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                  <button class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
