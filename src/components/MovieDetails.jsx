import { useEffect } from "react"
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";

const MovieDetails = () => {

    const [movie, setMovie] = useState(null)
    const params = useParams()


    const getMovie = async () => {
        console.log(params.elementId)
        try {
            const res = await fetch('http://www.omdbapi.com/?apikey=fb8521a1&i=' + params.elementId)
            const data = await res.json()
            if (res.ok) {
                console.log(data)
                setMovie(data)
            }

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        getMovie()
    }, [])


    return (
        <Container>
            {movie !== null &&
                <Row className="justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Source</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movie.Ratings.map((rating) => {
                                        return (

                                            <tr>
                                                <td>{rating.Source}</td>
                                                <td>{rating.Value}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>

                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Back to TV Shows</Card.Link>
                        </Card.Body>
                    </Card>
                </Row>}
        </Container>
    )
}

export default MovieDetails