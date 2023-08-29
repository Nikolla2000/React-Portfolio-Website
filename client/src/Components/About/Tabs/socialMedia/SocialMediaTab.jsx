import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import socialMediaData from "./socialMediaData";
import Col from "react-bootstrap/esm/Col";
import SocialMediaComponent from "./SocialMediaComponent";

const SocialMediaTab = () => {
    return (
        <Container className="social-media-tab">
            <Row>
                {socialMediaData.map((socialMedia, index) => {
                    return (
                        <Col md={6}>
                            <SocialMediaComponent
                                data={socialMedia}
                                key={index + 1}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default SocialMediaTab;