import "./Header.scss"
import "animate.css"
import TrackVisibility from "react-on-screen"

const Header = () => {
    return (
        <section className="header-section" >
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={`header-wrapper ${isVisible && "animate__animated animate__fadeInDown"}`}>
                <h1>I'm <span>Nikola</span> Uzunov</h1>
                <div className="img-wrapper">
                    <img src="../../src/assets/images/copy.jpg" alt="Image of myself"/>
                </div>
            </div>
            }
            </TrackVisibility>
        </section>
    )
}

export default Header