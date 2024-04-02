import "./Body.scss";

import image1 from "../../assets/images/product/image_1.jpg";
import image2 from "../../assets/images/product/image_2.jpg";
import image3 from "../../assets/images/product/image_3.jpg";
import image4 from "../../assets/images/product/image_4.jpg";
import image5 from "../../assets/images/product/image_5.jpg";
import image6 from "../../assets/images/product/image_6.jpg";
import image7 from "../../assets/images/product/image_7.jpg";
import image8 from "../../assets/images/product/image.png";
import image9 from "../../assets/images/product/image9.png";
import image10 from "../../assets/images/product/image10.png";
import image11 from "../../assets/images/product/image_11.jpg";
import image12 from "../../assets/images/product/image_12.jpg";
import image13 from "../../assets/images/product/image_13.jpg";
import image14 from "../../assets/images/product/image_14.jpg";
import image15 from "../../assets/images/product/image_15.jpg";
import image16 from "../../assets/images/product/image_16.jpg";
import image17 from "../../assets/images/product/image_17.jpg";
import image18 from "../../assets/images/product/image_18.png";
import shopImage1 from "../../assets/images/shop/image1.jpg";
import shopImage2 from "../../assets/images/shop/image2.png";
import shopImage3 from "../../assets/images/shop/image3.png";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowDown,
} from "react-icons/md";
import {
  BiLogoMessenger,
  BiLogoPinterest,
  BiLogoFacebookCircle,
} from "react-icons/bi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { AiFillTwitterCircle, AiFillHeart, AiFillStar } from "react-icons/ai";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { productRating } from "../../context/ProductRating";
import ProductRatingItem from "./ProductRatingItem/ProductRatingItem";
import Pagination from "./Pagination/Pagination";
import _ from "lodash";

