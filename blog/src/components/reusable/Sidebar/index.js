import React from "react";
import PropTypes from "prop-types";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import classnames from "classnames";
import { withStyles } from "material-ui/styles";

import { listItems } from "../List";

const styles = theme => ({
  sideList: {
    width: 250,
    "& h3, svg": {
      color: "#fff"
    }
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    "& svg": {
      color: "#fff"
    }
  }
});

function Sidebar(props) {
  const { classes, className, open, toggleSidebar } = props;

  const sidebarMenuList = (
    <div className={classnames(classes.sideList, className)}>
      <List>{listItems}</List>
    </div>
  );

  return (
    <Drawer open={open}>
      <div tabIndex={0} role="button" onClick={toggleSidebar(false)}>
        <div className={classnames(classes.sidebarHeader, className)}>
          <IconButton onClick={toggleSidebar(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {sidebarMenuList}
      </div>
    </Drawer>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
  toggleSidebar: PropTypes.func
};

export default withStyles(styles, { name: "Sidebar", withTheme: true })(
  Sidebar
);
