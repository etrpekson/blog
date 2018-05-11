import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";

import PageHeader from "../../../reusable/PageHeader";
import MediaContent from "../../../reusable/MediaContent";
import images from "../../../../data/images";

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

class LoggedInMedia extends PureComponent {
  state = {
    imageList: images
  };

  render() {
    const { classes, className } = this.props;
    return (
      <div className={classnames(classes.root, className)}>
        <PageHeader
          title="Media"
          buttonLabel="Upload a new Image"
          contentToAdd="image"
        />
        <MediaContent imageList={this.state.imageList} />
      </div>
    );
  }
}

LoggedInMedia.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles, { name: "LoggedInMedia", withTheme: true })(
  LoggedInMedia
);
