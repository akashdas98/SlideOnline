import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '457px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down("lg")]: {
            width: '400px',
        },
        [theme.breakpoints.down("md")]: {
            minWidth: '600px',
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: '500px',
        },
        [theme.breakpoints.down("xs")]: {
            minWidth: '400px',
        },
    },
    items: {
        color: '#030303',
        fontSize: '20px'
    },
}));


const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.items}>
                Create Event
            </Typography>
            <Typography className={classes.items}>
                Tickets
            </Typography>
            <Typography className={classes.items}>
                Saved
            </Typography>
            <Typography className={classes.items}>
                Pricing
            </Typography>
        </div>
    )
}
 export default Navbar;