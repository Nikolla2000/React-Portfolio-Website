import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./FooterStyles.scss"
import iconsData from './iconsData';
import IconComponent from '../Icon/IconComponent';

const Footer = () => {

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer>
            <div className="up-arrow-container" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} />
            </div>
            <div className="icons-rights-container">
                <div className="icons-container">
                    {iconsData.map((icon) => (
                        <IconComponent data={icon} key={icon.link}/>
                    ))}
                </div>
                <span>©2023. All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;