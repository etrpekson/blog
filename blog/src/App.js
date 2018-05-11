import React, { Component } from 'react';

import Main from './components/container/Main';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import professionalTheme from './themes/professional';
import darkTheme from './themes/dark';
import retroTheme from './themes/retro';

import {connect} from 'react-redux';
import * as actions from './actions';

class App extends Component {

  state = {
    currentTheme: 'light',
    theme: professionalTheme,
  };

  componentDidMount(){
    this.props.fetchUser();
  }

  changeTheme = (theme) => () => {    
    switch (theme) {
      case 'dark':
        this.setState({ theme: darkTheme }); break;
      case 'professional':
        this.setState({ theme: professionalTheme }); break;
      case 'retro':
        this.setState({ theme: retroTheme }); break;
      default: this.setState({ theme: professionalTheme });
    }
    this.setState({ currentTheme: theme });
  };

  render() {
    const { theme } = this.state;    
    
    const THEME = createMuiTheme(theme);
    return (
      <MuiThemeProvider theme={THEME}>
        <Main handleThemes={this.changeTheme} currentTheme={this.state.currentTheme.toString()} />
      </MuiThemeProvider>
    );
  }
}

export default connect(null, actions)(App);
