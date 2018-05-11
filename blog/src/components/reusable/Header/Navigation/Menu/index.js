import React from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "material-ui/Tooltip";

function Menu(props) {
  const { toggleSidebar } = props;

  return (
    <Tooltip id="tooltip-icon" title="Open Menu">
      <IconButton
        color="inherit"
        aria-label="Menu"
        onClick={toggleSidebar(true)}
      >
        <MenuIcon />
      </IconButton>
    </Tooltip>
  );
}

Menu.propTypes = {
  toggleSidebar: PropTypes.func
};

export default Menu;
