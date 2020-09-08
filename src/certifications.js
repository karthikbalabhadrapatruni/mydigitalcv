import React from 'react';
import Certifications from './certificationcard';
import Grid from '@material-ui/core/Grid';
import img1 from './images/dlc.png'
import img2 from './images/gdm.png'
import img3 from './images/introds.png'
import img4 from './images/charting.png'
import img5 from './images/ml.png'
import img6 from './images/atm.png'
import img7 from './images/asna.png'
import img8 from './images/bs.png'
import cc1 from './resume/dlc.pdf'
import cc2 from './resume/gdm.pdf'
import cc3 from './resume/introds.pdf'

export default function certifications() {

  return (
  <div id = 'certifications'>
  <br/>
<h1>Certifications</h1>
<Grid container
direction="row"
justify="center"
alignItems="center">
<Grid item >
  <Certifications img = {img8} link = {'http://coursera.org/verify/JHHVSU6LYQU7'} data = "Basic Statistics Issued by Coursera." />
  </Grid>
  <Grid item >
    <Certifications img = {img7} link = {'https://coursera.org/verify/BMHVY8CV9DX8'} data = "Applied Social Network Analysis in Python Issued by Coursera." />
  </Grid>
  <Grid item >
    <Certifications img = {img6} link = {'https://coursera.org/verify/9WKJ476R9L2K'} data = "Applied Text Mining in Python Issued by Coursera." />
  </Grid>
  <Grid item >
    <Certifications img = {img5} link = {'https://coursera.org/verify/H3BGHVUXK8Y3'} data = "Applied Machine Learning in Python Issued by Coursera." />
  </Grid>
  <Grid item >
      <Certifications img = {img4} link = {'https://coursera.org/verify/UF9JN7ZD5J8V'} data = "Applied Plotting, Charting & Data Representationin Python Issued by Coursera." />
  </Grid>
  <Grid item >
    <Certifications img = {img3} link = {'http://coursera.org/verify/KUQCUV8SVQ8Z'} data = "Introduction to Data Science in Python Issued by Coursera." />
    </Grid>
   <Grid item >
     <Certifications img = {img1} link = {'https://www.credential.net/cf7901c9-9f38-4c4d-a8fd-e379043392ec'} data = "Deep Learning Certificate Issued by PadhAI - One Fourth Labs" />
   </Grid>
   <Grid item >
     <Certifications img = {img2}  link = {"https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code"} data = "The Fundamentals of Digital Marketing certificate issued by Google EMEA." />
   </Grid>
</Grid>
<br/>
  </div>
)
}
