import React, { Component } from 'react';
import Nav from "./components/Nav"
import Wrapper from "./components/Wrapper"
import Row from "./Row";
import Container from "./Container";
import Title from "./components/Title";
import './App.css';

function App() {
  return (
    <Wrapper>
      <Nav
      // title="Warriors Memory Game"
      score={this.state.currentScore}
      topScore={this.state.topScore}
      rightWrong={this.state.rightWrong}
      />
      <Title>
        Click on each Warrior member, but don't hit a duplicate or you lose the game.
      </Title>

      <Container>
        <Row>

        </Row>
      </Container>

    </Wrapper>
  );
}

export default App;
