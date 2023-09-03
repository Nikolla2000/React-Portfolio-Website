import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./PageHeaderStyles.scss"
import { Link } from "react-router-dom";
import shapesData from "./shapesData";

const PageHeaderComponent = ({ heading }) => {
    return (
        <section className="page-header">
            <h1>{heading.title}</h1>
            <Breadcrumb>
            <Breadcrumb.Item href="#"><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                {heading.breadcrumb}
            </Breadcrumb.Item>
            </Breadcrumb>
            {shapesData.map((shape, index) => (
                <div className={`shape shape${index + 1}`} key={index + 1}>
                    <img src={shape.imgSrc}  alt="shape"/>
                </div>
            ))}
        </section>
    );
};

export default PageHeaderComponent;