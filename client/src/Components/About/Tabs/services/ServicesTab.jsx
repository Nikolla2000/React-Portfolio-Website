import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import servicesData from "./servicesData";
import ServiceComponent from "./ServiceComponent";

const ServicesTab = () => {
    return (
        <div className="tab-wrapper services">
            <Container>
                <Row>
                    {servicesData.map((service, index) => (
                        <Col md={6} lg={6} key={index + 1}>
                            <ServiceComponent
                                data={service}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ServicesTab;