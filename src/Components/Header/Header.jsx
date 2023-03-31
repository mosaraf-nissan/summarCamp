import React from "react";

const Header = () => {
  return (
    <div className="mx-2">
      <div className="navbar bg-indigo-400 p-4 rounded-b-lg">
        <div className="flex-1 ">
          <a href="">
            <img
              className=" w-56 "
              src="../../../public/images/cafe.png"
              alt=""
            />
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
