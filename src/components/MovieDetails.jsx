import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState(null);
  const apiUrl = process.env.REACT_APP_BE_URL;
  const navigate = useNavigate();

  const [mediaInfo, setMediaInfo] = useState();

  const params = useParams();
  console.log(movie);

  const deleteMovie = async () => {
    const response = await fetch(`${apiUrl}/medias/${params.movieId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete data: ${response.statusText}`);
    } else {
      navigate("/tv-shows");
    }

    const data = await response.json();
    return data;
  };

  const editMovie = async () => {
    try {
      const response = await fetch(`${apiUrl}/medias/${params.movieId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mediaInfo),
      });
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };

  const getMovie = async () => {
    try {
      const res = await fetch(`${apiUrl}/medias/${params.movieId}`);
      const data = await res.json();
      if (data.Response !== "False") {
        setMovie(data);
        setIsLoading(false);
        setError(false);
        setMovieInfo();
      } else {
        setIsLoading(false);
        setError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("Error:" + error);
    }
  };

  const setMovieInfo = () => {
    setMediaInfo({
      title: movie.title,
      year: movie.year,
      type: movie.type,
      poster: movie.poster,
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      )}

      {error && <Alert variant="danger">An Error Occurred</Alert>}
      {movie !== null && movie.Response !== "False" && (
        <Row className="justify-content-center">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
              </Card.Body>

              <Card.Body>
                <Link to="/tv-shows">
                  <Card.Link href="#">Back to TV Shows</Card.Link>
                </Link>
              </Card.Body>
              <a href={`${apiUrl}/medias/${params.movieId}/pdf`}>Print PDF</a>
            </Card>
          </Col>
          <Col className="text-left">
            <Button variant="danger" onClick={deleteMovie}>
              Delete
            </Button>
            <Button variant="info" onClick={editMovie}>
              Edit
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetails;
