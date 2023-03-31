import React from "react";

const Cart = ({ data, newData }) => {
  console.log(newData, data, "forWWW");

  let totalReadTime = 0;
  for (const singleData of newData) {
    totalReadTime = totalReadTime + singleData.readTime;
  }
  return (
    <div className="sticky top-0 mt-5 px-5">
      <div className="w-full h-20 border-2 border-orange-500 flex justify-center align-middle items-center mb-5 bg-white rounded-lg text-blue-500 font-semibold ">
        <h1>Spent time on read :- {totalReadTime} min</h1>
      </div>
      <h1 className="font-semibold underline">
        Bookmarked Blogs :- {data.length}
      </h1>
      {data.map((title) => (
        <div className="py-1">
          <h3 className="h-20 border-2 bg-slate-100 text-black items-center flex justify-center mb-5 mt-5 font-semibold rounded-lg">
            {title.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;
