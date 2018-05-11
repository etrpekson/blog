import React from "react";
import PropTypes from "prop-types";
import Typography from "material-ui/Typography";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";

import AddContentButton from "../AddContentButton";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "13%",
    marginRight: "13.5%"
  }
});

function PageHeader(props) {
  const {
    classes,
    title,
    buttonLabel,
    contentToAdd,
    handleSubmit,
    handleOpen,
    handleClose,
    modalOpen
  } = props;

  return (
    <div className={classnames(classes.root)}>
      <Typography variant="headline" component="h2">
        {title}
      </Typography>
      <AddContentButton
        label={buttonLabel}
        contentToAdd={contentToAdd}
        handleSubmit={handleSubmit}
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalOpen={modalOpen}
      />
    </div>
  );
}

PageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  contentToAdd: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  modalOpen: PropTypes.bool
};

export default withStyles(styles, { name: "PageHeader", withTheme: true })(
  PageHeader
);
