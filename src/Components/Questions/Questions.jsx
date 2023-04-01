import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="h-auto  rounded-3xl mb-4 text-center shadow-2xl border-2  ">
      <select className="ease-in select h-20 rounded-t-3xl w-full border-2 ">
        <option selected>Dark mode or light mode?</option>
        <option>Auto</option>
      </select>
      <select className="select  rounded-t-sm w-full max-w-5xl  ">
        <option disabled selected>
          Dark mode or light mode?
        </option>
        <option>Auto</option>
        <option>Dark mode</option>
        <option>Light mode</option>
      </select>
      <select className="select rounded-t-sm w-full max-w-5x ">
        <option disabled selected>
          Dark mode or light mode?
        </option>
        <option>Auto</option>
        <option>Dark mode</option>
        <option>Light mode</option>
      </select>
      <select className="select h-20 rounded-b-3xl  w-full max-w-5xl">
        <option disabled selected>
          Dark mode or light mode?
        </option>
        <option>Auto</option>
        <option>Dark mode</option>
        <option>Light mode</option>
      </select>
    </div>
  );
};

export default Questions;
