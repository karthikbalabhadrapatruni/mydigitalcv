import React from 'react';
import img1 from './images/hci.png';
import img2 from './images/resultAnalysis.png';
import img3 from  './images/noteride.jpg';
import img4 from './images/covidpred.png';
import img5 from './images/cnn.png'
import Project from './projectcard'
import Grid from '@material-ui/core/Grid';
import './App.css';
import Slide from '@material-ui/core/Slide';

export default function project() {


  return (
    <div id = "projects">
    <br/>
    <h1>My Works </h1>
    <Slide direction="up" in= 'true' mountOnEnter unmountOnExit>
    <Grid container
    direction="row"
    justify="center"
    alignItems="center">

       <Grid item >
         <Project img = {img1} link = 'https://github.com/karthikbalabhadrapatruni/Hand-Gesture-Recognition' label = 'HCI using Vision Based Hand Gestures' title = 'HCI using Vision Based Hand Gestures' data = 'Gesture Recognition using Contour Model for cursor movements, actions and Power point slides movement' />
       </Grid>
       <Grid item>
         <Project img = {img2} link = 'https://github.com/karthikbalabhadrapatruni/Result-Analysis' label = 'Result Analysis' title = 'Result Analysis' data = 'Reading results of students from a excel file to calculate CGPA, Backlogs, Pass Percentage etc.,' />
       </Grid>
       <Grid item>
         <Project img = {img3} link = 'https://github.com/karthikbalabhadrapatruni/NoteRide' label = 'NoteRide' title = 'NoteRide' data = 'A 3D endless running game, Pencil draws the line and eraser which is user control have to erase it without collideing with obstacles and by collecting collectables.' />
       </Grid>
       <Grid item>
         <Project img = {img4} link = 'https://github.com/karthikbalabhadrapatruni/Corona_Cases_Prediction' label = 'Covid19 Cases Prediction using LSTM' title = 'Covid19 Cases Prediction using LSTM' data = 'Time Series Analysis for preditcting Covid19 Cases of India using LSTM.' />
       </Grid>
       <Grid item>
         <Project img = {img5} link = 'https://github.com/karthikbalabhadrapatruni/Image-classification' label = 'Chest X-Ray Image Classification' title = 'Chest X-Ray Image Classification' data = 'Image Classification of Chest X-Ray dataset using CNN resnet18.' />
       </Grid>
    </Grid>
       </Slide>
      <br/>
    </div>
  );
}
