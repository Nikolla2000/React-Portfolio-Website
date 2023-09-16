import { Button } from "react-bootstrap"
import FormBuilder from "./FormBuilder"
import inputConfigurations from "./formConfigurations"
import { useState, useEffect } from "react"
import "animate.css"
import TrackVisibility from "react-on-screen"
import "./ContactFormStyles.scss"

const ContactSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const wordToDisplay = ["Hi, My Name is ..."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  const [focusedInput, setFocusedInput] = useState("")
  const [formImgAnimation, setFormImgAnimation] = useState("")
  const[errorMsg, setErrorMsg] = useState('')
  
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
  }, [text])

  const formImage = focusedInput === 'email' ?
  "../../src/assets/images/email.png"
  : focusedInput === 'subject' ?
  "../../src/assets/images/subject.png"
  : focusedInput === 'message' ?
  "../../src/assets/images/message.png"
  : "../../src/assets/images/default-contact-img.svg";

  useEffect(()=> {
    if(focusedInput === 'email'){
      setFormImgAnimation('backInLeft')
    } else if (focusedInput === 'number'){
      setFormImgAnimation('tada')
    } else if (focusedInput === 'subject' ) {
      setFormImgAnimation('headShake')
    } else {setFormImgAnimation('heartBeat')}
  }, [focusedInput])
  

    return (
      <section className="contact-section-wrapper">
        <div className="form-and-img-wrapper">
            <TrackVisibility>
            {({ isVisible }) =>
          <div className="form-img">
            {window.innerWidth <= 900 && <h1 className="small-heading">Lets Talk</h1>}
              {focusedInput === "firstName" || focusedInput === "lastName" ? 
              <p className={`name-animation ${isVisible && "animate__animated animate__backInLeft"}`}>{text}</p> 
              : <img 
                  src={formImage}
                  className={focusedInput && isVisible && `animate__animated animate__${formImgAnimation}`}/>}
          </div>}
            </TrackVisibility>  
          <div className="form-wrapper">
            <h1 className="contact-heading">Lets Talk</h1>
            <FormBuilder 
                configurations={inputConfigurations}
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}/>
            <Button 
              type="submit"
              form="contact-form"
              variant="light"
              className="form-submit-button"
              >Send Message
            </Button>
            <p className="error-message mt-2">{errorMsg}</p>
          </div>
        </div>
      </section>
    )
}

export default ContactSection