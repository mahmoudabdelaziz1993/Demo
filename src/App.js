import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import Topmenu from './components/Topmenu';
import { createMuiTheme, Button, Grid, Typography, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons'
import { ReactComponent as Me } from './me.svg'
import { ReactComponent as Mogo } from './logos.svg'
import Project from './components/Project';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D72323'
    },
    secondary: {
      main: '#303841'
    }
  },
  typography: {
    fontFamily: 'Spartan , sans-serif',
    h2: {
      fontWeight: 600
    },
    subtitle1: {
      fontWeight: 600

    },h3:{
      fontWeight: 600

    }


  }
});
theme = responsiveFontSizes(theme)

const downlaod = () => {

  const link = document.createElement('a');
  link.href = process.env.PUBLIC_URL + "/CV.pdf";
  link.setAttribute('download', 'Mahmoud-abdelaziz.pdf');
  document.body.appendChild(link);
  link.click();
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid  >
        <Topmenu />

        {/* hero section */}
        <Grid item container alignContent='center' style={{ minHeight: "80vh" }} >
          <Grid item xs={2} md={2} />
          <Grid item container direction='column' xs={6} md={6}  >
            <Grid item><Typography variant='h3' component='h3' display='block' gutterBottom={true}> Hello <br /> I'm  Mahmoud abdelaziz </Typography></Grid>
            <Grid item> <Typography variant='subtitle1' component='h3' className="subheadline" nowrap display='block' gutterBottom={true} ><span></span></Typography></Grid>
            <Grid item> <Button size='small'  color='primary' variant='contained' startIcon={<CloudDownload />} onClick={downlaod}>download Resume</Button></Grid>
          </Grid>
          <Grid item xs={3} md={2}  >
            <Me style={{width:"100%" ,height:'auto' }} />
          </Grid>

          <Grid item xs={1} md={2} />
        </Grid>

        {/* about Me section */}
        <Grid item container alignContent='center' justify='center' style={{ minHeight: "80vh" }} >
          <Grid item xs={2} md={2} />
          <Grid item container direction='column' alignContent='center' xs={4} md={4} >
            <Grid item > <Typography variant='h3' gutterBottom={true}> About me</Typography></Grid>
            <Grid item>
              <Typography variant='subtitle2' component='p' display='block' >
                I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns ,
                from Sales and tour oprating to a Fullstack dev
                </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} md={4} >
            <Mogo style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={2} md={2} />
        </Grid>

        {/* Work section */}
        <Grid Grid item container style={{ minHeight: "100vh" }}>
          <Grid item xs={2} md={2} />

          <Grid item container direction='column' xs={8} md={8}>
            <Grid item> <Typography variant='h3' >Work</Typography></Grid>
            <Grid item><Project/></Grid>

          </Grid>
          <Grid item xs={2} md={2} />
        </Grid>


        {/* <div className="object" id="a" />
        <div className="object" id="b" />
        <div className="object" id="d" />
        <div className="object" id="e" />
        <div className="object" id="f" /> */}
      </Grid>


    </MuiThemeProvider>
  );
}

export default App;
