import "./ProductRatingItem.scss";

import { BiSolidLike } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const ProductRatingItem = ({item}) => {
  return (
    <>
      <div className="product-rating__item">
        <a className="product-rating__avatar">
          <div className="avatar__placeholder">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
            >
              <g>
                <circle
                  cx="7.5"
                  cy="4.5"
                  fill="none"
                  r="3.8"
                  strokeMiterlimit="10"
                ></circle>
                <path
                  d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                />
              </g>
            </svg>
          </div>
          {item.userImage && (
            <img
              className="avatar__img"
              src={require(item.userImage)}
              alt="img"
            />
          )}
        </a>
        <div className="product-rating__main">
          <div className="product-rating__author-name">{item.userName}</div>
          <div className="product-rating__stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="product-rating__time-variation">
            {item.dateRating} | {item.variation}
          </div>
          {item.imageRating && (
            <div className="product-rating__images">
              {item.imageRating.map((imgItem, index) => (
                <img
                  key={index}
                  className="product-rating__image"
                  src={require(imgItem)}
                  alt="img"
                />
              ))}
            </div>
          )}
          {item.titleRating && (
            <div className="product-rating__comment">{item.titleRating}</div>
          )}
          <div className="product-rating__actions">
            <BiSolidLike className="like-icon" />
            <span>{item.like !== 0 ? `${item.like}` : "Helpful?"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRatingItem;
