import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingTop: 13,
        height: '100%',
        display: 'flex',        
    },
});

function ContentContainer(props){    
    const { classes, children, className, ...other } = props;
    return(
        <div {...other} className={classnames(classes.root, className)}>
            {children}
        </div>
    );    
};

ContentContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node
};

export default withStyles(styles, { name: 'ContentContainer', withTheme: true })(ContentContainer);