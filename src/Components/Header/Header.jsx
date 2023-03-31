import React from "react";

const Header = () => {
  return (
    <div className="mx-2">
      <div className="navbar bg-indigo-400 p-5 ">
        <div className="flex-1 ">
          <a className="btn btn-ghost   text-white normal-case font-bold text-2xl">
            Knowledge is <span className="text-5xl ml-1"> Power </span>
          </a>
        </div>
        <div>
          <div>
            <label className="btn btn-ghost btn-circle avatar">
              <div>
                <img src="../../../public/images/profile8.png" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
