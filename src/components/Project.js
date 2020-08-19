import React from 'react'
import { Card , CardContent,CardActions, Typography, IconButton, makeStyles } from '@material-ui/core'
import { Code,Launch } from '@material-ui/icons'
import box from '../images/box.jpg'
const useStyles = makeStyles({
    root: {
        position:'relative',
        borderRadius: '10px',
        width: "100%",
        height: "250px",
        margin: "10px 0",
        background:`url(${box}) no-repeat center center fixed `,
        backgroundSize:'cover'

    },sub:{
        position:'absolute',
        width:'15%',
        height:'50px',
        top:'0',
        right:'15px',
        marginTop: "-20px"
    },contant:{
        position:'absolute',
        marginTop:'150px'
    }
})

function Project() {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <div className={classes.sub}>
                <Typography variant='h3' color='primary'> 01 </Typography>
                <Typography variant='subtitle1' color='primary'> React </Typography>
            </div>
            <Card className={classes.contant}>
                <CardContent >
                    <Typography variant='h3' > 3d BOX </Typography>
                    <Typography variant ='subtitle2'>Excepteur minim dolor dolor nostrud reprehenderit. Qui ut dolor labore irure ea mollit ad. Incididunt ut incididunt anim elit occaecat id irure voluptate aliquip sint et. Ullamco est labore minim qui aute ea. Fugiat veniam nulla cillum occaecat velit labore ad velit do.</Typography>
                </CardContent>
                <CardActions>
                    <IconButton> <Code/></IconButton>
                    <IconButton> <Launch/>  </IconButton>
                </CardActions>
            </Card>

        

        </div>
    )
}

export default Project
