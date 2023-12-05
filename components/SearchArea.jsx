"use client";
import React, { useState } from "react";

const SearchArea = () => {
  const [query, setQuery] = useState(null);
  const handleSearch = () => {};

  return (
    <section className="bg-violet-600 h-[30vh] mt-4 flex flex-col  justify-center">
      <div class=" flex justify-center  ">
        <div class=" container mx-auto  p-14 md:space-y-10">
          <h1 class=" font-medium md:font-semibold text-white text-lg  my-3 text-center md:text-4xl md:text-left">
            The Ethereum Blockchain Developer
          </h1>
          <div class="flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              class="text-base text-gray-400 flex-grow outline-none px-1 md:px-2 "
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
            />
            <div class="flex items-center px-1 rounded-lg space-x-4 mx-auto ">
              <button class="hidden md:flex bg-primary text-white text-base rounded-lg px-4 py-2 font-thin hover:bg-violet-700">
                Search
              </button>
            </div>
          </div>
          <button
            class="flex md:hidden mx-auto bg-primary text-white text-base rounded-lg px-4 py-1 font-thin hover:bg-violet-700 my-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;
