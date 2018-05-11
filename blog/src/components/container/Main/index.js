import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ContentContainer from "../Content";
import DashboardContainer from "../Dashboard";
import MediaContainer from "../Media";
import PostsContainer from "../Posts";
import CommentsContainer from "../Comments";
import Error404 from "../Error404";

import Header from "../../reusable/Header";
import Footer from "../../reusable/Footer";

const styles = theme => {
  return {
    root: {
      width: "-webkit-fill-available",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    },
    footerContent: {
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 14
    }
  };
};
class Container extends PureComponent {
  state = {
    drawerOpen: false
  };

  toggleSidebar = open => () => {
    this.setState({ drawerOpen: open });
  };

  render() {
    const { classes, handleThemes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          {/*Header*/}
          <Header
            position="static"
            toggleSidebar={this.toggleSidebar}
            drawerOpen={this.state.drawerOpen}
            handleThemes={handleThemes}
          />

          <ContentContainer>
            <Switch>
              <Route exact={true} path="/" component={DashboardContainer} />
              <Route exact={true} path="/posts" component={PostsContainer} />
              <Route exact={true} path="/media" component={MediaContainer} />
              <Route
                exact={true}
                path="/comments"
                component={CommentsContainer}
              />
              <Route path="*" component={Error404} />
            </Switch>
          </ContentContainer>

          {/*Footer*/}
          <Footer position="static">
            <Typography
              variant="title"
              color="inherit"
              className={classes.footerContent}
            >
              © 2018 Elijah Pekson
            </Typography>

            <Typography
              variant="title"
              color="inherit"
              className={classes.footerContent}
            >
              Components by MUI
            </Typography>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  currentTheme: PropTypes.string.isRequired,
  handleThemes: PropTypes.func
};

Container.defaultProps = {
  currentTheme: "light"
};

export default withStyles(styles, { name: "Container", withTheme: true })(
  Container
);
