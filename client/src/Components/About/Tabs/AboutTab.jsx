import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const AboutTab = () => {
    return (
        <div className="tab-wrapper">
            <Container>
                <Row className='justify-content-md-center align-items-center'>
                    <Col>
                        <div className="about-img-wrapper">
                            <img src="../../../../src/assets/images/myImage-no-background.png" alt="Image-of-myself" />
                        </div>
                    </Col>
                    <Col>
                    <h1>I create products not just arts</h1>
                    <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <Button>
                        Lets Talk
                    </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutTab
