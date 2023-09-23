import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import socialMediaData from "./socialMediaData";
import SocialMediaComponent from "./SocialMediaComponent";

const SocialMediaTab = () => {
    return (
        <Container className="social-media-tab">
            <Row>
                {socialMediaData.map((socialMedia, index) => {
                    return (
                        <Col 
                            lg={6} 
                            md={6} 
                            className="mt-4 mb-5" 
                            key={index + 1}>
                            <SocialMediaComponent data={socialMedia}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default SocialMediaTab;