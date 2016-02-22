import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {Router, Route, IndexRoute, Link} from 'react-router';
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';

var Sidebar = React.createClass({
  getInitialState(props) {
    return {open: false};
  },
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  },
  handleChange(data, event) {
    if (event === 'clickaway' || event === 'escape')
    this.setState({open: false});
  }
  ,
  render() {
    return (
      <div>
        <LeftNav
          open={this.state.open}
          docked={false}
          onRequestChange={this.handleChange}>
          <AppBar
            title="Menu"/>
          <Link to="/issue" onTouchTap={this.handleToggle}>
            <MenuItem>
              Issue Form
            </MenuItem>
          </Link>
          <br/>
          <Link to="/returnbook">
            <MenuItem onTouchTap={this.handleToggle}>
              Return Book
            </MenuItem>
          </Link>
          <br/>
          <Link to="/add">
            <MenuItem onTouchTap={this.handleToggle}>
              Add Book
            </MenuItem>
          </Link>
          <br/>
          <Link to="/register">
          <MenuItem onTouchTap={this.handleToggle}>
              Register User
          </MenuItem>
          </Link>
          <br/>
        </LeftNav>
      </div>
    );
  }
});

const Layout = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  },
  _handleClick(e) {
    e.preventDefault();
    this.refs.sidebar.handleToggle();
  },
  render() {
    return <div className="page">
      <AppBar
        title="Library System - Department Of Information Science "
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this._handleClick}/>
      <div className="main-container">
        {this.props.children}
      </div>
      <Sidebar ref="sidebar"/>
    </div>;
  }
});

export default Layout;
