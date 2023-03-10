import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const MovieCarousel = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiUrl = process.env.REACT_APP_BE_URL;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(`${apiUrl}/medias`);
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        setMovies(data);
        setIsLoading(false);
        setError(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log(error);
    }
  };

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

      {error && <Alert variant="danger">An Error Occurred</Alert>}

      <Carousel
        className="px-2 pb-4 d-flex justify-content-between"
        interval={null}
      >
        <Carousel.Item className="carousel-items">
          {error === false &&
            movies.map((movie) => {
              return (
                <div className="movie-card">
                  <img
                    key={movie.imdbID}
                    className="carousel-img"
                    src={movie.poster}
                    alt="First slide"
                  />
                  <Link to={"/movie-details/" + movie.imdbID}>
                    <Button variant="primary" className="details-btn">
                      Details
                    </Button>
                  </Link>
                </div>
              );
            })}
        </Carousel.Item>
        <Carousel.Item className="carousel-items">
          {error === false &&
            movies.map((movie) => {
              return (
                <div className="movie-card">
                  <img
                    key={movie.imdbID}
                    className="carousel-img"
                    src={movie.poster}
                    alt="First slide"
                  />
                  <Link to={"/movie-details/" + movie.imdbID}>
                    <Button variant="primary" className="details-btn">
                      Details
                    </Button>
                  </Link>
                </div>
              );
            })}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MovieCarousel;
