import Carousel from 'react-bootstrap/Carousel';
import portfolioData from './portfolioData';

const PortfolioSection = () => {
    return (
        <section className="portfolio-section">
            <Carousel>
                {portfolioData.map((project, index) => (
                    <Carousel.Item key={index}>
                        {project.video ? (
                            <video src={project.imgPath} title={project.title} autoPlay loop muted>
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={project.imgPath} alt={project.title} />
                        )}
                        <Carousel.Caption>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-descr">{project.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default PortfolioSection;