import React from "react";
import Movie from "./Movie";
import movies from '../data/movies.json';

class Main extends React.Component {

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

    renderMovies() {
        return this.state.moviesArr.map(movieObj => {
            return (
                <Movie
                    key={movieObj.id}
                    {...movieObj}
                    methodToDeleteMovie={() => { this.deleteMovie(movieObj.id) }}
                />
            )
        })
    }

    render() {
        return (
            <main className="movie-container">
                {
                    this.state.moviesArr.length
                        ? this.renderMovies()
                        : <p className="msg-info">There are currently no movies to display</p>
                }
            </main>
        );
    }

}

export default Main;