import React, { Component } from 'react';

class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    render() {
        return (
            <section>
                <form>
                    <label>
                        Title:
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            onChange={ (e) => this.handleTitleChange(e) }
                        />
                    </label>

                    <button>Submit</button>
                </form>
            </section>
        )
    }
}

export default AddMovie;