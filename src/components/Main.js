import React from "react";
import AddMovie from "./AddMovie";
import Movie from "./Movie";

class Main extends React.Component {

    deleteMovie = (movieId) => {
        this.setState(prevState => {
            return {
                moviesArr: prevState.moviesArr.filter(movie => movie.id !== movieId)
            }
        });
    }


    createMovie = (movieData) => {
        this.setState( prevState => {
            return {
                moviesArr: [...prevState.moviesArr, movieData]
            }
        });
    }

    renderMovies() {
        return this.props.listOfMovies.map(movieObj => {
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
            <main>
                <AddMovie addMovieHandler={this.createMovie} />
                <section className="movie-container">
                    {
                        this.props.listOfMovies.length
                            ? this.renderMovies()
                            : <p className="msg-info">There are currently no movies to display</p>
                    }
                </section>
            </main>
        );
    }

}

export default Main;