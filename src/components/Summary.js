function Summary(props) {

    const totalRating = props.listOfMovies.reduce( (acc, currentElm) => {
        return acc + currentElm.rating;
    }, 0);
    const averageRating = (totalRating / props.listOfMovies.length).toFixed(2);

    return (
        <div id="summary" className="msg-info">
            <p>
                Number of movies: {props.listOfMovies.length} <br />
                Average Rating: { averageRating }
            </p>
        </div>
    )
}

export default Summary;