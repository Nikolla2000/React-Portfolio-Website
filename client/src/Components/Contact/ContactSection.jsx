import { Button } from "react-bootstrap"
import FormBuilder from "./FormBuilder"
import inputConfigurations from "./formConfigurations"
import "./ContactFormStyles.scss"

const ContactSection = () => {
    return (
      <section className="contact-section-wrapper">
        <h1 className="contact-heading">Lets Talk</h1>
        <FormBuilder configurations={inputConfigurations}/>
        <Button 
          type="submit"
          form="contact-form"
          variant="danger"
          className="form-submit-button"
          >Send Message
          </Button>
      </section>
    )
}

export default ContactSection