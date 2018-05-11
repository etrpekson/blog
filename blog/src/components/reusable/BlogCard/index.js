import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, { CardMedia, CardContent, CardActions } from "material-ui/Card";
import Button from "material-ui/Button";
import Collapse from "material-ui/transitions/Collapse";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "material-ui/Grid";
import Tooltip from "material-ui/Tooltip";

import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    maxWidth: 400,
    maxHeight: 380,
    minWidth: "max-content",
    margin: theme.spacing.unit * 2
  },
  cardContent: {
    padding: "10px 12px 2px 10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  actions: {
    display: "flex",
    paddingTop: 0
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  cardHeader: {},
  cardSummary: {},
  cardBtn: {},
  bodyText: {}
});

class BlogCard extends PureComponent {
  render() {
    const {
      classes,
      imgUrl,
      header,
      summary,
      bodyText,
      btnText,
      link,
      expands,
      className,
      handleExpand,
      expanded
    } = this.props;

    let buttonLink = <div />;
    let expandBtn = <div />;
    let body = <div />;

    if (btnText !== undefined && link !== undefined) {
      buttonLink = (
        <Link to={link} style={{ textDecoration: "none", color: "white" }}>
          <Button
            color="primary"
            className={classnames(classes.cardBtn, className)}
          >
            {btnText}
          </Button>
        </Link>
      );
    }

    if (expands) {
      expandBtn = (
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpand}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      );
      body = (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              paragraph
              className={classnames(classes.bodyText, className)}
            >
              {bodyText}
            </Typography>
          </CardContent>
        </Collapse>
      );
    }

    return (
      <Card className={classnames(classes.card, className)}>
        <CardMedia
          className={classnames(classes.media, className)}
          image={imgUrl}
        />

        <CardContent className={classes.cardContent}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item xs zeroMinWidth>
              <Tooltip id="tooltip-icon" title={header}>
                <Typography
                  noWrap
                  gutterBottom
                  variant="headline"
                  component="h2"
                  className={classnames(classes.cardHeader, className)}
                >
                  {header}
                </Typography>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item xs zeroMinWidth>
              <Typography
                noWrap
                gutterBottom
                component="p"
                className={classnames(classes.cardSummary, className)}
              >
                {summary}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
          {buttonLink}
          {expandBtn}
        </CardActions>
        {body}
      </Card>
    );
  }
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  imgUrl: PropTypes.string,
  header: PropTypes.string,
  summary: PropTypes.string,
  bodyText: PropTypes.string,
  btnText: PropTypes.string,
  link: PropTypes.string,
  expands: PropTypes.bool,
  className: PropTypes.string,
  handleExpand: PropTypes.func,
  expanded: PropTypes.bool
};

BlogCard.defaultProps = {
  expands: false
};

export default withStyles(styles, { name: "BlogCard", withTheme: true })(
  BlogCard
);
