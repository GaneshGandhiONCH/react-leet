import React from 'react';
// import Challenge from '../Challenge/index.js';


class ChallengeList extends React.Component {
  render(){
    return(

      <ol className = "contact-list">
      {this.props.challenges.map((challenge) => (
          <li key = {challenge.id} className = 'contact-list-item'>
            <p>{challenge.excerciseName}</p><br/>
            <p>{challenge.challengeDescription}</p>
          </li>
      ))}
      </ol>
    )
  }

}



export default ChallengeList;
