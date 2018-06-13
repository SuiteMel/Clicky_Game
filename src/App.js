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
    clickedBears: []
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  clicked = (id) => {
    const clickedBears = this.state.bears.filter(bear => bear.id === id);
    this.setState({ clickedBears });
  }
  
  clickedBear = () => {
    //const clickedBears = this.state.bears.filter(bear => bear.clicked === false);
    this.clicked(bears);
    //this.setState({ bears });
    // if (this.props.dataclicked === "false") {
    //   this.handleIncrement();
    // }
    const clickedBears = this.state.bears.filter(bear => bear.dataclicked === "false");
    this.setState({ clickedBears });
    
    let shuffledBears = shuffleArray(this.state.bears);
    this.setState({ shuffledBears });
    //console.log(event.target.getAttribute('dataclicked'));
    console.log(clickedBears);
  }
  

  render() {
    let shuffledBears = shuffleArray(this.state.bears);
    
    return (
      <Wrapper>
        <Nav 
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
        <div className="row">
          {shuffledBears.map(bear => (
            <Card
              name={bear.name}
              id={bear.id}
              key={bear.id}
              image={bear.image}
              dataclicked={this.clicked}
              // handleIncrement={this.handleIncrement}
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
