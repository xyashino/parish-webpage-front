import React from "react";
export const Footer = () => {
  return (
    <footer className="max-w-screen  footer items-center self-end bg-primary p-4 text-base-100">
      <div className="grid-flow-col items-center">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        Created by
        <a href="https://github.com/xyashino" className="link">
          xyashino
        </a>
      </div>
    </footer>
  );
};
