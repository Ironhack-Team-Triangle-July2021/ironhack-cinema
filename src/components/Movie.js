import React from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0
        }
    }

    increaseLikes = () => {
        this.setState(prevState => {
            return { numberOfLikes: prevState.numberOfLikes + 1 }
        })
    }

    render() {

        const styleObj = {
            color: "#333",
            backgroundColor: (this.state.numberOfLikes > 4) ? "greenyellow" : "#fff"
        };

        return (
            <section className="movie" style={ styleObj }>
                <h5>{this.props.title}</h5>

                <p>Number of likes: {this.state.numberOfLikes}</p>
                <button onClick={this.increaseLikes}>Likes</button>
            </section>
        )
    }
}

export default Movie;