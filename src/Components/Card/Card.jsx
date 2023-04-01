import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const Card = ({ blog, handleBookmark, handleReadCount }) => {
  const { id, title, authorImage, image, name, readTime, Publish } = blog;

  return (
    <div className="  mx-auto mb-5 select-none">
      <div className="card card-compact w-auto border-2  h-[500px] bg-base-100 shadow-xl">
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
                onClick={() => handleBookmark(blog)}
                className="cursor-pointer"
                icon={faBookmark}
              />
            </div>
          </div>
          <h1 className="card-title text-4xl">{title}</h1>
          <p>#beginners #Programming</p>
          <div className="leading-loose card-actions">
            <button
              onClick={() => handleReadCount(blog)}
              className="text-blue-500"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
