import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import ChallengeList from './components/ChallengeList/index.js';
import Row from 'react-bootstrap/Row';
import './App.css';

let challenges = [
  {
    id: 1, 
    excerciseName: 'FizzBuzz', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 2, 
    excerciseName: 'Reverse String', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 3, 
    excerciseName: 'Roman To Integer', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 4, 
    excerciseName: 'Valid Palindrome', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 5, 
    excerciseName: 'Reverse Integer', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 6, 
    excerciseName: 'Move Zeroes', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
    id: 7, 
    excerciseName: 'Verifying an Alien Dictionary', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 8, 
    excerciseName: 'Min Stack', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 9, 
    excerciseName: 'Merge Sorted Array', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 10, 
    excerciseName: 'Best Time to Buy and Sell Stock', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 11, 
    excerciseName: 'Reverse Linked List', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 12, 
    excerciseName: 'Happy Number', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },  {
    id: 13, 
    excerciseName: 'Reorder Data', 
    challenge: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 14, 
    excerciseName: 'Valid Parentheses', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 15, 
    excerciseName: 'Maximum Subarray', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 16, 
    excerciseName: 'Two Sum', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 17, 
    excerciseName: 'Best Time to Buy and Sell Stock', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 18, 
    excerciseName: 'Reverse Linked List', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },{
    id: 19, 
    excerciseName: 'Happy Number', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 20, 
    excerciseName: 'Reorder Data', 
    challenge: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 21, 
    excerciseName: 'Valid Parentheses', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 22, 
    excerciseName: 'Merge Two Sorted Lists', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 23, 
    excerciseName: 'Maximum Subarray', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
     id: 24, 
    excerciseName: 'Two Sum', 
    challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
    isComplete: false
   },
   {
    id: 25, 
   excerciseName: 'Subdomain Visit Count', 
   challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
   isComplete: false
  },
  {
    id: 26, 
   excerciseName: 'Second Highest Salary', 
   challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
   isComplete: false
  },
  {
    id: 27, 
   excerciseName: 'Add Binary', 
   challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
   isComplete: false
  },
  {
    id: 28, 
   excerciseName: 'Combine Two Tables', 
   challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
   isComplete: false
  },
  {
    id: 29, 
   excerciseName: 'First Unique Character in a String', 
   challengeDescription: 'Write a program that outputs the string representation of numbers from 1 to n.But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.', 
   isComplete: false
  }
];


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="mt-5 ml-5 mb-5">
        <h1>Leet Code Excercises built in React</h1> 
        <p>This is the implementation of Leet Code excercises in React for the sake of practicing algorithm construction while using tools of the trade. The goal of this is to demonstrate the React way of approaching these problems.</p>
      </header>
      {/* Table will list all excercises and link to corresponding components */}
        <Container className="ml-5"> 
          <Row>
            <ChallengeList challenges = {challenges}/>

          </Row>
        </Container>
    </div>
  );
}
}

export default App;
