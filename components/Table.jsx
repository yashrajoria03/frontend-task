"use client";
import { useState } from "react";

const Table = ({ heading, header, data, param, query }) => {
  const [tableData, setTableData] = useState(data?.slice(0, 10));
  const [page, setPage] = useState(1);

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

    if (newPage < 1 || newPage > Math.ceil(data.length / itemsPerPage)) {
      return;
    }
    const startIdx = (newPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    setTableData(data.slice(startIdx, endIdx));
    setPage(newPage);
  };

  const convertTimestampToDateTime = (timestamp) => {
    const unixTimestamp = timestamp;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString(); // Adjust this format as needed
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative uppercase font-bold">{heading}</div>
          </div>
        </div>
        {tableData && tableData.length > 0 ? (
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {header &&
                      header.map((item, idx) => (
                        <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                          key={idx}
                        >
                          {item}
                        </th>
                      ))}
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
                          {(page - 1) * 10 + idx + 1})
                        </p>
                      </td>
                      {param &&
                        param.map((item, idx) =>
                          item == "value" ? (
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span
                                className={`relative inline-block px-3 py-1 font-semibold ${
                                  data.from.toLowerCase() ===
                                  query.toLowerCase()
                                    ? "text-red-900"
                                    : "text-blue-900"
                                } leading-tight`}
                              >
                                <span
                                  aria-hidden
                                  className={`absolute inset-0  opacity-50 rounded-full ${
                                    data.from.toLowerCase() ===
                                    query.toLowerCase()
                                      ? "bg-red-200"
                                      : "bg-green-200"
                                  }`}
                                ></span>
                                <span className="relative">
                                  {(data.value / 10 ** 18).toFixed(2)}
                                </span>
                              </span>
                            </td>
                          ) : item == "tokenName" ? (
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.tokenName.length == 0
                                  ? "N/A"
                                  : data[item]}
                              </p>
                            </td>
                          ) : item == "contractAddress" ? (
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data[item].length == 0 ? "N/A" : data[item]}
                              </p>
                            </td>
                          ) : (
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data[item]}
                              </p>
                            </td>
                          )
                        )}

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {convertTimestampToDateTime(data.timeStamp)}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  {`Showing ${page} to ${Math.max(1, data.length / 10)} of ${
                    data.length
                  } Entries`}
                </span>
                <div className="inline-flex mt-2 xs:mt-0 space-x-4">
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded-l"
                    onClick={() => handlePage("prev")}
                  >
                    Prev
                  </button>
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded-r"
                    onClick={() => handlePage("next")}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">0 Record Found</div>
        )}
      </div>
    </div>
  );
};

export default Table;
