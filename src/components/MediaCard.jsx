import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Code, Launch } from "@material-ui/icons";


const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    media: {
        height: 150,
        width: "100%"
    },
    fit: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    spacebetween: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.fit}>
                <CardMedia
                    className={classes.media}
                    image={props?.project?.Image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props?.project?.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props?.project?.subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.spacebetween}>
                <Button startIcon={<Code />} color="default" href={props?.project?.source}>
                    Source
                </Button>
                <Button endIcon={<Launch />} color="primary" href={props?.project?.live}>
                    Live Demo
                </Button>
            </CardActions>
        </Card>
    );
}
