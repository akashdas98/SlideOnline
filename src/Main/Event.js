import React from 'react'
import OnlineEvents from './OnlineEvents'
import PastEvents from './PastEvents'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        marginTop: '29px',
    },
    eventHeading: {
        fontSize: '27px',
        fontWeight: 'bold',
    },
}))

const Event = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" spacing={6} className={classes.root}>
            <Grid item>
                <Typography className={classes.eventHeading}>
                    Online Events
                </Typography>
                <OnlineEvents />
            </Grid>
            <Grid item>
                <Typography className={classes.eventHeading}>
                    Past Events
                </Typography>
                <PastEvents />
            </Grid>
        </Grid>
    )
}

export default Event
