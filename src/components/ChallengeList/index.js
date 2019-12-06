import React from 'react';
import Table from 'react-bootstrap/Table';


class ChallengeList extends React.Component {
  render(){
    return(

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Excercise Name</th>
            <th>Challenge </th>
          </tr>
        </thead>
      {this.props.challenges.map((challenge) => (
        <tbody>
          <tr key = {challenge.id} className = 'contact-list-item'>
            <td>{challenge.id}</td>
            <td>{challenge.excerciseName}</td>
            <td>{challenge.challengeDescription}</td>
          </tr>
        </tbody>
    
      ))}
      </Table>
    )
  }

}



export default ChallengeList;