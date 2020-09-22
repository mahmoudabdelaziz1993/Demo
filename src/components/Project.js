import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Typography, IconButton, makeStyles } from '@material-ui/core'
import { Code, Launch } from '@material-ui/icons'
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: 'column',
        position: 'relative',

        borderRadius: "25px"
    },
    media: {
        height: "200px",
    },
    sub: {
        position: 'absolute',
        right: 0,
        margin: "10px 10px",
        background: "rgba(13,0,0,0.3)",
        borderRadius: "25px",
        padding: "12px",
        textShadow:"0 2px 0px #161616"

    }
})

function Project(props) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <div className={classes.sub}>
                <Typography variant='h3' color='primary'>{props.project.number}</Typography>
                <Typography variant='subtitle1' color='primary'>{props.project.type}</Typography>
            </div>
            <CardMedia
                component="img"
                className={classes.media}
                image={props.project.Image}
            />
            <CardContent>
                <Typography variant='h3'>{props.project.title}</Typography>
                <Typography variant='body1'>{props.project.subtitle}</Typography>
            </CardContent>
            <CardActions>
                <IconButton href={props.project.source}><Code /></IconButton>
                <IconButton href={props.project.live}><Launch /></IconButton>
            </CardActions>
        </Card>
    )
}

export default Project
