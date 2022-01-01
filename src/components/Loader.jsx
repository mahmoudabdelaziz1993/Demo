import React from 'react'
import {
    Box,
    makeStyles, Grid
} from "@material-ui/core";
import { ReactComponent as Logo } from "../logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    loadingContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        background: theme.palette.primary.main,
    },
}));




let slideUpOut = {
    initial: {
        opacity: 0.5,
        y: "-100vh",
    },
    play: {
        opacity: 1,
        y: "0",
        transition: {
            delay: .5,
            when: "beforeChildren",
            staggerChildren: 0.04,
        },
    },
    exit: {

        y: "-100vh",


    },
};
let loading = {
    initial: {

        x: 100
    },
    play: {

        x: 0,
        transition: { duration: 1, staggerChildren: 0.3, }

    },
    exit: {

        x: 100,

    },
};
let loadingPath = {
    initial: {
        opacity: 0,
        pathLength: 0,
        x: 20,
        scale: .1
    },
    play: {
        opacity: 1,
        x: 0,
        pathLength: 1,
        scale: 1,
        transition: { duration: 1, type: "spring" }

    },
    exit: {
        opacity: 0,
        pathLength: 0

    }
};

const Loader = props => {
    const classes = useStyles();

    return (
        <Grid item>
            <Box className={classes.loadingContainer}
                component={motion.div}
                variants={slideUpOut}
                initial="initial"
                animate="play"
                exit="exit"
            >
                <Box
                    style={{ width: "20%" }}
                // component={motion.div}
                // variants={loading}

                >
                    <motion.svg
                        variants={loading}
                        version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 640 480" enableBackground="new 0 0 640 480" xmlSpace="preserve">
                        <g>
                            <motion.path variants={loadingPath}
                                d="M309.1,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01
		c-21.85,0-41.95-7.47-57.9-20c-21.82-17.16-35.84-43.8-35.85-73.72h-0.01V114.77h0.01v-0.03c0-29.65,13.77-56.1,35.27-73.28
		C266.25,28.66,286.58,21,308.69,21C308.83,21,308.96,21,309.1,21.01z"
                            />
                            <motion.path variants={loadingPath}
                                d="M426.05,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01
		c-22.12,0-42.45-7.66-58.47-20.47c-1.71-1.36-3.36-2.78-4.96-4.26c-18.63-17.12-30.3-41.69-30.31-68.99h-0.01V114.77h0.01v-0.03
		c0-29.65,13.77-56.1,35.27-73.28C383.2,28.66,403.52,21,425.64,21C425.78,21,425.91,21,426.05,21.01z"
                            />
                            <motion.path variants={loadingPath}
                                d="M543,114.77v245.96h-0.41
		c-0.02,51.76-41.98,93.72-93.74,93.72h-0.01V21h0.01c51.77,0,93.74,41.97,93.74,93.74v0.03H543z"
                            />
                            <motion.path variants={loadingPath}
                                d="M192.15,21.01v329.48c-0.14,0.01-0.27,0.01-0.41,0.01
		c-51.77,0-93.74-41.97-93.74-93.74c0-0.3,0-0.6,0.01-0.9h-0.02V114.77H98v-0.03C98,62.97,139.97,21,191.74,21
		C191.88,21,192.01,21,192.15,21.01z"
                            />
                        </g>
                    </motion.svg>
                </Box>
            </Box>
        </Grid>
    )
}



export default Loader
