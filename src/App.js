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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    color : 'black',

  },
  appBar : {
    backgroundColor: 'white !important' ,
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
    <Link href="#projects" className={classes.link}>
Projects
  </Link>
  <Link href="#contact" className={classes.link}>
Contact
  </Link>
  <Link href="#" className={classes.link}>
  Resume
  </Link>
  </Toolbar>
</AppBar>
<Top />
<br/>
<br/>
<Project />
<br/><br/>
<Skills />
<br/><br/>
<Education />
<br/><br/>
<Contact />
    </div>
  );
}

export default App;
