import Carousel from 'react-bootstrap/Carousel';
import portfolioData from './portfolioData';
import "./PortfolioStyles.scss"

const PortfolioSection = () => {

    return (
        <section className="portfolio-section">
            <h1 className='portfolio-section-heading'>My Work</h1>
            <Carousel>
                {portfolioData.map((project, index) => (
                    <Carousel.Item key={index}>
                        <div className="project-wrapper">
                        <a href={project.link} target="_blank">
                        {project.video ? (
                            <video src={project.imgPath} title={project.title} autoPlay loop muted>
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={project.imgPath} alt={project.title} />
                        )}
                        </a>
                        <Carousel.Caption>
                            <h3 className={`project-title ${index === 0 && "red-captions"}`}>{project.title}</h3>
                            <p className={`project-descr ${index === 0 && "red-captions"}`}>{project.description}</p>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default PortfolioSection;