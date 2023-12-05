"use client";
import React, { useEffect, useState } from "react";
import { MdLocalGasStation } from "react-icons/md";
import axios from "axios";

const header = () => {
  const [ethPrice, setEthPrice] = useState(null);
  const [gasPrice, setGasPrice] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_ETHER_KEY;

  useEffect(() => {
    //fetching ethereum price
    const getEthPrice = async () => {
      const res = await axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`
        )
        .then((response) => {
          setEthPrice(response.data.result.ethusd);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // fetching gas price
    const getGasPrice = async () => {
      const res = await axios
        .get(
          `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKey}`
        )
        .then((response) => {
          setGasPrice(response.data.result.ProposeGasPrice);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    };

    getEthPrice();
    getGasPrice();
  }, []);

  return (
    <div className="container mx-auto ">
      <div className="flex items-center  p-2 md:text-sm space-x-5 md:space-x-5 justify-start">
        <div>
          ETH Price:{" "}
          <span className="text-blue-500">
            ${parseFloat(ethPrice).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-start">
          <span>
            <MdLocalGasStation size={20} />
          </span>
          <p>
            Gas: <span>{gasPrice} Gwei</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default header;
