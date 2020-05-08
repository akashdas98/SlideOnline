import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {    
    render() {
        return (
            <Grid container direction="column" spacing={10}>
                <Grid item lg={1} />
                <Grid item container>
                    <Grid item lg={1} />
                    <Grid item lg={10}>
                        <Header />
                    </Grid>
                    <Grid item lg={1} />
                </Grid>
                <Grid item container>
                    <Grid item lg={1} />
                    <Grid item lg={10}>
                        <Main />
                    </Grid>
                    <Grid item lg={1} />
                </Grid>
            </Grid> 
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));