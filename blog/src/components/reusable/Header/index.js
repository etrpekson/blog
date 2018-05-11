import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";

import Navigation from "./Navigation";
import LogIn from "./LogIn";

import { connect } from "react-redux";

const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    justifyContent: "space-between"
  }
});

class Header extends PureComponent {
  renderContent(handleThemes, drawerOpen, toggleSidebar) {
    console.log(`auth: ${this.props.auth}`);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <LogIn handleThemes={handleThemes} />;
      default:
        return (
          <Navigation
            toggleSidebar={toggleSidebar}
            drawerOpen={drawerOpen}
            handleThemes={handleThemes}
          />
        );
    }
  }

  render() {
    const {
      classes,
      toggleSidebar,
      drawerOpen,
      className,
      handleThemes,
      ...other
    } = this.props;
    return (
      <AppBar {...other} className={classnames(classes.root, className)}>
        {this.renderContent(handleThemes, drawerOpen, toggleSidebar)}
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  toggleSidebar: PropTypes.func,
  drawerOpen: PropTypes.bool,
  handleThemes: PropTypes.func
};

function mapStateToProps({ auth }) {
  return { auth };
}

//export default withStyles(styles, { name: 'Header' })(connect(mapStateToProps)(Header));
export default connect(mapStateToProps)(
  withStyles(styles, { name: "Header", withTheme: true })(Header)
);
