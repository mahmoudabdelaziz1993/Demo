import React from 'react'
import { Box, Typography, makeStyles} from '@material-ui/core'
import { Phone , Email ,School ,Language , LocationCity} from '@material-ui/icons'
const useStyles = makeStyles({
    root: {
        
        display: 'flex',
        background:'black' ,
        flexWrap:'wrap',
        
    },contacts:{
        display:'flex',
        flexDirection:'column',
        color:'white',
        flex: '1 0 ',
        padding:'10px',
        
    }
})
function Footer() {
    const classes =  useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.contacts}>
                <Typography variant='h3' color='primary'>Other contacts</Typography>
                <Typography variant='subtitle2' style={{display:'inline-flex'}}><Phone fontSize='small'/> (+20)1006936356</Typography>
                <Typography variant='subtitle2'style={{display:'inline-flex'}}> <Email fontSize='small'/> mahmoudabdelaziz1993@outlook.com</Typography>
           
            </Box>
            <Box className={classes.contacts}>
            <Typography variant='h3' color='primary'>Personal info</Typography>
                <Typography variant='subtitle2' style={{display:'inline-flex'}}><School fontSize='small'/> B.Sc in computer science  </Typography>
                <Typography variant='subtitle2' style={{display:'inline-flex'}}><Language fontSize='small'/> Arabic , English—Mid-range</Typography>
                <Typography variant='subtitle2' style={{display:'inline-flex'}}><LocationCity fontSize='small'/> Dokki , Giza  </Typography>
           
            </Box>
            <Box className={classes.contacts}>
                <Typography variant='caption'> © 2020 by Mahmoud Abdelaziz</Typography>
           
            </Box>

        </Box>
    )
}

export default Footer
