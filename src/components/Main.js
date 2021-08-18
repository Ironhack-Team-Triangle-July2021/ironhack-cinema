import React from "react";
import Movie from "./Movie";
import movies from '../data/movies.json';

class Main extends React.Component {

    state = {
        moviesArr: movies
    }

    renderMovies = () => {
        return this.state.moviesArr.map(movieObj => {
            return <Movie key={movieObj.id} {...movieObj} />
        });
    }   

    render() {
        return (
            <main className="movie-container">
                {this.renderMovies()}
            </main>
        );
    }

}

export default Main;