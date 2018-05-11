import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import GridList, { GridListTile } from "material-ui/GridList";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    width: "75%"
  }
});

function MediaGrid(props) {
  const { classes, imageList } = props;
  console.log(imageList);
  let i = 0;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} cols={2}>
        {imageList.map(image => {
          let item = (
            <GridListTile key={i}>
              <img src={image.url} alt={image.alt} />
            </GridListTile>
          );
          i++;
          return item;
        })}
      </GridList>
    </div>
  );
}

MediaGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  imageList: PropTypes.array
};

export default withStyles(styles, { name: "MediaGrid", withTheme: true })(
  MediaGrid
);
