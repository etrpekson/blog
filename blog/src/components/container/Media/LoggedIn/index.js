import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography'
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import PageHeader from '../../../reusable/PageHeader';

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

function LoggedInMedia(props){
    const { classes, className, ...other } = props;
    return(
        <div className={classnames(classes.root, className)}>
            <PageHeader title="Media" buttonLabel="Upload a new Image" contentToAdd="image"/>            
        </div>
    );
}

LoggedInMedia.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles, { name: 'LoggedInMedia', withTheme: true })(LoggedInMedia);