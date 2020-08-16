import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import Topmenu from './components/Topmenu';
import { createMuiTheme, Button, Grid, Typography, makeStyles, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';
import { CloudDownload, ImportantDevices } from '@material-ui/icons'
import {ReactComponent as Mogo  } from './logos.svg'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D72323'
    },
    secondary: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: 'Spartan , sans-serif',
    h1: {
      fontWeight: 900
    },
    h2: {
      fontFamily: 'Mrs Sheppards, cursive',
      fontSize: '7rem'
    },
    h3: {
      fontWeight: 900

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


        <Grid item container  >
          <Grid item xs={2} md={2} />
          <Grid item container alignContent='center' xs={8} md={8} style={{ minHeight: "80vh" }} >
            <Typography variant='h1' component='h1' display='block' > Hello <br /> I'm </Typography>
            <Typography variant='h2' component='h1' display='block' gutterBottom={true} >Mahmoud abdelaziz</Typography>
            <Typography variant='h3' component='h1' className="subheadline" display='block' gutterBottom={true} ><span></span></Typography><br />
            <Button color='secondary' variant='contained' startIcon={<CloudDownload />} onClick={downlaod}>download Resume</Button>
          </Grid>
          <Grid item xs={2} md={2} />
        </Grid>

        <Grid item container  >
          <Grid item xs={2} md={2} />
          <Grid item container alignContent='center' xs={4} md={4} style={{ minHeight: "80vh" }} >
            <Typography variant='body1' component='p' display='block' > Ex anim aute sit aute. Ad qui voluptate fugiat incididunt consequat. Nisi reprehenderit nostrud enim do nulla incididunt qui adipisicing cupidatat fugiat. Esse sit pariatur ex adipisicing laborum cupidatat ullamco tempor duis nisi. </Typography>
          </Grid>
          <Grid item container alignContent='center' xs={4} md={4} style={{ minHeight: "80vh" }} >
            <Mogo style={{width:"100%"}}/>
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
