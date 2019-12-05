import React from 'react';
import Container from 'react-bootstrap/Container';
import ChallengeTable from './components/ChallengeList/index.js';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="mt-5 ml-5">
        <h1>Leet Code Excercises built in React</h1> 
        <p>This is the implementation of Leet Code excercises in React for the sake of practicing algorithm construction while using tools of the trade. The goal of this is to demonstrate the React way of approaching these problems.</p>
      </header>
      {/* Table will list all excercises and link to corresponding components */}
        <Container className="ml-5"> 
          <Row>
            <code>Challenges will go here. </code>
          </Row>
        </Container>
    </div>
  );
}

export default App;
