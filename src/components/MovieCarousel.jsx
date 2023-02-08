import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
const MovieCarousel = (props) => {


    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMovies = async () => {
        try {
            let respons = await fetch(`http://www.omdbapi.com/?apikey=fb8521a1&s=${props.query}`)
            let data = await respons.json()

            if (respons.ok) {
                console.log(data.Search)
                setMovies(data.Search)
                setIsLoading(false)
                setError(false)
            }
        } catch (error) {
            setIsLoading(false)
            setError(true)
            console.log(error)
        }
    }

    return (
        <>
            <Row>
                <h4 className="color-white pl-4 mt-3">{props.carouselName}</h4>
            </Row>

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

            <Carousel className="px-2 pb-4 d-flex justify-content-between" interval={null}>
                <Carousel.Item className="carousel-items">
                    {error === false && movies.map((movie) => {
                        return (
                            <div className="movie-card">
                                <img key={movie.imdbID}
                                    className="carousel-img"
                                    src={movie.Poster}
                                    alt="First slide"
                                />
                                <Link to={"/movie-details/" + movie.imdbID}>
                                    <Button variant="primary" className="details-btn">Details</Button>
                                </Link>
                            </div>
                        )
                    })}
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    {error === false && movies.map((movie) => {
                        return (

                            <div className="movie-card">
                                <img key={movie.imdbID}
                                    className="carousel-img"
                                    src={movie.Poster}
                                    alt="First slide"
                                />
                                <Link to="/movie-details">
                                    <Button variant="primary" className="details-btn">Details</Button>
                                </Link>
                            </div>
                        )
                    })}
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MovieCarousel