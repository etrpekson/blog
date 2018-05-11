import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Settings from '@material-ui/icons/Settings';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 8
    },
    menuItem:{}        
});

class ThemeChanger extends PureComponent{
    state = {
        auth: true,
        anchorEl: null,      
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes, className, handleThemes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <div className={classnames(classes.root, className)}>
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
};

ThemeChanger.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    handleThemes: PropTypes.func
};

export default withStyles(styles, { name: 'ThemeChanger', withTheme: true })(ThemeChanger);