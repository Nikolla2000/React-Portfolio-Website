import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./PageHeaderStyles.scss"
import { Link } from "react-router-dom";

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
            <div className="shape"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <div className="shape4"></div>
            <div className="shape5"></div>
        </section>
    );
};

export default PageHeaderComponent;