import React from 'react'
import { Box, Typography, IconButton, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        borderRadius: '10px',
        width: "100%",
        height:"100px",
    }
})

function Project() {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            
        </Box>
    )
}

export default Project
