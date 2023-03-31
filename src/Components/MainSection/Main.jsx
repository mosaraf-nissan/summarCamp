import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../SideCart/Cart";

const Main = () => {
  const [data, setData] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  console.log(singleBlog);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleBookmark = (blog) => {
    const newBlog = [...singleBlog, blog];
    setSingleBlog(newBlog);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-12 mx-2 mt-5 gap-3">
        <div className=" md:col-span-9   bg-indigo-400 rounded-3xl p-5">
          {data.map((blog) => (
            <Card
              blog={blog}
              key={blog.id}
              handleBookmark={handleBookmark}
            ></Card>
          ))}
        </div>
        <div className=" bg-indigo-400 rounded-3xl text-white md:col-span-3 text-center">
          <Cart data={singleBlog}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;
