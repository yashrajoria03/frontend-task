"use client";
import React, { useState } from "react";
import SearchContext from "@context/searchContext";
import { useContext } from "react";

const SearchArea = () => {
  const [query, setQuery] = useState(null);

  const { tag, SearchDispatch } = useContext(SearchContext);

  const handleSearch = () => {
    SearchDispatch({
      type: "NEW_SEARCH",
      payload: query,
    });
  };

  return (
    <section className="bg-violet-600 h-[30vh] mt-4 flex flex-col  justify-center">
      <div className=" flex justify-center  ">
        <div className=" container mx-auto  p-14 md:space-y-10">
          <h1 className=" font-medium md:font-semibold text-white text-lg  my-3 text-center md:text-4xl md:text-left">
            The Ethereum Blockchain Developer
          </h1>
          <div className="flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-1 md:px-2 "
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
            />
            <div className="flex items-center px-1 rounded-lg space-x-4 mx-auto ">
              <button
                className="hidden md:flex bg-primary text-white text-base rounded-lg px-4 py-2 font-thin hover:bg-violet-700"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <button
            className="flex md:hidden mx-auto bg-primary text-white text-base rounded-lg px-4 py-1 font-thin hover:bg-violet-700 my-2"
            onClick={handleSearch}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;
