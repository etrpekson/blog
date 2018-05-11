import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography'
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import PageHeader from '../../../reusable/PageHeader';
import PostContent from '../../../reusable/PostsContent';
import posts from '../../../../data/posts';

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

class LoggedInPosts extends PureComponent{
    state = {
        postList: posts,
        modalOpen: false
    };

    handleOpen = () => {
        this.setState({ modalOpen: true });
    };    

    handleClose = () => {
        this.setState({ modalOpen: false });
    };    

    handleSubmit = (title, author, body) => () => {
        const postList = [
            {
                imgUrl: 'img/defaultPhoto.jpg',
                title: title,
                author: author,
                body: body
            },
            ...this.state.postList
        ];

        this.setState({ postList: postList });
        this.setState({ modalOpen: false })
        console.log(this.state.postList);
    };

    render(){
        const { classes, className, ...other } = this.props;
        return(
            <div className={classnames(classes.root, className)}>
                <PageHeader 
                    title="Blog Posts" 
                    buttonLabel="Write a new Blog" 
                    contentToAdd="post"
                    handleSubmit={this.handleSubmit}
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                    modalOpen={this.state.modalOpen}
                />
                <PostContent postList={this.state.postList} />
            </div>
        );
    }
}

LoggedInPosts.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles, { name: 'LoggedInPosts', withTheme: true })(LoggedInPosts);