import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-12 mx-2 mt-5 gap-3 ">
        <div className=" md:col-span-9   bg-indigo-400 rounded-3xl p-5">
          {data.map((blog) => (
            <Card blog={blog} key={blog.id}></Card>
          ))}
        </div>
        <div className=" bg-indigo-400 rounded-3xl text-white md:col-span-3 text-center">
          <h3>side content</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
