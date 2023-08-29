import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const ServiceComponent = ( {data} ) => {
    return (
        <Container className="service-wrapper">
            <Row>
                <Col>
                <img src={data.img}/>
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