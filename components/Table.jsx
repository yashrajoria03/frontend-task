"use client";
import { dummyData } from "@public/data/data";
import { useEffect, useState } from "react";

const Table = () => {
  const query = "0x4e83362442b8d1bec281594cea3050c8eb01311c"; // this is search qeuery

  const [tableData, setTableData] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    setTableData(dummyData.splice(0, 10));
  }, []);

  const handlePage = (action) => {
    const itemsPerPage = 10;
    let newPage;

    switch (action) {
      case "prev":
        newPage = page - 1;
        break;
      case "next":
        newPage = page + 1;
        break;
      default:
        newPage = 1;
    }

    if (newPage < 1 || newPage > Math.ceil(dummyData.length / itemsPerPage)) {
      return;
    }

    const startIdx = (newPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    setTableData(dummyData.slice(startIdx, endIdx));
    setPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <select className=" h-full rounded-r border  sm:rounded-r-none  block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>ERC20 Transfer</option>
                <option>Normal Transaction</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {tableData && tableData.length > 0 && (
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      S.No
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      To
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Token Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, idx) => (
                    <tr
                      className={`${
                        data.tokenName == data.tokenSymbol ? "hidden" : ""
                      }'`}
                    >
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {idx + 1})
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data.from}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data.to}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data.tokenName}&nbsp; ({data.tokenSymbol})
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          className={`relative inline-block px-3 py-1 font-semibold ${
                            data.from == query
                              ? "text-red-900"
                              : "text-green-900"
                          } leading-tight`}
                        >
                          <span
                            aria-hidden
                            className={`absolute inset-0  opacity-50 rounded-full ${
                              data.from == query ? "bg-red-200" : "bg-green-200"
                            }`}
                          ></span>
                          <span className="relative">
                            {data.value / 10 ** 18}
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  {`Showing ${page} to ${dummyData.length / 10} of ${
                    dummyData.length
                  } Entries`}
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                    onClick={() => handlePage("prev")}
                  >
                    Prev
                  </button>
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                    onClick={() => handlePage("next")}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
