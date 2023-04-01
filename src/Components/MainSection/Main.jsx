import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../SideCart/Cart";
import Questions from "../Questions/Questions";

const Main = () => {
  const [data, setData] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [totalRead, setTotalRead] = useState([]);
  console.log(totalRead);
  console.log(singleBlog);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleReadCount = (blog) => {
    console.log(blog)
    const newReadTime = [...totalRead, blog];
    setTotalRead(newReadTime);
  };

  const handleBookmark = (title) => {
    const newBlog = [...singleBlog, title];
    setSingleBlog(newBlog);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-12 mx-2 mt-5 gap-3">
        <div className=" md:col-span-9   bg-[#F3F3F3] rounded-t-3xl p-5">
          {data.map((blog) => (
            <Card
              blog={blog}
              key={blog.id}
              handleBookmark={handleBookmark}
              handleReadCount={handleReadCount}
            ></Card>
          ))}
          <Questions></Questions>
        </div>
        <div className=" bg-[#F3F3F3] rounded-t-3xl text-white md:col-span-3 text-center">
          <Cart newData={totalRead} data={singleBlog}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;
