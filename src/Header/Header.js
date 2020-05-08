import React from 'react';
import Navbar from './Navbar';
import ProfileIcon from './ProfileIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    appBar: {
        minHeight: '55px',
        maxHeight: '120px'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '0',
        height: '100%',
        padding: '0',
        [theme.breakpoints.down("md")]: {
            flexWrap: 'wrap',
            justifyContent: 'center',
        },   
    },
    logo: {
        fontSize: '41px',
        fontWeight: 'bold',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            textAlign: 'center',
        },
    },
    navbar: {
        margin: '0 6.7%',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        [theme.breakpoints.down("lg")]: {
            margin: '0 3% 0 5%',
        },
        [theme.breakpoints.down("md")]: {
            width: '100%',
            margin: '10px 0 15px 0',
            justifyContent: 'center',
        },
    },
    search: {
        width: "351px",
        height: '55px',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: '#f4f4f4',
        borderRadius: '10px',
        [theme.breakpoints.down("md")]: {
            width: '50%',
            justifyContent: 'center',
            margin: '0 20px',
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center',
            margin: '0 15px',
        },
        [theme.breakpoints.down("xs")]: {
            width: '64px',
            justifyContent: 'center',
            margin: '0 20px',
        },
    },
    searchIcon: {
        fontSize: '28px',
        color: '#656565',
        position: 'absolute',
        left: '18px',
        zIndex: '2',
    },
    searchInput: {
        borderRadius: '10px',
        height: '100%',
        width: '100%',
        paddingLeft: '49px',
        fontSize: '20px',
        [theme.breakpoints.down("xs")]: {
            display: 'none',
        },
    },
    profileIcon: {
        marginLeft: '51px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '86px',
        [theme.breakpoints.down("sm")]: {
            margin: '0 20px',
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logo}>
                    SlideOnline
                </Typography>
                <div className={classes.navbar}>
                    <Navbar />
                </div>
                <div className={classes.search}>
                    <SearchIcon className={classes.searchIcon}/>
                    <InputBase className={classes.searchInput}
                        placeholder="Search events"
                    />
                </div>
                <div className={classes.profileIcon}>
                    <ProfileIcon />
                    <ExpandMoreIcon />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
