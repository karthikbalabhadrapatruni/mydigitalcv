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
    minWidth: 345,
    height: 'fit-content',
    height: 400,
  },
  media: {
    height: 140,
  },
});


export default function SkillCard(props) {
  const classes = useStyles();
  const cls = classes.root + ' projectCard';
  return (
    <Card className={cls}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.data. map( (l) => {
              return <i>{l}<br/><br/></i>
            })}
          </Typography>
        </CardContent>
    </Card>
  );
}
