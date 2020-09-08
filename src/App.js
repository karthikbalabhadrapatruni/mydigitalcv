import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Top from './top'
import Project from './projects'
import Contact from './footer'
import Education from './education'
import Skills from './skills'
import Certificates from './certifications'

import AppColps from './appbarcolps'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {

    width: '80%',
    textAlign: "left",
    color : 'black',

  },
  appBar : {
    backgroundColor: 'white !important' ,
    position : 'fixed',
    width: '100%'
  },
  link: {
    margin : '30px',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <AppBar className={classes.appBar} position="static">
  <Toolbar>
    <Typography variant="h5" className={classes.title}>
      Mohana Koundinya Karthik Balabhadrapatruni
    </Typography>
<AppColps />
  </Toolbar>
</AppBar>
<Top />
<Project />
<Skills />
<Certificates />
<Education />
<Contact />
    </div>
  );
}

export default App;
