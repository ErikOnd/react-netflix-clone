import { useEffect } from "react"
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const MovieDetails = () => {

    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)



    const params = useParams()


    const getMovie = async () => {

        try {
            const res = await fetch('http://www.omdbapi.com/?apikey=fb8521a1&i=' + params.movieId)
            const data = await res.json()
            if (res.ok) {
                console.log(data)
                setMovie(data)
                setIsLoading(false)
                setError(false)
            }

        } catch (error) {
            setIsLoading(false)
            setError(true)
            console.log(error)

        }
    }

    useEffect(() => {
        getMovie()
    }, [])


    return (
        <Container>
            {movie !== null && movie.Response !== 'False' ?
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
                                    {console.log(movie)}
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
                            <Link to="/tv-shows">
                                <Card.Link href="#">Back to TV Shows</Card.Link>
                            </Link>

                        </Card.Body>
                    </Card>
                </Row> : <Alert variant="danger">
                    An Error Occurred
                </Alert>}
        </Container>
    )
}

export default MovieDetails