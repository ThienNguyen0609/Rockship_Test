import './FooterBot.scss'

import image1 from '../../../assets/images/footer/image1.png'

const FooterBot = () => {
    return (
        <>
        <div className="fb-wrapper">
            <div className="fb-inner">
                <div className="top">
                    <div className="item bd-right">Privacy Policy</div>
                    <div className="item bd-right">Term Of Service</div>
                    <div className="item bd-right">Shipping Policy</div>
                    <div className="item">Violation</div>
                </div>
                <div className="mid">
                    <div className="mid-logo">
                        <a className="item">
                            <div className='logo position'></div>
                        </a>
                        <a className="item">
                            <div className='logo position'></div>
                        </a>
                        <a className="item">
                            <div className='logo position-fake-logo'></div>
                        </a>
                    </div>
                    <div className="text">Shopee Company Limited</div>
                </div>
                <div className="bot">
                    <div className='text'>Floors 4-5-6, Capital Place Building, No. 29, Lieu Giai Street, Ngoc Khanh ward, Ba Dinh District, Hanoi, Vietnam</div>
                    <div className='text'>Person in charge of information management: Nguyen Duc Tri</div>
                    <div className='text'>Business Registration Certificate No: 0106773786</div>
                    <div className='text'>© 2015 - Copyright belongs to Shopee Company Limited</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterBot