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
    const navLinkClassName = alternativeNavStyles ? "white-a" : "";

    return (
        <nav className={alternativeNavStyles}>
            <div className='nav-wrapper'>
                <Link to="/">
                    <img src='../../../src/assets/images/logo.svg'/>
                </Link>
                <div className={showMobileMenu ? "show-mobile-menu" : "nav-menu"}>
                    {Object.values(routes)
                    .filter((element) => element.includeInNav === true)
                    .map((element, index) => (
                        <NavLink
                            key={index + 1}
                            to={element.path}
                            className={navLinkClassName}
                            activeClassName="active"
                        >
                            {element.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="mobile-menu-wrapper">
                <FontAwesomeIcon
                    className="mobile-menu-btn"
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