import React from 'react';
import { online as events } from '../../database/database.json'
import EventItem from './EventItem';
import { Grid } from '@material-ui/core';



const OnlineEvents = () => {
    return (
        <Grid 
            container
            spacing={5}
            style={{marginTop:'15px'}}
        >
            {events.map((event, i) => {
                return (
                    <Grid 
                        item
                        xl={3}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        key={i}
                        style={{padding: '15px 20px'}}
                    >
                        <EventItem item={event}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default OnlineEvents
