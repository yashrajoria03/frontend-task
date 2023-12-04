import React from "react";
import { MdLocalGasStation } from "react-icons/md";

const header = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-center  p-2 md:text-sm space-x-10 md:space-x-5 md:justify-start">
        <div>
          ETH Price: <span className="text-blue-500">$2525</span>
        </div>
        <div className="flex items-center justify-start">
          <span>
            <MdLocalGasStation size={20} />
          </span>
          <p>
            Gas: <span>27 Gwei</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default header;
