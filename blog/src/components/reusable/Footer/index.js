import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";

import BottomNavigation from "material-ui/BottomNavigation";

const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    left: 0,
    bottom: 0,
    marginTop: 0
  }
});

function Footer(props) {
  const { classes, children, className, ...other } = props;
  return (
    <BottomNavigation
      {...other}
      className={classnames(classes.root, className)}
      showLabels
    >
      {children}
    </BottomNavigation>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles, { name: "Footer", withTheme: true })(Footer);
