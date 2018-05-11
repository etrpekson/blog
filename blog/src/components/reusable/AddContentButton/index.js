import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

import AddCommentModal from "./AddCommentModal";
import AddPostModal from "./AddPostModal";

const styles = theme => ({
  button: {}
});

class AddContentButton extends PureComponent {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      label,
      contentToAdd,
      handleSubmit,
      handleOpen,
      handleClose,
      modalOpen
    } = this.props;

    let toRender = (
      <Button className={classnames(classes.button)}>{label}</Button>
    );
    if (contentToAdd === "comment") {
      toRender = (
        <div>
          <Button className={classnames(classes.button)} onClick={handleOpen}>
            {label}
          </Button>
          <AddCommentModal
            open={modalOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    } else if (contentToAdd === "post") {
      toRender = (
        <div>
          <Button className={classnames(classes.button)} onClick={handleOpen}>
            {label}
          </Button>
          <AddPostModal
            open={modalOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    }

    return <div>{toRender}</div>;
  }
}

AddContentButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  contentToAdd: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  modalOpen: PropTypes.bool
};

export default withStyles(styles, {
  name: "AddContentButton",
  withTheme: true
})(AddContentButton);
