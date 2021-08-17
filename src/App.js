import logo from './logo.svg';
import './App.css';
import React from 'react';

function Header(){
  return <h1>Welcome to IronHack Cinema</h1>
}

function Main(){
  return (
    <main>
      <Movie title="The Godfather" />
      <Movie title="Interstellar" />
      <Movie title="James Bond" />
      <Movie title="Matrix" />
      <Movie title="Inception" />
      <Movie title="Coco" />
    </main>
  )
}

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
    return (
      <section className="movie">
        <h5>{this.props.title}</h5>

        <p>Number of likes: {this.state.numberOfLikes}</p>
        <button onClick={this.increaseLikes}>Likes</button>
      </section>
    )
  }

}

function Footer(){
  return <footer>Created with love by the team at IronHack</footer>
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
