import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import Header from './Header/Header';
import Main from './Main/Main';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    main: {
        
    },
    header: {
        marginTop: '60px',
        [theme.breakpoints.down("sm")]: {
            marginTop: '20px',
        },
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" spacing={10}>
            <Grid item container>
                <Grid item xs={1}/>
                <Grid item xs={10} className={classes.header}>
                    <Header />
                </Grid>
                <Grid item xs={1}/>
            </Grid>
            <Grid item container className={classes.main}>
                <Grid item xs={1}/>
                <Grid item xs={10}>
                    <Main />
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Grid>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));