"use client";
import React, { useContext, useEffect, useState } from "react";
import SearchContext from "@context/searchContext";
import axios from "axios";
import Table from "@components/Table";

const inititalState = {
  balance: 0,
  transactions: [],
  token: [],
};

const Result = () => {
  const { tag, SearchDispatch } = useContext(SearchContext);

  const [result, setResult] = useState(inititalState);

  const fetchBalance = async () => {
    await axios
      .get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${tag}&tag=latest&apikey=${process.env.NEXT_PUBLIC_ETHER_KEY}`
      )
      .then((res) => {
        setResult((prevState) => ({
          ...prevState,
          ["balance"]: (res.data.result / 10 ** 18).toFixed(2),
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTxn = async () => {
    await axios
      .get(
        `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${tag}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHER_KEY}}`
      )
      .then((res) => {
        setResult((prevState) => ({
          ...prevState,
          ["transactions"]: res.data.result,
        }));
        // console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getERCTxn = async () => {
    await axios
      .get(
        `https://api.etherscan.io/api?module=account&action=tokentx&address=${tag}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHER_KEY}}`
      )
      .then((res) => {
        setResult((prevState) => ({
          ...prevState,
          ["token"]: res.data.result,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (tag != null && tag != "") {
      fetchBalance();
      fetchTxn();
      getERCTxn();
    }
  }, [tag]);

  return (
    // <div className={`${tag != (null || "") ? "h-[100vh]" : "h-auto"} `}>
    <div>
      <Table />
    </div>
  );
};

export default Result;
