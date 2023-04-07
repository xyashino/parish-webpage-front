import React from "react";

export const Loader = () => {
  return (
    <div className="loading rounded-badge btn absolute  bottom-0 right-0 z-50 m-16 border-2  border-info-content bg-info text-info-content">
      <h1 className="font-bold uppercase ">Loading...</h1>
    </div>
  );
};
