import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "./components/Card";
import Nav from "./components/Nav";
// import Row from "./components/Row";
import Wrapper from "./components/Wrapper";
import bears from "./bears.json";
import './App.css';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {

  state = {
    bears,
    count: 0,
    score: 0,
    clickedBears: []
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  clickedBear = (id) => {

    let clickedBears = this.state.clickedBears;
    const bearId = clickedBears.find(element => element === id);
    if (bearId) {
      console.log("You already clicked this");
      if (this.state.score < this.state.count) {
        this.setState({ score: this.state.count });
      }
      this.setState({ count: 0, clickedBears: [] });
    } else {
      this.handleIncrement();
      clickedBears.push(id);
      this.setState({
        clickedBears : clickedBears
      });
    }

    if (this.state.count > 10) {
      this.setState({ count: 0, score: 12, clickedBears: [] });
      alert("You win the game! :D");
    }

    let shuffledBears = shuffleArray(this.state.bears);
    this.setState({ shuffledBears });
  }
  

  render() {
    let shuffledBears = shuffleArray(this.state.bears);
    
    return (
      <Wrapper>
        <Nav 
          count={this.state.count}
          score={this.state.score}
        />
        <div className="row">
          {shuffledBears.map(bear => (
            <Card
              name={bear.name}
              id={bear.id}
              key={bear.id}
              image={bear.image}
              clickedBear={this.clickedBear}
            />
          ))}
          </div>
      </Wrapper>
    );
  }
}
App.propTypes = {
  bears: PropTypes.array,
  clicked: PropTypes.bool
};


export default App;
