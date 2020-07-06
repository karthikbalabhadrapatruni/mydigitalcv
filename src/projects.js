import React from 'react';
import img1 from './images/hci.png';
import img2 from './images/resultAnalysis.png';
import Project from './projectcard'
import Grid from '@material-ui/core/Grid';
import './App.css';

export default function project() {


  return (
    <div id = "projects">
    <h2>My Works </h2> <br/>
    <Grid container
    direction="row"
    justify="center"
    alignItems="center">
       <Grid item >
         <Project img = {img1} link = 'https://github.com/karthikbalabhadrapatruni/Hand-Gesture-Recognition' title = 'HCI using Vision Based Hand Gestures' data = 'Gesture Recognition using Contour Model for cursor movements, actions and Power point slides movement' />
       </Grid>
       <Grid item>
         <Project img = {img2} link = 'https://github.com/karthikbalabhadrapatruni/Result-Analysis' title = 'Result Analysis' data = 'Reading results of students from a excel file to calculate CGPA, Backlogs, Pass Percentage etc.,' />
       </Grid>
    </Grid>
    </div>
  );
}
