import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '457px',
        display: 'flex',
        justifyContent: 'space-between',        
    },
    items: {
        color: '#030303',
        fontSize: '20px'
    },
})


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