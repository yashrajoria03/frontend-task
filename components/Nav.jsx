"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@public/data/data";

const renderItems = navItems.map((item, idx) => (
  <span>
    <Link href={item.url} className=" font-medium text-lg" key={idx}>
      {item.title}
    </Link>
  </span>
));

const Nav = () => {
  //   states for navbar
  const [isClick, setClick] = useState(false);

  const toggleNavbar = () => {
    setClick(!isClick);
  };

  return (
    <div className="container mx-auto mt-1">
      <div className="flex items-center justify-between px-5 py-2 md:p-2">
        <div className="flex md-1/2 ">
          <Image
            src="/images/ether-logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        <div className="hidden w-full md:w-auto items-center justify-center md:flex ">
          <div className="space-x-12 mr-10">{renderItems}</div>
          <button className="px-4 py-2 border-2 border-primary rounded-md  font-medium text-purple-600 hover:text-purple-800 text-lg">
            Connect Wallet
          </button>
        </div>
        {/* Hamburger Menu Button */}
        {isClick ? (
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* hamburger Menu Items */}
      {isClick ? (
        <div className="w-full flex flex-col items-end justify-center px-4  bg-white shadow md:hidden  my-2 ">
          <div className="w-full space-y-2  flex flex-col items-end justify-center">
            {renderItems}
          </div>
          <button className="font-medium  text-lg">Connect Wallet</button>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
