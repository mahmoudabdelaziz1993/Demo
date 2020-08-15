import React from 'react'
import { AppBar,Toolbar,IconButton , makeStyles } from '@material-ui/core'
import {ReactComponent as Logo } from '../logo.svg'
import { LinkedIn , GitHub } from '@material-ui/icons'

const useStyles = makeStyles({
    root:{
        boxShadow:'none'
    },
    logo:{
        width:'60px',
        height:"60px"
    },
    space : {
        flexGrow:1
    }
})

function Topmenu() {
    const classes = useStyles()
    return (
        <AppBar  position="sticky" color="transparent" className={classes.root}>
            <Toolbar >
                <IconButton color='inherit'><Logo className={classes.logo} /></IconButton>
                <div className={classes.space}/>
                <IconButton color='inherit' href='https://www.linkedin.com/in/mahmoud-abdelaziz-salama/'> <LinkedIn/></IconButton>
                <IconButton color='inherit' href='https://github.com/mahmoudabdelaziz1993/'><GitHub/></IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Topmenu
