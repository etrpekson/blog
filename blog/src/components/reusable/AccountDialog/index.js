import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({    
    dialogHeadingText: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,        
        fontSize: 16,
        fontWeight: 'bold'
    },
    dialogText: {
        marginLeft: theme.spacing.unit * 2,        
        marginRight: theme.spacing.unit * 2,                
        fontSize: 13
    },
    avatar: {
        width: 60,
        height: 60,
        marginTop: 7.5,
        marginBottom: 7.5,
        marginLeft: 6
    },
    dialogHeader: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        margin: theme.spacing.unit,
        width: '60%',
        '& > span > a': {
            textDecoration: 'none'
        }
    },
    link: {
        textDecoration: 'none'
    }
});

function AccountDialog(props){    
    const { classes, handleClose, anchorEl, className } = props;
    return(
        <Popover                
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
        >                
            <div className={classes.dialogHeader}>
                <Avatar alt="John Doe" src="img/JohnDoe.jpg" className={classes.avatar} />
                <div>                    
                    <Typography className={classes.dialogHeadingText}>John Doe</Typography>                    
                    <Typography className={classes.dialogText}>jdoe2018@gmail.com</Typography>
                </div>
            </div>
            <Divider/>
            <center>
                <a href="/api/logout" className={classes.link}>
                    <Button variant="raised" className={classes.button}>                        
                        Log Out
                    </Button>
                </a>
            </center>
        </Popover>
    );

}

AccountDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func,
    anchorEl: PropTypes.object,
    className: PropTypes.string   
};

export default withStyles(styles, { name: 'AccountDialog', withTheme: true })(AccountDialog);