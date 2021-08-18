import Movie from "./Movie";
import moviesArr from '../data/movies.json';


function renderMovies() {
    return moviesArr.map( movieObj => {
        return <Movie key={movieObj.id} {...movieObj} />
    });
}


function Main() {
    return (
        <main>
            { renderMovies() }
        </main>
    )
}

export default Main;