import "./Header.scss"
import "animate.css"
import { useEffect, useState } from "react"
import TrackVisibility from "react-on-screen"

const Header = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const wordToDisplay = ["A Web Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        let i = loopNum % wordToDisplay.length;
        let fullText = wordToDisplay[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="header-section" >
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={`header-wrapper ${isVisible && "animate__animated animate__fadeInDown"}`}>
                <div className="heading">
                    <h1>I'm <span>Nikola</span> Uzunov</h1>
                    <span className="sub-title">{text}</span>
                </div>
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