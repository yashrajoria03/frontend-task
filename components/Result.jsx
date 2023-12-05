"use client";
import React, { useContext, useEffect, useState } from "react";
import SearchContext from "@context/searchContext";

const Result = () => {
  const { tag, SearchDispatch } = useContext(SearchContext);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(tag);
  }, [tag]);

  return <div className="h-[100vh]">{result}</div>;
};

export default Result;
