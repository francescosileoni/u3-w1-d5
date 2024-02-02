import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import NetflixNavbar from './components/NetflixNavbar';
import ChooseCategories from './components/ChooseCategories';
import Container from 'react-bootstrap/container';
import ListMovie from './components/ListMovie';
import SecondlistMovie from './components/SecondlistMovie.Jsx';
import NetflixFooter from './components/NetflixFooter';

function App() {
  const pageStyle = {
    backgroundColor: '#221f1f',
  };
  return (
    <div style={pageStyle}>
      <header>
        <NetflixNavbar />
      </header>

      <Container fluid className="px-4">
        <ChooseCategories />
      </Container>
      <ListMovie />
      {/* <SecondlistMovie /> */}

      <NetflixFooter />
    </div>
  );
}

export default App;
