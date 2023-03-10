import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./components/NetflixNavbar";
import { Container } from "react-bootstrap";
import NetflixHeader from "./components/NetflixHeader";
import NetflixFooter from "./components/NetflixFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import Backoffice from "./components/Backoffice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NetflixNavbar></NetflixNavbar>
        <Container fluid className="main-container">
          <NetflixHeader></NetflixHeader>
          <Routes>
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="/movie-details/:movieId" element={<MovieDetails />} />
            <Route path="/backoffice" element={<Backoffice />} />
          </Routes>
          <NetflixFooter></NetflixFooter>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
