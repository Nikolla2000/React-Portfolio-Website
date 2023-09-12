import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"
import FormSection from "./FormSection"
import "./ContactPageStyles.scss";


const ContactPage = () => {
    return (
        <div className="contact-page-wrapper">
            <PageHeaderComponent heading={{title: "Contact me", breadcrumb: "Contact"}}/>
            <FormSection/>
        </div>
    )
}

export default ContactPage