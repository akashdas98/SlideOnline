import React from 'react'
import { Card, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
    media: {
        height: '282px',
    },
    cardBottom: {
        padding: '15px',
        boxSizing: 'border-box',
    },
    iconButton: {
        padding: '0 10px 0 0',
    },
    icon: {
        fontSize: '30px',
    },
    time: {
        display: 'inline-block',
        width: '175px',
        height: '50px',
        background: '#F3F3F4',
        marginLeft: 'auto',
        borderRadius: '10px',
    },
})

const EventItem = (props) => {
    const classes = useStyles();
    const { title, thumbnail, price, date } = props.item;
    
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={thumbnail}
            />
            <Grid container className={classes.cardBottom}>
                <IconButton aria-label="add to favorites" className={classes.iconButton}>
                    <ControlPointIcon className={classes.icon} />
                </IconButton>
                <IconButton aria-label="share" className={classes.iconButton}>
                    <ShareIcon className={classes.icon} />
                </IconButton>
                <div className={classes.time}>

                </div>
            </Grid>
        </Card>
    )
}

export default EventItem
