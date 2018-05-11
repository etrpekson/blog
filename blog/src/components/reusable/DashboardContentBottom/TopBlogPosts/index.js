import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import BlogCard from '../../BlogCard';

const styles = theme => ({
    contentDiv:{
        flexGrow: 1,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,        
        paddingTop: 0,
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'row',        
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: 'center',        
        marginBottom: 6.5,                
    },      
    panelCard: {
        maxWidth: 300,
        maxHeight: 380,
        margin: 10
    }
});

function TopBlogPosts(props){
    const { classes, className } = props;

    return(
        <div className={classnames(classes.contentDiv, className)}>
            {/* <Grid container noWrap> */}
                {/* <Grid item s>   */}
                    <BlogCard 
                        className={classnames(classes.panelCard, className)}
                        imgUrl="img/post1.jpg"
                        header="We miss the Old Kanye"
                        summary="Kanye West's Music Banned by Detroit Radio Station."
                        link="#"
                        btnText="Read Full Blog"                        
                    />   
                {/* </Grid> */}
                {/* <Grid item>   */}
                    <BlogCard 
                        className={classnames(classes.panelCard, className)}
                        imgUrl="img/post2.jpg"
                        header="How Music helps the Heart find its Beat"
                        summary='"Music can pierce the heart directly; it needs no mediation"'
                        link="#"
                        btnText="Read Full Blog"                        
                    />   
                {/* </Grid>
                <Grid item>   */}
                    <BlogCard 
                        className={classnames(classes.panelCard, className)}
                        imgUrl="img/post3.jpg"
                        header="Paramore on the meaning of ‘Rose-Colored Boy’"
                        summary="‘There is no shame in sadness and depression’"
                        link="#"
                        btnText="Read Full Blog"                        
                    />
                {/* </Grid>
            </Grid> */}
        </div>
    );
};

TopBlogPosts.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles, {name: 'TopBlogPosts', withTheme: true})(TopBlogPosts);

