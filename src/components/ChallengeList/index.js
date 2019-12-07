import React from 'react';
import Table from 'react-bootstrap/Table';
import ChallengeModal from '../ChallengeModal/index.js';


class ChallengeList extends React.Component {
  render(){
    return(
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Excercise Name</th>
            <th>Challenge </th>
            <th>Solution</th>
          </tr>
        </thead>
      {this.props.challenges.map((challenge) => (
        <tbody>
          <tr key = {challenge.id} className = 'contact-list-item'>
            <td>{challenge.id}</td>
            <td>{challenge.excerciseName}</td>
            <td>{challenge.challengeDescription}</td>
            <td><ChallengeModal /></td>
            
            {/* Button needs modal popout. Modal popout will contain solution and maybe the code and an explanation for each excercise */}
          </tr>
        </tbody>
        
      ))}
      </Table>
      
    )
  }

}



export default ChallengeList;