import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Panel from '../ExpansionPanel';
import BlogCard from '../BlogCard';

import TopCommenters from './TopCommenters';
import TopBlogPosts from './TopBlogPosts';

const styles = theme => ({
    contentDiv:{
        flexGrow: 1,        
        paddingTop: 0,
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: 'center',                            
    },
    
});

function DashboardContentBottom(props){
    const { classes, className } = props;

    return(
        <div className={classnames(classes.contentDiv, className)}>
            <Panel
                title="Top Blog Posts"
                summary="Your Top 3 Blog Posts for this Week"
            >
                <TopBlogPosts />
            </Panel>
            <Panel
                title="Top 10 Commenters"
                summary="Your Top 10 Readers who Comment on your Posts"
            >
                <TopCommenters />
            </Panel>
        </div>
    );
};

DashboardContentBottom.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles, { name: 'DashboardContentBottom', withTheme: true })(DashboardContentBottom);

