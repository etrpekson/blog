import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";

import SubContent from "../SubContent";
import LoggedInDashboard from "./LoggedIn";
import GuestDashboard from "./Guest";

class DashboardContainer extends PureComponent {
  renderContent() {
    console.log(`auth: ${this.props.auth}`);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <GuestDashboard />;
      default:
        return <LoggedInDashboard />;
    }
  }

  render() {
    return <SubContent>{this.renderContent()}</SubContent>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(
  withStyles({ name: "DashboardContainer", withTheme: true })(
    DashboardContainer
  )
);
