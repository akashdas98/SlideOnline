import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    button: {
        textTransform: 'none',
        height: '50px',
        fontSize: '20px',
        margin: '0 30px 0 0',
        borderRadius: '10px',
    },
    contained: {
        background: '#4B6EED',
        width: '68px',
    },
    text: {
        color: '#8A8993',
    },
})

const Category = (props) => {
    const classes = useStyles();

    return (
        props.categories.map(category => {
            const { id, style, title } = category
            return <Button 
                key={id} 
                variant={style.variant} 
                color={style.color} 
                className={classes.button} 
                classes={{
                    contained: classes.contained,
                    text: classes.text,
                }}
            >{title}</Button>
        })
    )
}

export default Category
