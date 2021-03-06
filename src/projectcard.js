import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 400,
  },
  media: {
    height: 140,
  },
});


export default function ProjectCard(props) {
  const classes = useStyles();
  const cls = classes.root + ' projectCard';
  const [hover, setHover] = React.useState(false);
  const toggleHover = () => {
  setHover(!hover)
    if(!hover){
      console.log('hover')
    } else {
        console.log('not hover')
      }


  }
  return (
    <Card className={cls} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <CardActionArea onClick = {()=>{window.open(props.link)}}>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
