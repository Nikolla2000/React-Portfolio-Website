import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"
import FormSection from "./FormSection"
import "./ContactPageStyles.scss";
import Footer from "../../Components/Footer/Footer";
import StreetMap from "../../Components/StreetMap/StreetMap";


const ContactPage = () => {
    return (
        <div className="contact-page-wrapper">
            <PageHeaderComponent heading={{title: "Contact me", breadcrumb: "Contact"}}/>
            <FormSection/>
            <StreetMap/>
            <Footer/>
        </div>
    )
}

export default ContactPage