import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./FooterStyles.scss"

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="justify-content-end">
                    <Col>©2023 All rights reserved</Col>
                    <Col> Item 2</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;