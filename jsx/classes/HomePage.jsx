import React from'react';
import RaisedButton from 'material-ui/lib/raised-button';
import {Router, Route, IndexRoute, Link} from 'react-router';




var HomePage = React.createClass({
  _handleClick(e) {
    e.preventDefault();
    this.refs.sidebar.handleToggle();
  },
  render: function() {
    return (
        <div className="homepage">
          <br/>
          <br/>
          <img src="../../public/images/banner-dayananda-sagar-college-of0engineering.jpg"/>
          <br/>
          <h1 id="homePageHeader"> Library Management System</h1>
          <h3 id="homePageHeader">This is Library Management System designed to facilitate the wroking
            of in department libray of Information Science Department</h3>
          <br/>
          <br/>
          {this.props.children}
          <br/>
          <br/>
        </div>
    );
  }

});


module.exports = HomePage;
