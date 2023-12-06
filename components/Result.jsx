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
  const [start, setStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    const fetchData = async () => {
      setStart(true);
      if (tag != null && tag !== "") {
        await Promise.all([fetchBalance(), fetchTxn(), getERCTxn()]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [tag]);

  return (
    start && (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Table
              heading="ERC20 Transfer"
              header={["s.no", "from", "to", "token", "value", "time"]}
              param={["from", "to", "tokenName", "value"]}
              data={result.token}
              query={tag}
            />
            <Table
              heading="Normal Transaction"
              header={["s.no", "from", "to", "Contract Address", "time"]}
              param={["from", "to", "contractAddress"]}
              data={result.transactions}
              query={tag}
            />
          </div>
        )}
      </div>
    )
  );
};

export default Result;
