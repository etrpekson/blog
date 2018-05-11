import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";

import PageHeader from "../../../reusable/PageHeader";
import CommentsContent from "../../../reusable/CommentsContent";

import comments from "../../../../data/comments";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 10,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingBottom: 10,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "-webkit-fill-available"
  }
});

class LoggedInComments extends PureComponent {
  state = {
    commentList: comments,
    modalOpen: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleSubmit = (name, comment) => () => {
    const commentList = [
      {
        author: name,
        body: comment
      },
      ...this.state.commentList
    ];

    this.setState({ commentList: commentList });
    this.setState({ modalOpen: false });
    console.log(this.state.commentList);
  };

  render() {
    const { classes, className } = this.props;

    return (
      <div className={classnames(classes.root, className)}>
        <PageHeader
          title="Comments"
          buttonLabel="Write a Comment"
          contentToAdd="comment"
          handleSubmit={this.handleSubmit}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          modalOpen={this.state.modalOpen}
        />
        <CommentsContent commentList={this.state.commentList} />
      </div>
    );
  }
}

LoggedInComments.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles, {
  name: "LoggedInComments",
  withTheme: true
})(LoggedInComments);
