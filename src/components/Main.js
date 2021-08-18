import React from "react";
import Movie from "./Movie";
import movies from '../data/movies.json';

class Main extends React.Component {

    state = {
        moviesArr: movies
    }

    doSomething = () => {
        console.log("I am executing code in the parent component.... so cool!!");
    }

    render() {
        return (
            <main className="movie-container">
                {
                    this.state.moviesArr.map(movieObj => {
                        return <Movie key={movieObj.id} {...movieObj} methodInTheParentComponent={this.doSomething} />
                    })
                }
            </main>
        );
    }

}

export default Main;