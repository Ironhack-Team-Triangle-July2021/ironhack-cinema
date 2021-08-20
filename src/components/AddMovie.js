import React, { Component } from 'react';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: '',
            rating: '',
            imgURL: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { title, year, rating, imgURL } = this.state;
        
        // call a method in parent component to create the new movie (we're passing an object with the details of the new movie)
        this.props.methodToCreateMovie( {title, year, rating, imgURL} ); 

        // reset form
        this.setState({
            title: '',
            year: '',
            rating: '',
            imgURL: '',
        });
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleFormSubmit}>

                    {/* Input field: Title */}
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label>

                    {/* Input field: Year */}
                    <label>
                        Year:
                        <input
                            type="number"
                            min="1900"
                            max="2099"
                            name="year"
                            value={this.state.year}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label>

                    {/* Input field: Rating */}
                    <label>
                        Rating:
                        <input
                            type="number"
                            min="1"
                            max="10"
                            name="rating"
                            value={this.state.rating}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label>

                    {/* Input field: imgURL */}
                    <label>
                        Image URL:
                        <input
                            type="text"
                            name="imgURL"
                            value={this.state.imgURL}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label>

                    <button>Submit</button>
                </form>
            </section>
        )
    }
}

export default AddMovie;