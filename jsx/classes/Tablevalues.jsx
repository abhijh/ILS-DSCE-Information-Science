import React from 'react';

import {Router, Route, IndexRoute, Link} from 'react-router';
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';
import Card from 'material-ui/lib/card/card';
import AutoComplete from 'material-ui/lib/auto-complete';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/lib/table';


var SearchBook = React.createClass({

  render: function() {
    var createitem = function(tableValues){
      return(
        <div>
        <Table>
        <TableBody>
        <TableRow>
      <TableRowColumn>{tableValues.name}</TableRowColumn>
      <TableRowColumn>{tableValues.accessionNumber}</TableRowColumn>
      <TableRowColumn>{tableValues.author}</TableRowColumn>
      <TableRowColumn>{tableValues.category}</TableRowColumn>
      <TableRowColumn>{tableValues.edition}</TableRowColumn>
      <TableRowColumn>{tableValues.publication}</TableRowColumn>
      </TableRow>
      </TableBody>
      </Table>
      </div>
      );
    };
    return (
      <div >
        
          {this.props.tableValues.map(createitem)}
        
      </div>
    );
  }

});

module.exports = SearchBook;
