import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const CertificatesTab = () => {
    return (
        <Container className="certificates-tab">
            <Row className="justify-content-evenly">
                <Col lg={6}>
                    <a href="https://online.advanceacademy.bg/certificates?id=2859&file=41d529a5254b06d8c819afbbbfeaaf37"
                        target="_blank">
                        <img src="../../../src/assets/images/certificate1.png" alt="certificate-image"/>
                    </a>
                </Col>
                <Col lg={6}>
                    <a href="https://www.freecodecamp.org/certification/NikollaUzu/responsive-web-design"
                        target="_blank">
                        <img src="../../../src/assets/images/certificate2.png" alt="certificate-image"/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default CertificatesTab;