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
  getInitialState: function(props){
    return {
      Book : {}
    }
  },
  componentDidMount: function(){
    $.ajax({
      type:"GET",
      url:"/searchresult",
      success:function(data){
        
        this.setState({Book:data[0]});
        
      }.bind(this)
    });
  },
  render: function() {

    return (
      <div >
        <Table>
          <TableHeader>
            <TableRow>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Number</TableRowColumn>
              <TableRowColumn>Author</TableRowColumn>
              <TableRowColumn>Category</TableRowColumn>
              <TableRowColumn>Edition</TableRowColumn>
              <TableRowColumn>Publication</TableRowColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{this.state.Book.name}</TableRowColumn>
              <TableRowColumn>{this.state.Book.accessionNumber}</TableRowColumn>
              <TableRowColumn>{this.state.Book.author}</TableRowColumn>
              <TableRowColumn>{this.state.Book.category}</TableRowColumn>
              <TableRowColumn>{this.state.Book.edition}</TableRowColumn>
              <TableRowColumn>{this.state.Book.publication}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>    
      </div>
    );
  }

});

module.exports = SearchBook;
