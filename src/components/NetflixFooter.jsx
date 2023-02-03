import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Container } from "react-bootstrap"

const NetflixFooter = () => {
    return (
        <Container className="pt-5 px-5 color-gray">
            <Row className="pt-5">
                <Col className="d-flex justify-content-start">
                    <i className="bi bi-facebook bottom-icon"></i>
                    <i className="bi bi-instagram bottom-icon ml-4"></i>
                    <i className="bi bi-twitter bottom-icon ml-4"></i>
                    <i className="bi bi-youtube bottom-icon ml-4"></i>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-left bottom-text d-none d-md-block">Audio and Subtitles</Col>
                <Col className="text-left bottom-text d-none d-md-block">Audio Description</Col>
                <Col className="text-left bottom-text d-none d-md-block">Helo Center</Col>
                <Col className="text-left bottom-text d-none d-md-block">Gift cards</Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-left bottom-text d-none d-md-block">Media Center</Col>
                <Col className="text-left bottom-text d-none d-md-block">Investor Relations</Col>
                <Col className="text-left bottom-text d-none d-md-block">Jobs</Col>
                <Col className="text-left bottom-text d-none d-md-block">Terms of Use</Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-left bottom-text d-none d-md-block">Privacy</Col>
                <Col className="text-left bottom-text d-none d-md-block">Legal Notices</Col>
                <Col className="text-left bottom-text d-none d-md-block">Cookie Preferences</Col>
                <Col className="text-left bottom-text d-none d-md-block">Corporate information</Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-left bottom-text d-none d-md-block">Contact Us</Col>
                <Col className="text-left bottom-text d-none d-md-block"></Col>
                <Col className="text-left bottom-text d-none d-md-block"></Col>
                <Col className="text-left bottom-text d-none d-md-block"></Col>
            </Row>
            <Row className="mt-4">
                <Col className="text-left bottom-text"><span className="service-button">Service Code</span></Col>
            </Row>
            <Row className="mt-4 pb-4">
                <Col className="text-left bottom-text">© 1997-2023 Netflix, inc f08004ed - 2481900d6</Col>
            </Row>


        </Container >
    )

}

export default NetflixFooter