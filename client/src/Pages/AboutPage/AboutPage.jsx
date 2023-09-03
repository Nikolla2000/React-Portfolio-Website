import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageHeaderComponent heading={{title: 'About Me', breadcrumb: 'About'}}/>
        </div>
    )
}

export default AboutPage