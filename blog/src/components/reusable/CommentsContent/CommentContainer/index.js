import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        width: '75%'
    },
    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 0,
    }),
    tile: {
        '& > div': {
            overflow: 'auto'
        }
    }
});

function CommentContainer(props){
    const { classes, commentList } = props;
    let i = 0;      

    return(
        <div className={classnames(classes.root)}>           
            <Grid container spacing={24}>
                {commentList.map(comment => {
                    let item = (
                        <Grid item xs={12} lg={6} md={6} className={classes.tile} key={i}>
                            <Paper className={classes.paper} elevation={4}>
                                <Typography variant="headline" component="h3">
                                    {commentList[i].author} said:
                                </Typography>
                                <Typography component="p">
                                    {commentList[i].body}
                                </Typography>
                            </Paper>  
                        </Grid>
                    );
                    i++;
                    return item;
                })}
            </Grid>
        </div>
    );
};

CommentContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    commentList: PropTypes.array
};

export default withStyles(styles, { name: 'CommentContainer', withTheme: true})(CommentContainer);