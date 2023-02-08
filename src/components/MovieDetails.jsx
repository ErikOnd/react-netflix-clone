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
import { Spinner } from "react-bootstrap";
import { Col } from "react-bootstrap";

const MovieDetails = () => {

    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [comments, setComments] = useState(null)



    const params = useParams()


    const getMovie = async () => {

        try {
            const res = await fetch('http://www.omdbapi.com/?apikey=fb8521a1&i=' + params.movieId)
            const data = await res.json()
            if (data.Response !== "False") {
                setMovie(data)
                setIsLoading(false)
                setError(false)
            }
            else {
                console.log(data)
                setIsLoading(false)
                setError(true)
            }

        } catch (error) {

            setIsLoading(false)
            setError(true)
            console.log('Error:' + error)

        }
    }

    const getComments = async () => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + params.movieId, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g',
                },
            })
            const data = await res.json()
            if (res.ok) {
                console.log(data)
                setComments(data)
                setIsLoading(false)
                setError(false)
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setError(true)
        }
    }





    useEffect(() => {
        getMovie()
        getComments()
    }, [])


    return (
        <Container>

            {isLoading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>
            )}

            {error && (
                <Alert variant="danger">
                    An Error Occurred
                </Alert>
            )}
            {(movie !== null && movie.Response !== 'False') &&
                <Row className="justify-content-center">
                    <Col>
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
                    </Col>
                    <Col>

                        {(comments !== null && comments.Response !== 'False') && comments.map((comment) => {
                            return <div className=" mb-5 comment-box">
                                <p>Comment: {comment.comment}</p>
                                <p>Rating: {comment.rate}</p>
                            </div>
                        })}
                    </Col>
                </Row>}
        </Container>
    )
}

export default MovieDetails