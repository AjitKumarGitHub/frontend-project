import React from "react";

const BarCard = () => {
  return (
    <div className="flex justify-between gap-4 border-2 border-gray-500 p-4 rounded-md w-max">
      <div className="">
        <h2 className="text-xl">Total Employees</h2>
        <p className="text-2xl font-semibold">216</p>
        <p className="text-lg mt-2">120 Men</p>
        <p className="text-lg">96 Women</p>
      </div>
      <div className="my-auto px-4"></div>
    </div>
  );
};

export default BarCard;
