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

import Tablevalues from "./Tablevalues.jsx";

var SearchBook = React.createClass({
  getInitialState: function(props){
    return {
      Book : []
    }
  },
  loadData : function (){
    $.ajax({
      type:"GET",
      url:"/searchresult",
      success:function(data){
        this.setState({Book:data});
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadData();
    
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
          
        </Table>   
        <Tablevalues tableValues = {this.state.Book}/> 
      </div>
    );
  }

});

module.exports = SearchBook;
