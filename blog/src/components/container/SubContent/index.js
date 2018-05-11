import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,        
        paddingTop: 10,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '-webkit-fill-available'
    },
});

function Subcontent(props){
    const { classes, children, className } = props;

    return(
        <div className={classnames(classes.root, className)}>
            {children}
        </div>
    );
};

Subcontent.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};

export default withStyles(styles, { name: 'Subcontent', withTheme: true })(Subcontent);