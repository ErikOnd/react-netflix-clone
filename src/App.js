import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NetflixNavbar from './components/NetflixNavbar';
import { Container } from 'react-bootstrap';
import NetflixHeader from './components/NetflixHeader';
import MovieCarousel from './components/MovieCarousel';
import NetflixFooter from './components/NetflixFooter';

function App() {
  return (
    <div className="App">

      <NetflixNavbar></NetflixNavbar>
      <Container fluid className='main-container'>
        <NetflixHeader></NetflixHeader>
        <MovieCarousel carouselName="Harry Potter" query='harry%20potter'></MovieCarousel>
        <MovieCarousel carouselName="Game of Thrones" query='lord%20of%20the%20rings'></MovieCarousel>
        <MovieCarousel carouselName="Batman" query='batman' className="mb-5"></MovieCarousel>
        <NetflixFooter></NetflixFooter>
      </Container>
    </div>
  );
}

export default App;
