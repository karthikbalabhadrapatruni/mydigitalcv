import React from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import mail from './images/mail.png';
import lkdin from './images/lkdin.png';
import git from './images/github.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
export default function Contact() {
  return (
    <div id = "contact">
    <h1> Contact</h1>
    <h3> Mohana Koundinya Karthik Balabhadrapatruni</h3>
    karthik.bmk3@gmail.com
    <br/><br/>
    <img  className = 'iconImg2' title = 'https://www.linkedin.com/in/karthikbalabhadrapatruni' src = {lkdin} onClick = {()=>{window.open("https://www.linkedin.com/in/karthikbalabhadrapatruni")}}/>
    <img  className = 'iconImg2' title = "https://github.com/karthikbalabhadrapatruni" src = {git} onClick = {()=>{window.open("https://github.com/karthikbalabhadrapatruni")}}/>
    <img  className = 'iconImg3' title = 'mailto:karthik.bmk3@gmail.com' src = {mail} onClick = {()=>{window.open('mailto:karthik.bmk3@gmail.com', 'emailWindow')}}/>
    </div>
  )
}
