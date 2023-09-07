import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"
import ProjectsSection from "./projects/ProjectsSection"

const PortfolioPage = () => {
    return (
        <div>
            <PageHeaderComponent heading={{title: "Portfolio", breadcrumb: "Portfolio"}}/>
            <ProjectsSection/>
        </div>
    )
}

export default PortfolioPage