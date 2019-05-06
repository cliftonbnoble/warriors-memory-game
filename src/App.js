import React, { Component } from 'react';
import Nav from "./components/Nav"
import Wrapper from "./components/Wrapper"
import Row from "./Row";
import Container from "./Container";
import Column from "./Column";
import WarriorCard from "./components/WarriorCard";
import warriors from "./warriors.json";
import Title from "./components/Title";
import './App.css';

function shuffleWarriors(array) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
//Set State
state = {
  warriors,
  currentScore: 0,
  topScore: 0,
  rightWrong: "",
  clicked: [],
};

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.handleReset();
  }
}

handleIncrement = () => {
  const newScore = this.state.currentScore +1;
  this.setState({
    currentScore: newScore,
    rightWrong: ""
  })
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore })
  }
  else if (newScore === 12) {
    this.setState({ rightWrong: "DUBS WIN!!!"});
  }
  this.handleShuffle();
}

handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    rightWrong: "Air Ball!!",
    clicked: []
  })
  this.handleShuffle();
}

handleShuffle = () => {
  let shuffledWarriors = shuffleWarriors(warriors);
  this.setState({ friends: shuffledWarriors });
}

render() {
  return (
    <Wrapper>
      <Nav
      title="Warriors Memory Game"
      score={this.state.currentScore}
      topScore={this.state.topScore}
      rightWrong={this.state.rightWrong}
      />
      
      <Title>
        Click on each Warrior member, but don't hit a duplicate or you lose the game.
      </Title>

      <Container>
        <Row>
          {this.state.warriors.map(warrior => (
            <Column size="md-3 sm-6">
            <WarriorCard
            key={warrior.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={warrior.id}
            image={warrior.image}
            />
            </Column>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}
}

export default App;
