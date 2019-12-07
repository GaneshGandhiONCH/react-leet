import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import ChallengeList from './components/ChallengeList/index.js';
// import ChallengeModal from './components/ChallengeModal/index.js';
// import FizzBuzz from './components/FizzBuzz/index.js';
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
    challengeDescription: 'Write a function that reverses a string. The input string is given as an array of characters char[]. Do not allocate extra space for another array, you must do this by modifying the input array\xa0in-place with O(1) extra memory. You may assume all the characters consist of printable ascii characters.', 
    isComplete: false
   },
   {
     id: 3, 
    excerciseName: 'Roman To Integer', 
    challengeDescription: 'Roman numerals are represented by seven different symbols:\xa0I, V, X, L, C, D and M. \r Symbol       Value\r I             1\r V             5\r X             10\r L             50\r C             100\r D             500\r M             1000 For example,\xa0two is written as II\xa0in Roman numeral, just two one\'s added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II. Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:  I can be placed before V (5) and X (10) to make 4 and 9.\xa0 X can be placed before L (50) and C (100) to make 40 and 90.\xa0 C can be placed before D (500) and M (1000) to make 400 and 900.  Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999', 
    isComplete: false
   },
   {
     id: 4, 
    excerciseName: 'Valid Palindrome', 
    challengeDescription: 'Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. Note:\xa0For the purpose of this problem, we define empty string as valid palindrome.', 
    isComplete: false
   },
   {
     id: 5, 
    excerciseName: 'Reverse Integer', 
    challengeDescription: 'Given a 32-bit signed integer, reverse digits of an integer.', 
    isComplete: false
   },
   {
     id: 6, 
    excerciseName: 'Move Zeroes', 
    challengeDescription: "Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.", 
    isComplete: false
   },
   {
    id: 7, 
    excerciseName: 'Verifying an Alien Dictionary', 
    challengeDescription: 'In an alien language, surprisingly they also use english lowercase letters, but possibly\xa0in a different order. The\xa0order of the alphabet\xa0is some permutation\xa0of lowercase letters. Given a sequence of words\xa0written in the alien language,\xa0and the order of the alphabet,\xa0return true if and only if the given words\xa0are sorted lexicographicaly in this alien language.', 
    isComplete: false
   },
   {
     id: 8, 
    excerciseName: 'Min Stack', 
    challengeDescription: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.  push(x) -- Push element x onto stack. pop() -- Removes the element on top of the stack. top() -- Get the top element. getMin() -- Retrieve the minimum element in the stack.', 
    isComplete: false
   },
   {
     id: 9, 
    excerciseName: 'Merge Sorted Array', 
    challengeDescription: 'Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. Note:  The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.', 
    isComplete: false
   },
   {
     id: 10, 
    excerciseName: 'Best Time to Buy and Sell Stock', 
    challengeDescription: 'Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit. Note that you cannot sell a stock before you buy one.', 
    isComplete: false
   },
   {
     id: 11, 
    excerciseName: 'Reverse Linked List', 
    challengeDescription: 'Reverse a singly linked list.', 
    isComplete: false
   },
   {
     id: 12, 
    excerciseName: 'Happy Number', 
    challengeDescription: 'Write an algorithm to determine if a number is "happy". A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.', 
    isComplete: false
   },  {
    id: 13, 
    excerciseName: 'Reorder List', 
    challenge: 'Given a singly linked list L: L0→L1→…→Ln-1→Ln,reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…', 
    isComplete: false
   },
   {
     id: 14, 
    excerciseName: 'Valid Parentheses', 
    challengeDescription: 'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if:  Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.  Note that an empty string is\xa0also considered valid.', 
    isComplete: false
   },
   {
     id: 15, 
    excerciseName: 'Maximum Subarray', 
    challengeDescription: 'Given an integer array nums, find the contiguous subarray\xa0(containing at least one number) which has the largest sum and return its sum.', 
    isComplete: false
   },
   {
     id: 16, 
    excerciseName: 'Two Sum', 
    challengeDescription: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.', 
    isComplete: false
   },
   {
     id: 17, 
    excerciseName: 'Merge Two Sorted Lists', 
    challengeDescription: 'Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.', 
    isComplete: false
   },
   {
    id: 18, 
   excerciseName: 'Subdomain Visit Count', 
   challengeDescription: 'A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly. Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com". We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain. \r Example 1:\r Input: \r ["9001 discuss.leetcode.com"]\r Output: \r ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]\r Explanation: \r We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.', 
   isComplete: false
  },
  {
    id: 19, 
   excerciseName: 'Second Highest Salary', 
   challengeDescription: 'Write a SQL query to get the second highest salary from the Employee table. \r +----+--------+\r | Id | Salary |\r +----+--------+\r | 1  | 100    |\r | 2  | 200    |\r | 3  | 300    |\r +----+--------+\r', 
   isComplete: false
  },
  {
    id: 20, 
   excerciseName: 'Add Binary', 
   challengeDescription: 'Given two binary strings, return their sum (also a binary string). The input strings are both non-empty and contains only characters 1 or\xa00.', 
   isComplete: false
  },
  {
    id: 22, 
   excerciseName: 'Combine Two Tables', 
   challengeDescription: 'Table: Person \r +-------------+---------+\r | Column Name | Type    |\r +-------------+---------+\r | PersonId    | int     |\r | FirstName   | varchar |\r | LastName    | varchar |\r +-------------+---------+\r PersonId is the primary key column for this table.\r  Table: Address \r +-------------+---------+\r | Column Name | Type    |\r +-------------+---------+\r | AddressId   | int     |\r | PersonId    | int     |\r | City        | varchar |\r | State       | varchar |\r +-------------+---------+\r AddressId is the primary key column for this table.\r  \xa0 Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people: \r FirstName, LastName, City, State\r  ', 
   isComplete: false
  },
  {
    id: 23, 
   excerciseName: 'First Unique Character in a String', 
   challengeDescription: 'Given a string, find the first non-repeating character in it and return it', 
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
