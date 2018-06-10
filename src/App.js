import React, { Component } from 'react';
import Card from "./components/Card";
import Nav from "./components/Nav";
// import Row from "./components/Row";
import Wrapper from "./components/Wrapper";
import bears from "./bears.json";
import './App.css';

class App extends Component {

  state = {
    bears,
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    (Math.random() * 5) + 1
  };

  render() {
    return (
      <Wrapper>
        <Nav 
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
        <div className="row">
          {this.state.bears.map(bear => (
            <Card
              name={bear.name}
              id={bear.id}
              key={bear.id}
              image={bear.image}
              handleIncrement={this.handleIncrement}
            />
          ))}
          </div>
      </Wrapper>
    );
  }
}

export default App;
