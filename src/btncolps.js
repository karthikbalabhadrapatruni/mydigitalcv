import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
  
    margin: "10px",
    boxShadow: "none"
  }
});

class ButtonAppBarCollapse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;


    return (
      <div className={classes.buttonCollapse}>
      {this.props.children}
      </div>
    );
  }
}
export default withStyles(styles)(ButtonAppBarCollapse);
