import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SecondlistMovie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('http://www.omdbapi.com/?apikey=f8d3d647&s=Harry Potter')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore');
        }
      })
      .then((data) => {
        const movies = data.Search.slice(0, 3).map((item) => ({
          src: item.Poster,
        }));
        this.setState({
          movies: movies,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="px-4">
        <h4 className="text-white mb-4">Trending Now</h4>

        <Row>
          {this.state.movies.map((movie, index) => (
            <Col xs={12} md={4} key={index}>
              <img
                className="img-fluid"
                src={movie.src}
                alt={`Trending ${index + 1}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default SecondlistMovie;
