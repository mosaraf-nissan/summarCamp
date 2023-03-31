import React from "react";

const Card = ({ blog }) => {
  console.log(blog);
  const { id, title, authorImage, image, name, readTime, Publish } = blog;
  return (
    <div className=" w-[700px] mx-auto mb-5">
      <div className="card card-compact w-auto border h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Cover Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
