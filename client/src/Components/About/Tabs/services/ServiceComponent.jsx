import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const ServiceComponent = ( {data, light} ) => {
    return (
        <Container className="service-wrapper">
            <Row>
                <Col>
                    <img src={light ? data.imgLight : data.img}/>
                </Col>
                <Col>
                    <h3>{data.serviceName}</h3>
                    <p>{data.description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceComponent;