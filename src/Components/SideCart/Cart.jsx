import React from "react";

const Cart = ({ data }) => {
  console.log(data);
  return (
    <div className="sticky top-0 mt-5">
      <h1 className="font-semibold">Bookmarked Blogs :- {data.length}</h1>
      <div>
        <h1>{data.name}</h1>
      </div>
    </div>
  );
};

export default Cart;
