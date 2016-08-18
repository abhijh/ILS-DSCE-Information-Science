import React from 'react';
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
        <br/><br/>
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
