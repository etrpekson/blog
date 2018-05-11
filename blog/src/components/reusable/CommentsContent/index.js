import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import CommentContainer from './CommentContainer';

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

function CommentsContent(props){
    const { classes, commentList } = props;

    return(
        <div className={classnames(classes.root)}>
            <CommentContainer commentList={commentList}/>
        </div>
    );
}

CommentsContent.propTypes = {
    classes: PropTypes.object.isRequired,
    commentList: PropTypes.array
};

export default withStyles(styles, { name: 'CommentsContent', withTheme: true })(CommentsContent);