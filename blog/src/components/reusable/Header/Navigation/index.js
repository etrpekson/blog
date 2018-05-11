import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Sidebar from '../../Sidebar';
import DropdownMenu from '../../DropdownMenu';

import Menu from './Menu';

const styles = theme => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'space-between',    
    },
});

function Navigation(props){
    const { classes, toggleSidebar, drawerOpen, handleThemes } = props;

    return(
        <div className={classnames(classes.root)}>
            <Menu toggleSidebar={toggleSidebar} />
            <Sidebar open={drawerOpen} toggleSidebar={toggleSidebar} />
            <Typography variant="title" color="inherit">
                breddit
            </Typography>
            <DropdownMenu handleThemes={handleThemes}/>
        </div>
    );
};

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func,
    drawerOpen: PropTypes.bool,
    handleThemes: PropTypes.func
};

export default withStyles(styles, { name: 'Navigation', withTheme: true })(Navigation);