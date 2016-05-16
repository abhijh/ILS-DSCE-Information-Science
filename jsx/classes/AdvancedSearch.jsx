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
import SelectField from 'material-ui/lib/SelectField';
import TextField from 'material-ui/lib/TextField';
import FlatButton from 'material-ui/lib/flat-button';


const styles = {
  customWidth: {
    width: 150,
  },
};


var AdvancedSearch = React.createClass({
  getInitialState(props) {
    return {value: 1};
  },
  handleChange :function(event, index, value) {
    this.setState({value});
  },
  handleClick :function() {
    var $searchval = $("#serchvalue");
    var data = {
      values : this.state.value ,
      searchValue : $searchval.val(),
    };
    $.ajax({
      type: "POST",
      url : "/api/search/",
      data : data,
      success: function(dataval){
          
        }
    });
  
  },
  render: function() {

    return (
      <div >
        <TextField
          hintText="enter the value"
          floatingLabelText="Search By :"
          floatingLabelFixed={true}
          id="serchvalue"
        />
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Book Name" />
          <MenuItem value={2} primaryText="Author" />
          <MenuItem value={3} primaryText="Publication" />
          <MenuItem value={4} primaryText="Category" />
        </SelectField><br/><br/>
        <Link to="search">
        <FlatButton
           label="Search"
            secondary={true}
            type="submit" 
            id="submit-button"
            onClick = {this.handleClick}
            />
        </Link>
      </div>
    );
  }

});

module.exports = AdvancedSearch;
