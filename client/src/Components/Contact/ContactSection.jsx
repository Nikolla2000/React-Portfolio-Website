import { Button } from "react-bootstrap"
import FormBuilder from "./FormBuilder"
import inputConfigurations from "./formConfigurations"

const ContactSection = () => {
    return (
      <section className="contact-section-wrapper">
        <FormBuilder configurations={inputConfigurations}/>
        <Button 
          type="submit"
          form="contact-form"
          >Submit</Button>
      </section>
    )
}

export default ContactSection