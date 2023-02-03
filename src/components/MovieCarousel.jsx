import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
class MovieCarousel extends Component {


    state = {
        movies: [],
        isLoading: true,
        error: false,
    };

    fetchMovies = async () => {
        try {
            let respons = await fetch(`http://www.omdbapi.com/?apikey=fb8521a1&s=${this.props.query}`)
            let data = await respons.json()

            if (respons.ok) {
                this.setState({
                    movies: data.Search,
                    isLoading: false,
                })

                console.log(this.state.movies[0])
            }

        } catch (error) {
            this.setState({
                isLoading: false,
                error: true
            })
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchMovies()
    }

    render() {
        return (
            <>
                <Row>

                    <h4 className="color-white pl-4 mt-3">{this.props.carouselName}</h4>

                </Row>

                {this.state.isLoading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner>
                )}


                {this.state.error && (
                    <Alert variant="danger">
                        An Error Occurred
                    </Alert>
                )}

                <Carousel className="px-2 pb-4">
                    <Carousel.Item className="d-flex carousel-items">
                        {this.state.movies.map((movie) => {
                            return (

                                <img
                                    className="d-block w-100"
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
}

export default MovieCarousel