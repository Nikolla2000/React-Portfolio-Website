import { Container, Row, Col } from "react-bootstrap";
import inputConfigurations from "../../Components/Contact/formConfigurations";
import FormBuilder from "../../Components/Contact/FormBuilder";
import InfoItemComponent from "./InfoItemComponent";


const ContactSection = () => {
    return (
        <section className="contact-section-contactPage">
            <Container>
                <Col lg={23}>
                    <h2>Lets Talk</h2> 
                </Col>
                <Row>
                    <Col lg={6} md={12}>
                        <div className="contact-form">
                            <h2>Get In Touch</h2>
                            <FormBuilder configurations={inputConfigurations}/>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="contact-info">
                            <InfoItemComponent infoName={"Office Address"} infoDetail={"Varna, Bulgaria"}/>
                            <InfoItemComponent infoName={"Office Address"} infoDetail={"Varna, Bulgaria"}/>
                            <InfoItemComponent infoName={"Office Address"} infoDetail={"Varna, Bulgaria"}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;