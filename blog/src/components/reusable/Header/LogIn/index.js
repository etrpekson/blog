import React from "react";
import PropTypes from "prop-types";
import Typography from "material-ui/Typography";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";

import ThemeChanger from "./ThemeChanger";

const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    justifyContent: "space-between"
  },
  brandName: {
    marginLeft: 12
  }
});

function LogIn(props) {
  const { classes, handleThemes } = props;

  return (
    <div className={classnames(classes.root)}>
      <Typography variant="title" color="inherit" className={classes.brandName}>
        breddit
      </Typography>

      <ThemeChanger handleThemes={handleThemes} />
    </div>
  );
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
  handleThemes: PropTypes.func
};

export default withStyles(styles, { name: "LogIn", withTheme: true })(LogIn);
