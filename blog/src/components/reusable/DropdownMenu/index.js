import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';

import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import AccountDialog from '../AccountDialog';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 8
    },
    menuItem:{}        
});

class DropdownMenu extends PureComponent{
    state = {
        auth: true,
        anchorEl: null,
        accountDialogOpen: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleDialogOpen = (event) => {
        this.setState({ accountDialogOpen: event.currentTarget });
        console.log(typeof(this.state.accountDialogOpen));
    };

    handleDialogClose = () => {
        this.setState({ accountDialogOpen: null });
    };

    render(){
        const { classes, className, handleThemes } = this.props;
        const { auth, anchorEl, accountDialogOpen, vertical, horizontal } = this.state;
        const open = Boolean(anchorEl);
        return(
            <div className={classnames(classes.root, className)}>
                <Tooltip id="tooltip-icon" title="Account Details">
                    <IconButton                    
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"                    
                        color="inherit"
                        onClick={this.handleDialogOpen}
                    >
                        <AccountCircle/>
                    </IconButton>
                </Tooltip>
                <AccountDialog handleClose={this.handleDialogClose} anchorEl={this.state.accountDialogOpen} />
                

                <Tooltip id="tooltip-icon" title="Change Blog Theme">
                    <IconButton
                        className={classnames(classes.root, className)}
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <Settings/>
                    </IconButton>
                </Tooltip>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={handleThemes('professional')} className={classes.menuItem}>Professional</MenuItem>
                    <MenuItem onClick={handleThemes('dark')} className={classes.menuItem}>Dark</MenuItem>
                    <MenuItem onClick={handleThemes('retro')} className={classes.menuItem}>Retro</MenuItem>
                </Menu>
            </div>
        );
    }
}

DropdownMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,    
    handleThemes: PropTypes.func
};

DropdownMenu.defaultProps = {
    currentTheme: 'light'
};

export default withStyles(styles, {name: 'DropdownMenu'})(DropdownMenu);