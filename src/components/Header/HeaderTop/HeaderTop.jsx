import './HeaderTop.scss'


import QRCode from "../../../assets/images/header/QRCode.png"
import appStore from "../../../assets/images/header/app-store.png"
import googlePlay from "../../../assets/images/header/google-play.png"
import appGalleryy from "../../../assets/images/header/app-gallery.png"
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { IoNotificationsOutline, IoHelpCircleOutline  } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { useState } from 'react'

const HeaderTop = () => {
    const [active, setActive] = useState(false)
    const [animation, setAnimation] = useState(false)
    const hidePopover = () => {
        setAnimation(true)
        setTimeout(()=> {
            setAnimation(false)
            setActive(false)
        }, 200)
    }
    return (
        <>
        <div className="ht-wrapper container-wrapper">
            <div className="ht-inner">
                <div className="inner-left">
                    <a className='text text-hover' href='https://shopee.vn/' target='_blank'>Seller Centre</a>
                    <div className='relative mg-l'>
                        <a className="text text-hover show-qr-code" href='https://shopee.vn/web' target='_blank'>Download</a>
                        <div className='drawer-content'>
                            <div className="inner">
                                <img className='qr-code' src={QRCode} alt="QR-code" />
                                <div className="list-app">
                                    <div className='item'>
                                        <img src={appStore} alt="app-store" />
                                    </div>
                                    <div className='item'>
                                        <img src={googlePlay} alt="google-play" />
                                    </div>
                                    <div className='item'>
                                        <img src={appGalleryy} alt="app-gallery" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text mg-l">Follow us on</div>
                    <div className="social-icon">
                        <BsFacebook className='item' />
                        <BsInstagram className='item' />
                    </div>
                </div>
                <div className="inner-right">
                    <a href='https://shopee.vn/user/notifications/order' target='_blank' className="item text-hover show-popover" onMouseOver={()=>setActive(true)} onMouseLeave={()=>hidePopover()}>
                        <IoNotificationsOutline className='icon' />
                        <div className="text">Notifications</div>
                        {active && (
                            <div className={"popover"+(animation ? " hide-popover" : "")}>
                                <div className="inner">

                                </div>
                            </div>
                        )}
                    </a>
                    <a href='https://help.shopee.vn/portal/4' target='_blank' className="item text-hover">
                        <IoHelpCircleOutline className='icon' />
                        <div className="text">Help</div>
                    </a>
                    <div className="item text-hover">
                        <GrLanguage className='icon' />
                        <div className="text">English</div>
                    </div>
                    <div className="user">
                        <div className='text text-hover'>Sign up</div>
                        <div className='text column text-hover'>Login</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeaderTop