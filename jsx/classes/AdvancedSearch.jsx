import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/SelectField';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';


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
        <br/>
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Book Name" />
          <MenuItem value={2} primaryText="Author" />
          <MenuItem value={3} primaryText="Publication" />
          <MenuItem value={4} primaryText="Category" />
        </SelectField><br/><br/>
        <Link to="search">
        <RaisedButton
           label="Search"
            style = {styles}
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
