import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const Card = ({ blog }) => {
  console.log(blog);
  const { id, title, authorImage, image, name, readTime, Publish } = blog;
  return (
    <div className=" md:w-[700px] mx-auto mb-5">
      <div className="card card-compact w-auto border-2 border-orange-500 h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Cover Photo" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <img className="rounded-full w-14" src={authorImage} alt="" />
              <div>
                <h4>{name}</h4>
                <p>{Publish}</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <p>{readTime} min read</p>
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={() => handleReadTime(id)}
                icon={faBookmark}
              />
            </div>
          </div>
          <h1 className="card-title text-4xl">{title}</h1>
          <p>#beginners #Programming</p>
          <div className="leading-loose card-actions">
            <button className="text-blue-500">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const handleReadTime = (id) => {
  console.log(id);
};

export default Card;
