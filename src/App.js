import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import Topmenu from './components/Topmenu';
import { createMuiTheme  , ThemeProvider , Grid ,Typography ,makeStyles} from '@material-ui/core';
import { ReactComponent as Hello  } from './hello.svg'
const theme = createMuiTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Grid className='wrapper'>
    <Topmenu/>
    <Grid item xs={8}  container>
      <Grid item xs={8} >
         <Typography className="headline" variant='h2' align='left'> I'm <br/> Mahmoud abdelaziz </Typography>
         <Typography variant='h3' align='left' className="subheadline" > <span></span> </Typography>
         </Grid>
      
    </Grid>


    <div className="object" id="a"/>
    <div className="object" id="b"/>
    <Hello  className="object" id="c"/>
    <div className="object" id="d"/>
    <div className="object" id="e"/>
    <div className="object" id="f"/>
    </Grid>
    
   
    </ThemeProvider>
  );
}

export default App;
