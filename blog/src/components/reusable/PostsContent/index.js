import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import PostGrid from './PostGrid';

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

function PostContent(props){
    const { classes, postList } = props;

    return(
        <div className={classes.root}>
            <PostGrid postList={postList} />
        </div>
    );
}

PostContent.propTypes = {
    classes: PropTypes.object.isRequired,
    postList: PropTypes.array
};

export default withStyles(styles, { name: 'PostContent', withTheme: true })(PostContent);