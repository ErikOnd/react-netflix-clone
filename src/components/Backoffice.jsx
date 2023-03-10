import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Backoffice = () => {
  const [mediaInfo, setMediaInfo] = useState({
    title: "",
    year: "",
    type: "",
    poster: "",
  });

  console.log(mediaInfo);

  const [poster, setPoster] = useState();
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BE_URL;

  const postMedia = async () => {
    try {
      const response = await fetch(`${apiUrl}/medias`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mediaInfo),
      });
      const media = await response.json();
      if (response.ok) {
        console.log("postMedia res", response);
        postPoster(media.id);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };

  const postPoster = async (mediaID) => {
    try {
      const data = new FormData();
      data.append("poster", poster);
      const res = await fetch(`${apiUrl}/medias/${mediaID}/poster`, {
        method: "PUT",
        body: data,
      });

      if (res.ok) {
        navigate("/tv-shows");
        console.log("postPoster res", res);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };

  return (
    <Container className="new-movie-container">
      <Form className="mt-5">
        <Form.Group controlId="media-form" className="mt-3">
          <h1>Add Movie</h1>
          <Form.Control
            size="lg"
            placeholder="Title"
            onChange={(event) =>
              setMediaInfo({ ...mediaInfo, title: event.target.value })
            }
            value={mediaInfo.title}
          />
        </Form.Group>
        <Form.Group controlId="media-category" className="mt-3">
          <Form.Control
            size="lg"
            as="select"
            onChange={(event) =>
              setMediaInfo({ ...mediaInfo, type: event.target.value })
            }
            value={mediaInfo.category}
          >
            <option value="" disabled selected>
              Select a category
            </option>
            <option>Comedy</option>
            <option>Horror</option>
            <option>Fantasy</option>
            <option>Thriller</option>
            <option>Action</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="media-content" className="mt-3">
          <Form.Control
            size="lg"
            placeholder="Year"
            onChange={(event) =>
              setMediaInfo({ ...mediaInfo, year: event.target.value })
            }
            value={mediaInfo.content}
          />
        </Form.Group>
        <Form.Control
          type="file"
          onChange={(event) => setPoster(event.target.files[0])}
        />
        <p>Upload an Image</p>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
            onClick={(event) => {
              event.preventDefault();
              postMedia();
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Backoffice;
