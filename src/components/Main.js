import React from "react";
import AddMovie from "./AddMovie";
import Movie from "./Movie";

class Main extends React.Component {

    renderMovies() {
        return this.props.listOfMovies.map(movieObj => {
            return (
                <Movie
                    key={movieObj.id}
                    {...movieObj}
                    methodToDeleteMovie={ this.props.methodToDeleteMovie }
                />
            )
        })
    }

    render() {
        return (
            <main>
                <AddMovie methodToCreateMovie={this.props.methodToCreateMovie} />
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