import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
const MovieCarousel = (props) => {


    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState('true')
    const [error, setError] = useState('false')

    useEffect(() => {
        fetchMovies()
    }, [])


    const fetchMovies = async () => {
        try {
            let respons = await fetch(`http://www.omdbapi.com/?apikey=fb8521a1&s=${props.query}`)
            let data = await respons.json()

            if (respons.ok) {
                setMovies(data.Search)
                setIsLoading('false')
                setError('false')
            }
        } catch (error) {
            setIsLoading('false')
            setError('true')
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

                            <img key={movie.imdbID}
                                className="carousel-img"
                                src={movie.Poster}
                                alt="First slide"
                            />

                        )
                    })}
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    {error === false && movies.map((movie) => {
                        return (

                            <img key={movie.imdbID}
                                className="carousel-img"
                                src={movie.Poster}
                                alt="First slide"
                            />
                        )
                    })}
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MovieCarousel