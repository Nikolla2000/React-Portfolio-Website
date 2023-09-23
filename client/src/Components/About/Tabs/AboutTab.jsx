import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import "animate.css"
import { useNavigate } from 'react-router-dom';

const AboutTab = () => {
    const [showGlowingLight, setShowGlowingLight] = useState(true)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setShowGlowingLight(window.innerWidth > 1000); 
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleButtonClick = () => {
        setIsButtonClicked(true)
        setTimeout(() => {
            navigate('/contact')
        }, 1000)
    }

    
    return (
        <div className={`about-tab-wrapper ${showGlowingLight && 'glowing-light'}`}>
            <Container>
                <Row className='justify-content-md-center align-items-center'>
                    <Col>
                        <div className="about-img-wrapper animate__animated animate__zoomIn">
                            <img src="../../../../src/assets/images/myImage4.png" alt="Image-of-myself" />
                        </div>
                    </Col>
                    <Col>
                    <h1 className='about-heading'>I create products not just art</h1>
                    <p>My name is Nikola Uzunov and I'm 23 years-old based in Varna, Bulgaria.I'm taking my first steps
                        as a web developer. My primary focus is into frontend development. My appetite for growth and improvement drives me to explore this field further. 
                        Let's connect and create amazing digital experiences together!
                    </p>
                    <Button className={`lets-talk-btn ${isButtonClicked && 'animate__animated animate__rotateIn'}`}
                    onClick={handleButtonClick}>
                        Lets Talk
                    </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutTab
