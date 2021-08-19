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

    render() {
        return (
            <section>
                <form>

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