const Body = () => {
  const [image, setImage] = useState(image1);
  const [mainImage, setMainImage] = useState(image1);
  const [index, setIndex] = useState(1);
  const [value, setValue] = useState(1);
  const [text, setText] = useState(initialText);

  const [paginationIndex, setPaginationIndex] = useState(1);
  const [rating, setRating] = useState(productRating)
  const [ratingItem, setRatingItem] = useState([]);
  const [filterNum, setFilterNum] = useState(1);
  const productImageRef = useRef();

  const setImageIndex = (index, image) => {
    setImage(image);
    setMainImage(image);
    setIndex(index);
  };
  const goToStart = () => {
    const offsetWidthItem = productImageRef.current.children[1].offsetWidth;
    productImageRef.current.scrollLeft -= offsetWidthItem;
  };
  const goToEnd = () => {
    const offsetWidthItem = productImageRef.current.children[1].offsetWidth;
    productImageRef.current.scrollLeft += offsetWidthItem;
  };
  const handleClick = (num, action) => {
    setFilterNum(num)
    setPaginationIndex(1)
    switch(action) {
        case "all":
            setRating(productRating);
            return
        case "5star":
            setRating(productRating.filter(item => item.ratingStar===5));
            return
        case "4star":
            setRating(productRating.filter(item => item.ratingStar===4));
            return 
        case "3star":
            setRating(productRating.filter(item => item.ratingStar===3));
            return 
        case "2star":
            setRating(productRating.filter(item => item.ratingStar===2));
            return 
        case "1star":
            setRating(productRating.filter(item => item.ratingStar===1));
            return 
        case "comment":
            setRating(productRating.filter(item => item.titleRating !== null));
            return 
        case "media":
            setRating(productRating.filter(item => item.imageRating !== null));
            return 
    }
  }
  useEffect(()=>{
    setRatingItem(rating.filter((item, index) => index >= paginationIndex*6-6 && index < paginationIndex*6))
  }, [paginationIndex, rating])
  return (
    <>
      <div className="body-wrapper container-wrapper">
        <div className="body-inner">
          <div className="product">
            <div className="path">
              <a className="link" href="https://shopee.vn/">
                Shopee
              </a>
              <MdOutlineKeyboardArrowRight className="icon" />
              <a
                className="link"
                href="https://shopee.vn/Computer-Accessories-cat.11035954"
              >
                Computer & Accessories
              </a>
              <MdOutlineKeyboardArrowRight className="icon" />
              <a
                className="link"
                href="https://shopee.vn/Peripherals-Accessories-cat.11035954.11036000"
              >
                Peripherals & Accessories
              </a>
              <MdOutlineKeyboardArrowRight className="icon" />
              <a
                className="link"
                href="https://shopee.vn/Keyboards-cat.11035954.11036000.11036013"
              >
                Keyboards
              </a>
              <MdOutlineKeyboardArrowRight className="icon" />
              <div className="text">Bàn phím cơ KBD67 Lite R4</div>
            </div>
            <div className="product-detail">
              <div className="image">
                <div className="main-display">
                  <img src={image} alt="product" />
                </div>
                <div className="display-item">
                  <div className="arrow ar-left" onClick={() => goToStart()}>
                    <MdOutlineKeyboardArrowLeft />
                  </div>
                  <div className="display" ref={productImageRef}>
                    <div className="item">
                      <div
                        className={
                          "image-item" + (index === 1 ? " red-border" : "")
                        }
                        onMouseOver={() => setImageIndex(1, image1)}
                      >
                        <img src={image1} alt="product-item-1" />
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className={
                          "image-item" + (index === 2 ? " red-border" : "")
                        }
                        onMouseOver={() => setImageIndex(2, image2)}
                      >
                        <img src={image2} alt="product-item-1" />
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className={
                          "image-item" + (index === 3 ? " red-border" : "")
                        }
                        onMouseOver={() => setImageIndex(3, image3)}
                      >
                        <img src={image3} alt="product-item-1" />
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className={
                          "image-item" + (index === 4 ? " red-border" : "")
                        }
                        onMouseOver={() => setImageIndex(4, image4)}
                      >
                        <img src={image4} alt="product-item-1" />
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className={
                          "image-item" + (index === 5 ? " red-border" : "")
                        }
                        onMouseOver={() => setImageIndex(5, image5)}
                      >
                        <img src={image5} alt="product-item-1" />
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className={
                          "image-item" + (index === 6 ? " red-border" : "")
                        }
                        onMouseOver={() => setImageIndex(6, image6)}
                      >
                        <img src={image6} alt="product-item-1" />
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className={
                          "image-item" + (index === 7 ? " red-border" : "")
                        }
                        onMouseOver={() => setImageIndex(7, image7)}
                      >
                        <img src={image7} alt="product-item-1" />
                      </div>
                    </div>
                  </div>
                  <div className="arrow ar-right" onClick={() => goToEnd()}>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
                <div className="last-part">
                  <div className="social-media">
                    <span>Share:</span>
                    <BiLogoMessenger
                      className="icon"
                      style={{ color: "#0384FF" }}
                    />
                    <BiLogoFacebookCircle
                      className="icon"
                      style={{ color: "#3B5999" }}
                    />
                    <BiLogoPinterest
                      className="icon"
                      style={{ color: "#DE0217" }}
                    />
                    <AiFillTwitterCircle
                      className="icon"
                      style={{ color: "#10C2FF" }}
                    />
                  </div>
                  <div className="favorite">
                    <AiFillHeart
                      className="icon"
                      style={{ color: "#FF424F" }}
                    />
                    <span>Favorite (122)</span>
                  </div>
                </div>
              </div>
              <div className="detail">
                <div className="title">
                  <span>Preferred</span> Bàn phím cơ KBD67 Lite R4
                </div>
                <div className="rating-star">
                  <div className="left-content">
                    <div className="star">
                      <span>5.0</span>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <div className="dn font-cl">
                      <span className="num-cl">14</span>Rating
                    </div>
                    <div className="dn font-cl">
                      <span className="num-cl">47</span>Sold
                    </div>
                  </div>
                  <div className="right-content">
                    <p>Report</p>
                  </div>
                </div>
                <div className="price">
                  <div className="content">
                    <span>₫</span>2.300.000 - <span>₫</span>6.500.000
                  </div>
                </div>
                <div className="pd">
                  <div className="pd-item">
                    <div className="left-content">Return</div>
                    <div className="right-content first-item">
                      <img src={image8} alt="image" />
                      <p className="mg-right" style={{ color: "#555" }}>
                        15 Days Return
                      </p>
                      <p
                        className="mg-right"
                        style={{ color: "rgba(0, 0, 0, .54)" }}
                      >
                        Change Of Mind
                      </p>
                      <HiOutlineQuestionMarkCircle
                        style={{ color: "rgba(0, 0, 0, .54)" }}
                      />
                    </div>
                  </div>
                  <div className="pd-item">
                    <div className="left-content">Shipping</div>
                    <div className="right-content second-item">
                      <div className="top-content">
                        <img src={image9} alt="image" />
                        <p>Free shopping</p>
                      </div>
                      <div className="bot-content">
                        <img src={image10} alt="image" />
                        <div className="first">
                          <div style={{ marginBottom: "10px" }}>Shipping To</div>
                          <div>Shipping Fee</div>
                        </div>
                        <div className="second">
                          <div style={{ marginBottom: "10px" }}>
                            Phường Linh Trung, Thành phố Thủ Đức
                          </div>
                          <div className="relative">
                            <div className="flex hv">₫0<span style={{ marginLeft: "3px" }}><MdKeyboardArrowDown /></span></div>
                            <div className="popover">
                                <div className="popover__item">
                                    <div className="popover__title">
                                        <div className="popover__title-right">Nhanh</div>
                                        <div className="popover__title-left popover__font-cl"><span>₫18.300</span>Free shipping</div>
                                    </div>
                                    <div className="popover__date">Get by 3 Tháng 4 - 4 Tháng 4</div>
                                    <div className="popover__text"><span className="popover__font-cl">Free shipping</span> on orders from ₫0</div>
                                    <div className="popover__text"><span className="popover__font-cl">Free shipping</span> on orders from ₫25.000</div>
                                </div>
                                <div className="popover__item">
                                    <div className="popover__title">
                                        <div className="popover__title-right">Hàng Cồng Kềnh</div>
                                        <div className="popover__title-left popover__font-cl"><span>₫18.300</span>Free shipping</div>
                                    </div>
                                    <div className="popover__date">Get by 4 Tháng 4 - 5 Tháng 4</div>
                                    <div className="popover__text"><span className="popover__font-cl">Free shipping</span> on orders from ₫0</div>
                                    <div className="popover__text"><span className="popover__font-cl">Free shipping</span> on orders from ₫25.000</div>
                                </div>
                                <div className="popover__item">
                                    <div className="popover__title">
                                        <div className="popover__title-right">Hỏa Tốc</div>
                                        <div className="popover__title-left popover__font-cl"><span>₫22.000</span>Free shipping</div>
                                    </div>
                                    <div className="popover__date">Get by today</div>
                                    <div className="popover__text"><span className="popover__font-cl">Free shipping</span> on orders from ₫25.000</div>
                                    <div className="popover__text-end">Co-check does not apply to Instant orders</div>
                                </div>
                            </div>
                        </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pd-item">
                    <div style={{ marginTop: "10px" }} className="left-content">
                      Color
                    </div>
                    <div className="right-content third-item flex-gap">
                      <div
                        className="item bd-item"
                        onMouseOver={() => setImage(image11)}
                        onMouseLeave={() => setImage(mainImage)}
                      >
                        <img src={image11} alt="img" />
                        <span>Black</span>
                      </div>
                      <div
                        className="item bd-item"
                        onMouseOver={() => setImage(image12)}
                        onMouseLeave={() => setImage(mainImage)}
                      >
                        <img src={image12} alt="img" />
                        <span>White</span>
                      </div>
                      <div
                        className="item bd-item"
                        onMouseOver={() => setImage(image13)}
                        onMouseLeave={() => setImage(mainImage)}
                      >
                        <img src={image13} alt="img" />
                        <span>Steel Gray</span>
                      </div>
                      <div
                        className="item bd-item"
                        onMouseOver={() => setImage(image14)}
                        onMouseLeave={() => setImage(mainImage)}
                      >
                        <img src={image14} alt="img" />
                        <span>Bonie Cream</span>
                      </div>
                      <div
                        className="item bd-item"
                        onMouseOver={() => setImage(image15)}
                        onMouseLeave={() => setImage(mainImage)}
                      >
                        <img src={image15} alt="img" />
                        <span>Nhôm - Black</span>
                      </div>
                      <div
                        className="item bd-item"
                        onMouseOver={() => setImage(image16)}
                        onMouseLeave={() => setImage(mainImage)}
                      >
                        <img src={image16} alt="img" />
                        <span>Nhôm - Ewhite</span>
                      </div>
                      <div
                        className="item bd-item"
                        onMouseOver={() => setImage(image17)}
                        onMouseLeave={() => setImage(mainImage)}
                      >
                        <img src={image17} alt="img" />
                        <span>Nhôm - Gray</span>
                      </div>
                    </div>
                  </div>
                  <div className="pd-item">
                    <div style={{ marginTop: "10px" }} className="left-content">
                      Category
                    </div>
                    <div className="right-content forth-item flex-gap">
                      <div className="item bd-item">1 mode - ANSI</div>
                      <div className="item bd-item">1 mode - ISO</div>
                      <div className="item bd-item">2 mode - ANSI</div>
                    </div>
                  </div>
                  <div className="pd-item">
                    <div className="left-content">Quantity</div>
                    <div className="right-content fifth-item">
                      <div className="counter">
                        <div
                          className="minus button"
                          onClick={() =>
                            setValue(
                              parseInt(value) === 0 ? 0 : parseInt(value) - 1
                            )
                          }
                        >
                          <BiMinus />
                        </div>
                        <div className="num">
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                        <div
                          className="plus button"
                          onClick={() => setValue(parseInt(value) + 1)}
                        >
                          <BiPlus />
                        </div>
                      </div>
                      <div className="text">0 pieces available</div>
                    </div>
                  </div>
                  <div className="btn">
                    <button className="item first">
                      <img width={15} height={15} src={image18} alt="img" />
                      <span>Add To Cart</span>
                    </button>
                    <button className="item second">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shop">
            <div className="inner">
              <div className="shop-info">
                <div className="image">
                  <img src={shopImage1} alt="img" />
                  <div className="text">
                    <p>Preffered</p>
                  </div>
                </div>
                <div className="info">
                  <div className="title">BYS Store</div>
                  <div className="text">Active 4 Hours Ago</div>
                  <div className="btn">
                    <button className="flex-item first">
                      <img src={shopImage2} alt="img" />
                      <span>Chat Now</span>
                    </button>
                    <a
                      href="https://shopee.vn/beyourstyle?categoryId=100644&entryPoint=ShopByPDP&itemId=12916975704"
                      className="flex-item second"
                    >
                      <img src={shopImage3} alt="img" />
                      <span>View Shop</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="statistic">
                <div className="item">
                  <div className="item-text">Ratings</div>
                  <div className="num">2,7k</div>
                </div>
                <div className="item">
                  <div className="item-text">Response Rate</div>
                  <div className="num">96%</div>
                </div>
                <div className="item">
                  <div className="item-text">Joined</div>
                  <div className="num">7 years ago</div>
                </div>
                <div className="item">
                  <div className="item-text">Products</div>
                  <div className="num">205</div>
                </div>
                <div className="item">
                  <div className="item-text">Response Time</div>
                  <div className="num">within hours</div>
                </div>
                <div className="item">
                  <div className="item-text">Follower</div>
                  <div className="num">4,2k</div>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="inner">
              <div className="pd-inner">
                <div className="title">Product Specifications</div>
                <div className="content ct-top">
                  <div className="item">
                    <div className="left">Category</div>
                    <div className="right link">
                      <a href="https://shopee.vn/">Shopee</a>
                      <MdOutlineKeyboardArrowRight />
                      <a href="https://shopee.vn/Computer-Accessories-cat.11035954">
                        Computer & Accessories
                      </a>
                      <MdOutlineKeyboardArrowRight />
                      <a href="https://shopee.vn/Peripherals-Accessories-cat.11035954.11036000">
                        Peripherals & Accessories
                      </a>
                      <MdOutlineKeyboardArrowRight />
                      <a href="https://shopee.vn/Keyboards-cat.11035954.11036000.11036013">
                        Keyboards
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="left">Warranty Duration</div>
                    <div className="right">No Warranty</div>
                  </div>
                  <div className="item">
                    <div className="left">Warranty Type</div>
                    <div className="right">No Warranty</div>
                  </div>
                  <div className="item">
                    <div className="left">Gaming Focused</div>
                    <div className="right">No</div>
                  </div>
                  <div className="item">
                    <div className="left">Stock</div>
                    <div className="right">0</div>
                  </div>
                  <div className="item">
                    <div className="left">Ship Form</div>
                    <div className="right">TP. Ho Chi Minh</div>
                  </div>
                </div>
              </div>
              <div className="pd-inner">
                <div className="title">Product Description</div>
                <div className="content pd-des">{text}</div>
              </div>
            </div>
          </div>
          <div className="product-rating">
            <div className="title">Product Ratings</div>
            <div className="overview">
              <div className="overview__briefing">
                <div className="overview__score-wrapper">
                  <span className="overview__score">5</span>
                  <span className="overview__score-out-of"> out of 5</span>
                </div>
                <div className="overview__stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <div className="overview__filters">
                <div className={"overview__filter"+(filterNum===1 ? " active" : "")} onClick={()=>handleClick(1, "all")}>All</div>
                <div className={"overview__filter"+(filterNum===2 ? " active" : "")} onClick={()=>handleClick(2, "5star")}>5 Star ({
                    productRating.filter(item => item.ratingStar === 5).length
                })</div>
                <div className={"overview__filter"+(filterNum===3 ? " active" : "")} onClick={()=>handleClick(3, "4star")}>4 Star ({
                    productRating.filter(item => item.ratingStar === 4).length
                })</div>
                <div className={"overview__filter"+(filterNum===4 ? " active" : "")} onClick={()=>handleClick(4, "3star")}>3 Star ({
                    productRating.filter(item => item.ratingStar === 3).length
                })</div>
                <div className={"overview__filter"+(filterNum===5 ? " active" : "")} onClick={()=>handleClick(5, "2star")}>2 Star ({
                    productRating.filter(item => item.ratingStar === 2).length
                })</div>
                <div className={"overview__filter"+(filterNum===6 ? " active" : "")} onClick={()=>handleClick(6, "1star")}>1 Star ({
                    productRating.filter(item => item.ratingStar === 1).length
                })</div>
                <div className={"overview__filter"+(filterNum===7 ? " active" : "")} onClick={()=>handleClick(7, "comment")}>With Comments ({
                    productRating.filter(item => item.titleRating !== null).length
                })</div>
                <div className={"overview__filter"+(filterNum===8 ? " active" : "")} onClick={()=>handleClick(8, "media")}>With Media ({
                    productRating.filter(item => item.imageRating !== null).length
                })</div>
              </div>
            </div>
            <div className="list">
              <div className="comment-list">
                {!_.isEmpty(ratingItem) ? ratingItem.map(item => <ProductRatingItem key={item.id} item={item} />) : (<div className="no-comment">No Rating</div>)}
              </div>
            </div>
            {rating.length > 6 && (<Pagination paginationIndex={paginationIndex} setPaginationIndex={setPaginationIndex} last={Math.ceil(rating.length / 6)} />)}
          </div>
        </div>
      </div>
    </>
  );
};

