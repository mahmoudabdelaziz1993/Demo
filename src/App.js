import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import Topmenu from './components/Topmenu';
import { Box, createMuiTheme, Button, Grid, Typography, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';
import { CloudDownload, Work } from '@material-ui/icons'
import { ReactComponent as Me } from './me.svg'
import { ReactComponent as Mogo } from './logos.svg'
import { ReactComponent as Logo } from './logo.svg'
import Project from './components/Project';
import { projects } from './data'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion'





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
    h2: {
      fontWeight: 600
    },
    subtitle1: {
      fontWeight: 600

    }, h3: {
      fontWeight: 600

    }
  }
});



theme = responsiveFontSizes(theme)






function App() {

  const downlaod = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + "/CV.pdf";
    link.setAttribute('download', 'Mahmoud-abdelaziz.pdf');
    document.body.appendChild(link);
    link.click();
  }



  //protfolio is on !
  const [IsOn, setIsOn] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOn(!IsOn), 2000)
  }, [])


  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid  >


        {!IsOn ?
          <AnimatePresence>
            <motion.div style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#D72323'

            }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div animate={{ scale: 1.2 }} transition={{ yoyo: Infinity, duration: .5 }}
                style={{ display: 'flex', width: "20%", height: "20%", justifyContent: 'center', }} >
                <Logo style={{ width: "100%" }} />
              </motion.div>

            </motion.div>
          </AnimatePresence>

          :
          <AnimatePresence>
            <motion.div
              style={{ display: 'contents' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <Topmenu />

              {/* hero section */}
              <Grid item container alignContent='center' style={{ minHeight: "80vh" }} >
                <Grid item xs={2} md={2} />
                <Grid item container direction='column' xs={6} md={6}  >
                  <Grid item><Typography variant='h3' component='h3' display='block' gutterBottom={true}> Hello <br /> I'm  Mahmoud abdelaziz </Typography></Grid>
                  <Grid item> <Typography variant='subtitle1' component='h3' className="subheadline" display='block' gutterBottom={true} ><span></span></Typography></Grid>
                  <Grid item >
                    <Box style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                      <Button size='small' color='primary' variant='contained' style={{ marginRight: '5px', marginBottom: "5px" }} startIcon={<CloudDownload />} onClick={downlaod}>download Resume</Button>
                      <Button size='small' color='primary' variant='contained' style={{ marginBottom: "5px" }} startIcon={<Work />} href="#contact">Hire me </Button>
                    </Box>


                  </Grid>
                </Grid>
                <Grid item xs={3} md={2}  >
                  <Me style={{ width: "100%", height: 'auto' }} />
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
              <Grid item container >
                <Grid item xs={2} md={2} />
                <Grid item container direction='column' spacing={3} xs={8} md={8}>
                  <Grid item> <Typography variant='h3' >Work</Typography></Grid>



                  {projects.map(
                    (project) =>

                      <Grid item key={project.number} >
                        <Project project={project} />
                      </Grid>

                  )}
                </Grid>
                <Grid item xs={2} md={2} />
              </Grid>


              {/* Let's talk section  */}
              <Grid item container >
                <Grid item xs={2} md={2} />
                <Grid item container direction='column' spacing={3} xs={8} md={8} justify='center' id='contact' alignContent='center'>

                  <Grid item> <Typography variant='h3' color='primary' style={{ marginTop: '50px' }} >Let's talk</Typography></Grid>
                  <Grid item id='contact' ><Contact /></Grid>
                </Grid>
                <Grid item xs={2} md={2} />
              </Grid>

              <Footer />


            </motion.div>
          </AnimatePresence>

        }




      </Grid>



    </MuiThemeProvider>
  );
}

export default App;
