import React from 'react';
import Skills from './skillcard'
import Grid from '@material-ui/core/Grid';

export default function skills() {
  const pldata = ['C','C++', 'Java', 'Python']
  const wedata = ['HTML','CSS', 'Java Script', 'React']
  const othr = [  'PyTorch', 'Numpy', 'Eclipse', 'Android Studio', 'Weka', 'Anaconda',]
  return (
  <div id = 'skills'>
  <br/>
<h1>My Skills</h1>
<Grid container
direction="row"
justify="center"
alignItems="center">
   <Grid item >
     <Skills title = 'Programming Languages' data = {pldata} />
   </Grid>
   <Grid item >
     <Skills title = 'Web Technologies' data = {wedata} />
   </Grid>
   <Grid item >
     <Skills title = 'Tools, Libraries, IDEs and many more' data = {othr} />
   </Grid>
</Grid>
<br/>
  </div>
)
}
