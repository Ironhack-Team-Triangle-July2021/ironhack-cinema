import React from "react";
import Movie from "./Movie";
import movies from '../data/movies.json';

class Main extends React.Component {

    state = {
        moviesArr: movies
    }

    deleteMovie = (movieId) => {
        this.setState( prevState => {
            return {
                moviesArr: prevState.moviesArr.filter( movie => movie.id !== movieId )
            }
        });
    }

    render() {
        return (
            <main className="movie-container">
                {
                    this.state.moviesArr.map(movieObj => {
                        return (
                            <Movie 
                                key={movieObj.id} 
                                {...movieObj} 
                                methodToDeleteMovie={ () => { this.deleteMovie(movieObj.id) }} 
                            />
                        )
                    })
                }
            </main>
        );
    }

}

export default Main;