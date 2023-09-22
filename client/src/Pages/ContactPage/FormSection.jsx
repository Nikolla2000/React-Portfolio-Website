import { Container, Row, Col, Button } from "react-bootstrap";
import inputConfigurations from "../../Components/Contact/formConfigurations";
import FormBuilder from "../../Components/Contact/FormBuilder";
import InfoItemComponent from "./InfoItemComponent";


const FormSection = () => {
    return (
        <section className="form-section-contactPage">
            <Container>
                <Col lg={12}>
                    <h2 className="contact-page-heading">Lets Talk</h2> 
                </Col>
                <Row>
                    <Col lg={6} md={12}>
                        <div className="contact-form">
                            <h2 className="mb-5">Get In Touch</h2>
                            <FormBuilder configurations={inputConfigurations}/>
                            <Button type="submit" form="contact-form">Send Message</Button>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="contact-info">
                            <InfoItemComponent 
                                infoName={"Residential Address"} 
                                infoDetail={"Varna, Bulgaria"}
                                infoIcon={"../../../src/assets/images/info-icon-1.png"}/>
                            <InfoItemComponent 
                                infoName={"Official Email"} 
                                infoDetail={"nikollа.uzunov@gmail.com"}
                                infoIcon={"../../../src/assets/images/info-icon-2.png"}/>
                            <InfoItemComponent 
                                infoName={"Official Phone"} 
                                infoDetail={"+359-899-470-320"}
                                infoIcon={"../../../src/assets/images/info-icon-3.png"}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FormSection;