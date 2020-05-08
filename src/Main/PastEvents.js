import React from 'react';
import { past as events } from '../../database/database.json'
import EventItem from './EventItem';
import { Grid } from '@material-ui/core';

const PastEvents = () => {
    return (
        <Grid container spacing={5} style={{marginTop:'15px'}}>
            {events.map((event, i) => {
                return (
                    <Grid item lg={3} key={i} style={{padding: '15px 21px'}}>
                        <EventItem item={event} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default PastEvents