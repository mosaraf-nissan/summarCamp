import React from "react";

const Main = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-12 mx-2 mt-5 gap-3">
        <div className=" md:col-span-9 text-white text-center  bg-slate-700">
          <h1>Main Content</h1>
        </div>
        <div className=" bg-red-600 md:col-span-3 text-center">
          <h3>side content</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
