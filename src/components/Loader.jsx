import React from 'react'
import {
    Box,
    makeStyles,
} from "@material-ui/core";
import { ReactComponent as Logo } from "../logo.svg";
import { motion } from "framer-motion";

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
const Loader = props => {
    const classes = useStyles();

    return (
        <Box className={classes.loadingContainer}>
            <Box
                style={{ width: "20%" }}
                component={motion.div}
                animate={{
                    opacity: [0.5, 1, 0.5, 1],
                    scale: [0.8, 1, 0.8, 1],
                }}
                transition={{ yoyo: Infinity, duration: 0.8 }}
            >
                <Logo />
            </Box>
        </Box>
    )
}



export default Loader
