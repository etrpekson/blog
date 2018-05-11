import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import BlogCard from '../BlogCard';

const styles = theme => ({
    root:{
        flexGrow: 1,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,        
        paddingBottom: 4,
        paddingTop: 7,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: 'center'
    },        
});

class DashboardContentTop extends PureComponent{
    state = {
        cardExpanded: false
    };

    handleCardExpand = () => {
        this.setState({ cardExpanded: !this.state.cardExpanded });
    };

    render(){
        const { classes, className } = this.props;

        return(
            <div className={classnames(classes.root, className)}>
                <BlogCard 
                    imgUrl="img/blogHeader.jpg"
                    header="Blog Posts"
                    summary="Check out all the blog posts written by your users"
                    link="/posts"
                    btnText="View All Posts"  
                    isPost={true}                  
                />   

                <BlogCard 
                    imgUrl="img/imageHeader.jpg"
                    header="Images"
                    summary="View images taken from all kinds of great events"
                    link="/media"
                    btnText="View All Images"   
                    isPost={true}                 
                />

                <BlogCard 
                    imgUrl="img/commentHeader.jpg"
                    header="Comments"
                    summary="Review all the post comments from your readers"
                    link="/comments"
                    btnText="View Comments"
                    isPost={true}              
                />              
            </div>
        );
    }
};

DashboardContentTop.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles, { name: 'DashboardContentTop', withTheme: true })(DashboardContentTop);