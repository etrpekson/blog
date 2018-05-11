import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import MediaGrid from './MediaGrid';

const styles = theme => ({
    root:{
        flexGrow: 1,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,        
        paddingBottom: 4,
        paddingTop: 7,
        display: 'flex',
        backgroundColor: theme.palette.background.default,
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },    
});

function MediaContent(props){
    const { classes, imageList } = props;
    return(
        <div className={classes.root}>
            <MediaGrid imageList={imageList}/>
        </div>
    );
};

MediaContent.propTypes = {
    classes: PropTypes.object.isRequired,
    imageList: PropTypes.array
};

export default withStyles(styles, { name: 'MediaContent', withTheme: true })(MediaContent);