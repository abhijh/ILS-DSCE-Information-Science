import React from 'react';
import Menu from 'material-ui/lib/menus/menu';
import {Router, Route, IndexRoute, Link} from 'react-router';
import MenuItem from 'material-ui/lib/menus/menu-item';

const style = {
  width: 300,
 
  zIndex: 0,
};

const InnerStyle = {
  padding : 10,
};

var AdminMenu = React.createClass({
 
  
  render: function() {
    return (
      <div className = "menu child" >
        <Menu style={style}>
        <br/><br/>
          <Link to="issue"><MenuItem primaryText="Borrowed Books" /></Link>
          <br/>
          
          <br/>
        </Menu>
      </div>
    );
  }

});

module.exports = AdminMenu;
