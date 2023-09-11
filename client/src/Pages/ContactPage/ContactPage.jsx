import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"


const ContactPage = () => {
    return (
        <div className="contact-page-wrapper">
            <PageHeaderComponent heading={{title: "Contact me", breadcrumb: "Contact"}}/>
        </div>
    )
}

export default ContactPage