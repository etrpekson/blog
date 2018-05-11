import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import posts from '../../../../data/posts';

const styles = theme => ({
    postGrid: {
        display: 'flex',        
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        width: '75%'
    },
    gridList: {
        width: 500,
        height: 450,
    },    
    button: {
        margin: theme.spacing.unit,
    },
    tileBar: {}
});

function PostGrid(props){
    const { classes, postList } = props;

    return(
        <div className={classes.postGrid}>
            <GridList cellHeight={180} cols={2}>
                {postList.map(post => (
                    <GridListTile key={post.imgUrl} className={classes.gridList}>
                        <img src={post.imgUrl} alt={post.title} />
                        <GridListTileBar 
                            className={classes.tileBar}
                            title={post.title}
                            subtitle={<span> by: {post.author} </span>}
                            actionIcon={                                
                                <Button className={classes.button}>
                                    Read More
                                </Button>                                
                            }                            
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

PostGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    postList: PropTypes.array
}

export default withStyles(styles, { name: 'PostGrid', withTheme: true })(PostGrid);
  