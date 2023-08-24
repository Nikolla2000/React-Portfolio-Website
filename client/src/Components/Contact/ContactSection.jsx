import { Button } from "react-bootstrap"
import FormBuilder from "./FormBuilder"
import inputConfigurations from "./formConfigurations"
import { useState, useEffect } from "react"
import "./ContactFormStyles.scss"
// import { tick } from "../Header/Header"

const ContactSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const wordToDisplay = ["Hi My Name is..."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1500;
  const [focusedInput, setFocusInput] = useState("")

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

    return (
      <section className="contact-section-wrapper">
        <div className="form-and-img-wrapper">
          <div className="form-img">
            <img src="../../src/assets/images/default-contact-img.svg"/>
          </div>
          <div className="form-wrapper">
            <h1 className="contact-heading">Lets Talk</h1>
            <FormBuilder configurations={inputConfigurations}/>
            <Button 
              type="submit"
              form="contact-form"
              variant="danger"
              className="form-submit-button"
              >Send Message
            </Button>
          </div>
        </div>
      </section>
    )
}

export default ContactSection