import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";

import PageTitle from "../../reusable/PageTitle";
import SubContent from "../SubContent";
import LoggedInComments from "./LoggedIn";

class CommentsContainer extends PureComponent {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <PageTitle title="Error 401: You must log in to see this page!" />
        );
      default:
        return <LoggedInComments />;
    }
  }

  render() {
    return <SubContent>{this.renderContent()}</SubContent>;
  }
}

CommentsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(
  withStyles({ name: "CommentsContainer", withTheme: true })(CommentsContainer)
);
