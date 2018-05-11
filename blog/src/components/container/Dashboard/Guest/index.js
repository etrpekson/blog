import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'       
    },
    title: {
        fontSize: 40
    },
    summary: {
        fontSize: 30
    },
    button: {
        margin: theme.spacing.unit,   
        '& > span > a':{
            textDecoration: 'none'
        }
    },
    link: {
        textDecoration: 'none'
    }
});

function GuestDashboard(props){
    const { classes, title } = props;

    return(
        <div className={classnames(classes.root)}>
            <Typography variant="headline" component="h1" className={classes.title}>
                Welcome!
            </Typography>
            <Typography variant="headline" component="h1" className={classes.summary}>
                Sign in with Google to Continue
            </Typography>
            <a href="/auth/google" className={classes.link}>
                <Button color="primary" className={classes.button}>                
                    Sign in with Google+
                </Button>
            </a>
        </div>
    );
};

GuestDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string
};

export default withStyles(styles, { name: 'GuestDashboard', withTheme: true })(GuestDashboard);