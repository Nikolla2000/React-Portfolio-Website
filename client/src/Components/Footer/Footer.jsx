import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./FooterStyles.scss"

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
                    <FontAwesomeIcon icon={faFacebookF}/>
                    <FontAwesomeIcon icon={faGithub}/>
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </div>
                <span>©2023. All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;