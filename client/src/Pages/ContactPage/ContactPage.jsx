import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"
import ContactSection from "./ContactSection"


const ContactPage = () => {
    return (
        <div className="contact-page-wrapper">
            <PageHeaderComponent heading={{title: "Contact me", breadcrumb: "Contact"}}/>
            <ContactSection/>
        </div>
    )
}

export default ContactPage