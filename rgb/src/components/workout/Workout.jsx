import React from 'react';
import './Workout.css';

var currentDate = new Date();
var pushUps = [20,15,10,5,0];
var squarts = [2,4,6,8,10];
var sitUps = [4,8,12,16,20];

const Workout = () => {
  return (
    <workout>
    <br></br>
    <div className="date_format">
      <h2>{currentDate.getFullYear()}/{currentDate.getMonth()+1}/{currentDate.getDate()}</h2>
    </div>
    <div className="workout_table">
    <table>
      <tr>
        <th>Workout</th>
        <th>Set 1</th>
        <th>Set 2</th>
        <th>Set 3</th>
        <th>Set 4</th>
        <th>Set 5</th>
      </tr>
      <tr>
        <td>Push-ups</td>
        <td>{pushUps[0]}</td>
        <td>{pushUps[1]}</td>
        <td>{pushUps[2]}</td>
        <td>{pushUps[3]}</td>
        <td>{pushUps[4]}</td>
      </tr>
      <tr>
        <td>Squats</td>
        <td>{squarts[0]}</td>
        <td>{squarts[1]}</td>
        <td>{squarts[2]}</td>
        <td>{squarts[3]}</td>
        <td>{squarts[4]}</td>
      </tr>
      <tr>
        <td>Sit-ups</td>
        <td>{sitUps[0]}</td>
        <td>{sitUps[1]}</td>
        <td>{sitUps[2]}</td>
        <td>{sitUps[3]}</td>
        <td>{sitUps[4]}</td>
      </tr>
    </table>  
    </div>
    </workout>
  )
}

export default Workout