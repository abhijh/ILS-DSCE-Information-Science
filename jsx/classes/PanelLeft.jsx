import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {Router, Route, IndexRoute, Link} from 'react-router';
import LeftNav from 'material-ui/lib/left-nav'

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';
import Card from 'material-ui/lib/card/card';
import FlatButton from 'material-ui/lib/flat-button';
import AutoComplete from 'material-ui/lib/auto-complete';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';


// const styles  = {
 
//     backgroundColor : "rgb(96, 82, 69)",
  
// };


const Layout = React.createClass({
  
  getInitialState :function(props) {
    return {value: 3};
  },
 
  handleChange  : function(index, event , value) {
   
    this.setState({value});
  },
  
  render :function() {
    return (
      <div>
       <Toolbar >
        <ToolbarGroup firstChild={true}>
           
        </ToolbarGroup>
        <ToolbarGroup>
         
          <FontIcon className="muidocs-icon-custom-sort" />
  
          
        </ToolbarGroup>
      </Toolbar>
      </div>
      );
     
  }
});

export default Layout;
