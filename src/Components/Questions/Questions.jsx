import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="h-auto  rounded-3xl mb-4 text-center shadow-2xl border-2  ">
      <select className="ease-in select h-20 rounded-t-3xl w-full border-2 text-2xl ">
        <option selected className="text-bold">
          Props vs state?
        </option>
        <option disabled selected>
          "props" (short for "properties") is an object of arbitrary
        </option>
        <option disabled>
          inputs a React function component accepts as the first argument.
        </option>
        <option disabled selected>
          "state" is data that changes over the lifetime of a specific instance
          of a React component.
        </option>
      </select>
      <select className="select  rounded-t-sm w-full max-w-5xl text-2xl ">
        <option selected>How does useState work?</option>
        <option disabled>
          The React useState Hook allows us to track state in a function{" "}
          component.
        </option>
        <option disabled>
          State generally refers to data or properties that need to be tracking
          in an application.
        </option>
      </select>
      <select className="select rounded-t-sm w-full max-w-5x text-2xl">
        <option selected>
          What Purpose of useEffect other than fetching data?
        </option>
        <option disabled>
          The useEffect in react js allows you to perform side
        </option>
        <option disabled>effects in your components.</option>
      </select>
      <select className="select h-20 rounded-b-3xl  w-full max-w-5xl text-2xl">
        <option disabled selected>
          How Does React work?
        </option>
        <option disabled>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components.
        </option>
        <option disabled>
          React components work similarly to JavaScript functions as
        </option>
        <option disabled>
          they accept arbitrary inputs called properties or props.
        </option>
      </select>
    </div>
  );
};

export default Questions;
