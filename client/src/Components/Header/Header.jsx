import "./HeaderStyles.scss"
import { useEffect, useState } from "react"
import "animate.css"
import iconsData from "../Footer/iconsData"
import IconComponent from "../Icon/IconComponent"

const Header = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const wordToDisplay = ["A Web Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const [fadeInLeftVisible, setFadeInLeftVisible] = useState(false);

    useEffect(() => {
        const fadeInLeftTimer = setTimeout(() => {
        setFadeInLeftVisible(true);
        }, 1000); 

        return () => {
        clearTimeout(fadeInLeftTimer);

        };
    }, []);

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

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text]);
     
    return (
        <section className="header-section">
            <div className="header-wrapper">
                <div className="heading animate__animated animate__fadeInLeft">
                    <h1>Hi I'm <span>Nikola</span> Uzunov</h1>
                    <span className="sub-title">{text}</span>
                    <div className={`icons-wrapper ${fadeInLeftVisible && 'animate__animated animate__fadeInLeft'}`}>
                        {fadeInLeftVisible && iconsData.map((icon) => (
                            <IconComponent data={icon} key={icon.link}/>
                        ))}
                    </div>
                </div>
                <div className="img-wrapper animate__animated animate__fadeInRight">
                    <img src="../../src/assets/images/copy.jpg" alt="Image of myself" className="animate__animated animate__fadeInRight"/>
                </div>
            </div>
        </section>
    )
}

export default Header
