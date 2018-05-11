import React from "react";
import PropTypes from "prop-types";
import GridList, { GridListTile, GridListTileBar } from "material-ui/GridList";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  postGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    width: "75%"
  },
  gridList: {
    width: 500,
    height: 450
  },
  button: {
    margin: theme.spacing.unit
  },
  tileBar: {}
});

function PostGrid(props) {
  const { classes, postList } = props;

  return (
    <div className={classes.postGrid}>
      <GridList cellHeight={180} cols={2}>
        {postList.map(post => (
          <GridListTile key={post.imgUrl} className={classes.gridList}>
            <img src={post.imgUrl} alt={post.title} />
            <GridListTileBar
              className={classes.tileBar}
              title={post.title}
              subtitle={<span> by: {post.author} </span>}
              actionIcon={<Button className={classes.button}>Read More</Button>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

PostGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  postList: PropTypes.array
};

export default withStyles(styles, { name: "PostGrid", withTheme: true })(
  PostGrid
);
