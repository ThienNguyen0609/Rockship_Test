import "./ProductRatingItem.scss";

import { BiSolidLike } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import ff from "../../../assets/images/product-rating/user/user1/user1.jpg"

const ProductRatingItem = ({item}) => {
  // function getImageUrl(num, name) {
  //   return new URL(`src/assets/images/product-rating/user/user${num}/${name}.png`, import.meta.url).href
  // }
  function getImageUrl(imageURL) {
    return new URL(imageURL, import.meta.url).href
  }
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
              src={getImageUrl(item.userImage)}
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
                  src={getImageUrl(imgItem)}
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
