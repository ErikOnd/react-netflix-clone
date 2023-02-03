import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NetflixNavbar from './components/NetflixNavbar';
import { Container } from 'react-bootstrap';
import NetflixHeader from './components/NetflixHeader';
import MovieCarousel from './components/MovieCarousel';

function App() {
  return (
    <div className="App">

      <NetflixNavbar></NetflixNavbar>
      <Container fluid className='main-container'>
        <NetflixHeader></NetflixHeader>
        <MovieCarousel carouselName="Harry Potter" query='harry%20potter'></MovieCarousel>
      </Container>
    </div>
  );
}

export default App;
