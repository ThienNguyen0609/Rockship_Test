import './Footer.scss'
import FooterBot from './FooterBot/FooterBot'
import FooterMid from './FooterMid/FooterMid'
import FooterTop from './FooterTop/FooterTop'

const Footer = () => {
    return (
        <>
        <div className="footer-wrapper container-wrapper">
            <div className="footer-inner">
                <FooterTop />
                <FooterMid />
                <FooterBot />
            </div>
        </div>
        </>
    )
}

export default Footer