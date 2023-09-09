import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"
import ProjectsSection from "./projects/ProjectsSection"
import Footer from "../../Components/Footer/Footer"


const PortfolioPage = () => {
    return (
        <div>
            <PageHeaderComponent heading={{title: "Portfolio", breadcrumb: "Portfolio"}}/>
            <ProjectsSection/>
            <Footer />
        </div>
    )
}

export default PortfolioPage