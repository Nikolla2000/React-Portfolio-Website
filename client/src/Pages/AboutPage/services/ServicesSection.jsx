import { Col, Container, Row } from "react-bootstrap";
import ServiceComponent from "../../../Components/About/Tabs/services/ServiceComponent";
import servicesData from "../../../Components/About/Tabs/services/servicesData";
import "./ServicesSection.scss"

const ServicesSection = () => {
    return (
        <section className="services-about-page services">
            <h2 className="about-header">Services</h2>
            <Container>
                <Row>
                {servicesData.map((service) => (
                    <Col>
                        <ServiceComponent
                            light={true}
                            data={service} 
                            key={service.img}/>
                    </Col>
                ))}
                </Row>
            </Container>
        </section>
    );
};

export default ServicesSection;