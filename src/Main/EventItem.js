import React from 'react'
import { Card, CardMedia, Grid, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ShareIcon from '@material-ui/icons/Share';
import AlarmIcon from '@material-ui/icons/Alarm';

const useStyles = makeStyles(props => ({
    root: {
        borderRadius: '10px',
        height: '450px',
        minWidth: '290px',
    },
    media: props => {
        return {
            height: '282px',
            background: `url(${props.item.thumbnail})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    },
    price: {
        width: '75px',
        height: '50px',
        background: '#FFFFFF',
        position: 'relative',
        top: '20px',
        left: '20px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceText: {
        color: '#4B6EED',
        fontSize: '18px',
        fontWeight: '600',
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
    date: {
        width: '175px',
        height: '50px',
        background: '#F3F3F4',
        marginLeft: 'auto',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    alarmIcon: {
        fontSize: '24px',
    },
    dateText: {
        fontSize: '14px',
        fontWeight: 'medium',
    },
}))

const EventItem = (props) => {
    const classes = useStyles(props);
    const { title, thumbnail, price, date } = props.item;
    
    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia className={classes.media}>
                <div className={classes.price}>
                    <Typography className={classes.priceText}>
                        {price}
                    </Typography>
                </div>
            </CardMedia>
            <Grid container className={classes.cardBottom}>
                <IconButton aria-label="add to favorites" className={classes.iconButton}>
                    <ControlPointIcon className={classes.icon} />
                </IconButton>
                <IconButton aria-label="share" className={classes.iconButton}>
                    <ShareIcon className={classes.icon} />
                </IconButton>
                <div className={classes.date}>
                    <AlarmIcon className={classes.alarmIcon}/>
                    <Typography className={classes.dateText}>
                        {date}
                    </Typography>
                </div>
            </Grid>
            <CardContent>
                <Typography variant="h6">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EventItem
