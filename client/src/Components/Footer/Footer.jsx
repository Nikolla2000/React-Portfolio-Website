import { useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconsData from './iconsData';
import IconComponent from '../Icon/IconComponent';
import TrackVisibility from 'react-on-screen';
import "./FooterStyles.scss";
import 'animate.css';

const Footer = () => {
    const [arrowHovered, setArrowHovered] = useState(false)

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer>
            <div 
                className={'up-arrow-container'}
                onClick={scrollToTop} 
                onMouseEnter={() => setArrowHovered(true)}
                onMouseLeave={() => setArrowHovered(false)}>
            <TrackVisibility>
                {({ isVisible }) =>
                <FontAwesomeIcon 
                    icon={faArrowUp} 
                    style={{color: "#ffffff"}} 
                    className={`fa-thin ${arrowHovered && 'bounce'} ${isVisible && 'animate__animated animate__bounce'}`}
                    />
                }
            </TrackVisibility>
            </div>
            <div className="icons-rights-container">
                <div className="icons-container">
                    {iconsData.map((icon) => (
                        <IconComponent data={icon} key={icon.link} hover='animate__animated animate__rotateIn'/>
                    ))}
                </div>
                <span>©{new Date().getFullYear()}. All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;