import React from "react";

const Header = () => {
  return (
    <div className="mx-2">
      <div className="navbar bg-[#F3F3F3] p-1 rounded-b-lg">
        <div className="flex-1 ">
          <a href="">
            <img className=" w-56 " src="/images/reactkk.png" alt="knowledge" />
          </a>
        </div>
        <div>
          <div className="mr-5">
            <label className="btn btn-ghost btn-circle avatar border-2 border-orange-600">
              <div>
                <img src="/images/react.png" alt="" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
