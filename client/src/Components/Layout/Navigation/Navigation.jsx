import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import routes from "../../../utils/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavigationStyles.scss"

const Navigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const location = useLocation()
    const alternativeNavStyles = location.pathname !== '/' ? 'white-nav' : ''
    const navLinkClassName = showMobileMenu && location.pathname !== '/' ? 'white-links' : alternativeNavStyles ? "white-a" : "";
    const blackBars = showMobileMenu && location.pathname !== '/' ? 'black-bars' : ''

    const handleLogoClick = () => {
        if(location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <nav className={alternativeNavStyles}>
            <div className='nav-wrapper'>
                <Link to="/" onClick={handleLogoClick}>
                    <img src='/images/logo.svg'/>
                </Link>
                <div className={showMobileMenu ? "show-mobile-menu" : "nav-menu"}>
                    {Object.values(routes)
                    .filter((element) => element.includeInNav === true)
                    .map((element, index) => (
                        <NavLink
                            key={index + 1}
                            to={element.path}
                            className={navLinkClassName}
                        >
                            {element.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className={`mobile-menu-wrapper ${blackBars}`}>
                <FontAwesomeIcon
                    className='mobile-menu-btn'
                    icon={faBars}
                    onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}
                 />
            </div>
        </nav>
    )
}

export default Navigation