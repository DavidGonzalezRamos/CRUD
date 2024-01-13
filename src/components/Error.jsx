import React from "react";
import { useState, useEffect } from "react";

const Error = ({ children }) => {
  return (
    <div className="text-center font-bold uppercase mb-3 p-3 rounded-md text-white bg-red-800">
      <p>{children} </p>
    </div>
  );
};

export default Error;
