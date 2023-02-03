import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const NetflixHeader = () => {

    return (
        <Row className='color-white pt-4'>
            <Col>
                <Col className="pl-2 d-flex justify-content-start align-items-center"><h2>TV Shows</h2>

                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='ml-5 genres-btn'>
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Col>
            <Col>
                <Col className='d-flex justify-content-end mr-3'><div className='icon-holder  d-none d-md-block'><i className="bi bi-justify-left"></i></div><div className='mr-3 ml-2 icon-holder  d-none d-md-block'><i className="bi bi-fullscreen"></i></div></Col>
            </Col>

        </Row>

    )

}

export default NetflixHeader