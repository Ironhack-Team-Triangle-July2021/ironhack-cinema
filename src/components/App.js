import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import movies from '../data/movies.json';


class App extends React.Component {
  state = {
    moviesArr: movies
  }

  deleteMovie = (movieId) => {
    this.setState(prevState => {
      return {
        moviesArr: prevState.moviesArr.filter(movie => movie.id !== movieId)
      }
    });
  }

  createMovie = (movieData) => {
    this.setState(prevState => {
      return {
        moviesArr: [...prevState.moviesArr, movieData]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Summary listOfMovies={this.state.moviesArr} />
        <Main listOfMovies={this.state.moviesArr} methodToDeleteMovie={this.deleteMovie} methodToCreateMovie={this.createMovie} />
        <Footer />
      </div>
    );
  }
}

export default App;