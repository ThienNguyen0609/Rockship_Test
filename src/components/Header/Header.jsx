import './Header.scss'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderBot from './HeaderBot/HeaderBot'

const Header = () => {
    return (
        <>
        <div className="header-wrapper container-wrapper">
            <div className="header-inner">
                <HeaderTop />
                <HeaderBot />
            </div>
        </div>
        </>
    )
}

export default Header