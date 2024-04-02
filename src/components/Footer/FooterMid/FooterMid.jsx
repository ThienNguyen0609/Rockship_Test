import './FooterMid.scss'

import image1 from '../../../assets/images/payment/image1.png'
import image2 from '../../../assets/images/payment/image2.png'
import image3 from '../../../assets/images/payment/image3.png'
import image4 from '../../../assets/images/payment/image4.png'
import image5 from '../../../assets/images/payment/image5.png'
import image6 from '../../../assets/images/payment/image6.png'
import image7 from '../../../assets/images/payment/image7.png'
import image8 from '../../../assets/images/payment/image8.png'
import image9 from '../../../assets/images/payment/image9.png'
import image10 from '../../../assets/images/payment/image10.png'
import image11 from '../../../assets/images/payment/image11.png'
import image12 from '../../../assets/images/payment/image12.png'
import image13 from '../../../assets/images/payment/image13.png'
import image14 from '../../../assets/images/payment/image14.png'
import image15 from '../../../assets/images/payment/image15.png'
import image16 from '../../../assets/images/payment/image16.png'
import image17 from '../../../assets/images/payment/image17.png'
import image18 from '../../../assets/images/payment/image18.png'
import image19 from '../../../assets/images/payment/image19.png'
import dlImage1 from '../../../assets/images/link-download/image1.png'
import dlImage2 from '../../../assets/images/link-download/image2.png'
import dlImage3 from '../../../assets/images/link-download/image3.png'
import dlImage4 from '../../../assets/images/link-download/image4.png'
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";

const FooterMid = () => {
    return (
        <>
        <div className='fm-wrapper'>
            <div className="fm-inner">
                <div className="top-inner">
                    <div className='item'>
                        <div className="title">Customer Service</div>
                        <div className="text-link">
                            <a href="https://shopee.vn/">Help Centre</a>
                            <a href="https://shopee.vn/">Shopee Blog</a>
                            <a href="https://shopee.vn/">Shopee Mall</a>
                            <a href="https://shopee.vn/">How To Buy</a>
                            <a href="https://shopee.vn/">How To Sell</a>
                            <a href="https://shopee.vn/">Payment</a>
                            <a href="https://shopee.vn/">Shopee Coins</a>
                            <a href="https://shopee.vn/">Shipping</a>
                            <a href="https://shopee.vn/">Return & Refund</a>
                            <a href="https://shopee.vn/">Contact Us</a>
                            <a href="https://shopee.vn/">Warranty Policy</a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="title">About Shopee</div>
                        <div className="text-link">
                            <a href="https://shopee.vn/">About Us</a>
                            <a href="https://shopee.vn/">Shopee Careers</a>
                            <a href="https://shopee.vn/">Shopee Policies</a>
                            <a href="https://shopee.vn/">Privacy Policy</a>
                            <a href="https://shopee.vn/">Shopee Mall</a>
                            <a href="https://shopee.vn/">Seller Centre</a>
                            <a href="https://shopee.vn/">Flash Deals</a>
                            <a href="https://shopee.vn/">Shopee Ambassador Programme</a>
                            <a href="https://shopee.vn/">Media Contact</a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="title">Payment</div>
                        <div className="list">
                            <div className="list-item">
                                <img src={image1} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image2} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image3} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image4} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image5} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image6} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image7} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image8} alt="img" />
                            </div>
                        </div>
                        <div className="title">Logistics</div>
                        <div className="list">
                            <div className="list-item">
                                <img src={image9} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image10} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image11} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image12} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image13} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image14} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image15} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image16} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image17} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image18} alt="img" />
                            </div>
                            <div className="list-item">
                                <img src={image19} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="title">Follow Us</div>
                        <div className="social-list">
                            <a className="social-item">
                                <div className="social-image">
                                    <BiLogoFacebookCircle />
                                </div>
                                <div className="text">Facebook</div>
                            </a>
                            <a className="social-item">
                                <div className="social-image">
                                    <BiLogoInstagramAlt />
                                </div>
                                <div className="text">Instagram</div>
                            </a>
                            <a className="social-item">
                                <div className="social-image">
                                    <BiLogoLinkedinSquare />
                                </div>
                                <div className="text">LinkedIn</div>
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="title">Shopee App Download</div>
                        <div className="link-download">
                            <div className="qr">
                                <img src={dlImage1} alt="img" />
                            </div>
                            <div className="download-list">
                                <div className="download-item">
                                    <img src={dlImage2} alt="img" />
                                </div>
                                <div className="download-item">
                                    <img src={dlImage3} alt="img" />
                                </div>
                                <div className="download-item">
                                    <img src={dlImage4} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot-inner">
                    <div className="left-bot-inner">© 2024 Shopee. All Rights Reserved .</div>
                    <div className="right-bot-inner">
                        Country & Region:
                        <a className='tn'>Singapore</a>
                        <a className='tn'>Indonesia</a>
                        <a className='tn'>Taiwan</a>
                        <a className='tn'>Thanland</a>
                        <a className='tn'>Malaysia</a>
                        <a className='tn'>Vietnam</a>
                        <a className='tn'>Philippins</a>
                        <a className='tn'>Brazil</a>
                        <a className='tn'>Mexico</a>
                        <a className='tn'>Colombia</a>
                        <a>Chile</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterMid