import React from "react";
import SearchContext from "@context/searchContext";

const Result = () => {
  const [state, dispatch] = useContext(SearchContext);

  return <div className="h-[100vh]">Result</div>;
};

export default Result;
