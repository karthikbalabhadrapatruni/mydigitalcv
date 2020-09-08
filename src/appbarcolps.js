import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./btncolps";
import Link from '@material-ui/core/Link';
import res from './resume/Karthik_Resume.pdf';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuList from '@material-ui/core/MenuList';


const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  },
  link: {
    margin : '300px',
  }
});




const AppBarCollapse = props => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
    <Link href= {res} target="_blank" >
        Resume
    </Link>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
    <Link href="#projects" >
      Projects
    </Link>
  <Link href="#contact" >
    Contact
  </Link>
  <Link href= {res} target="_blank" >
      Resume
  </Link>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