const initialText = `Thông tin sản phẩm: 
 - Chất liệu case: Abs plastic material
 - Kiểu mount: gasket
 - Sản xuất: Trung Quốc
 - Thiết kế: KBDfans
 - Nghiêng: 6 độ

Kit bao gồm:
 - Case nhựa hoặc nhôm
 - Mute silicon (có tác dụng như gasket)
 - Foam Case (poron)
 - PCB KBD67 MKII hotswap RGB (bản wired - 1 mode) - hoặc PCB YD67BLE hotswap, không led (bản bluetooth - 2 mode)
 - Plate PC với stand-off
 - Stab Cherry Screw-in
 - Stab foam
 - USC C cable
 - Carrying Case
 - Ốc vít, feet,...

Wired PCB Specs:
 - PCB: KBD67 MKII Hot-swap PCB
 - Fixed layout
 - Support Per-key RGB
 - Based on QMK
 - Support VIA
 - Kailh hot-swap sockets

Wireless PCB Specs:
 - Bluetooth 4.0 Dual-mode version
 - Fixed layout
 - No Per-key RGB, has an indicator on the caps lock key
 - Based on TMK
 - Support VIA，update by ydkb.io
 - Gateron hot-swap sockets

Thông tin chi tiết và firmware xem chi tiết tại trang chủ KBDFans: https://kbdfans.com/collections/kbd67-lite/products/kbd67lite
KHÔNG BAO GỒM SWITCH VÀ KEYCAP,  BẢN BLUETOOHT KHÔNG GỒM PIN
`;

export default Body;
