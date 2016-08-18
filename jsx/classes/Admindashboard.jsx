import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {Router, Route, IndexRoute, Link} from 'react-router';
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';
import Card from 'material-ui/lib/card/card';
import FlatButton from 'material-ui/lib/flat-button';
import AutoComplete from 'material-ui/lib/auto-complete';
import RaisedButton from 'material-ui/lib/raised-button';
import {orange500, blue500,grey900,grey50} from 'material-ui/lib/styles/colors';



const styles = {
  backgroundColor : grey50
};

const styles1 ={
  color : grey900
};

const Layout = React.createClass({
  getInitialState(props) {
    return { books : []};
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  componentDidMount(){
    $.ajax({
      type:"GET",
      url:"/getbooknames/",
      success: function(data){
        
        this.setState({books : data});
        }.bind(this)
    });
   
  },
  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  },
  _handleClick(e) {
    e.preventDefault();
    this.refs.sidebar.handleToggle();
  },
  handleClick() {
  
   
    var $searchVal = $("#search");
    var $table = $("#table");
    var data = {
      values : 1,
      searchValue : $searchVal.val(),
    };
    $.ajax({
      type: "POST",
      url : "/api/search/",
      data : data,
      success: function(dataval){
          
        }
    });
  
  },
  render() {
    return <div>
      <AppBar
      style = {styles}
        title="Library System - Department Of Information Science "
        titleStyle = {styles1}
        iconElementLeft={
            <div>
                <Link to="/Admindashboard">
            <FlatButton
                label="HOME"
                default={true}
                id="submit-button"
            /></Link><br/>
            <form action="/">
            <FlatButton
            label="Logout"
            type="submit"
            default={true}
            /></form>
            </div>
        }
        iconElementRight={
          <div>
          
          <AutoComplete
          floatingLabelText="Search a book you want"
          filter={AutoComplete.caseInsensitiveFilter}
          triggerUpdateOnFocus={true}
          dataSource={this.state.books}
          id="search"
          />
          <Link to="search">
          <FlatButton
           label="Search"
            default={true}
            id="submit-button"
            onClick = {this.handleClick}
            />
          </Link>
          <Link to="advancedsearch">
            <p>Advanced search</p>
          </Link>
          </div>
        }
        />
        <br/><br/>
      <div className="container">
        
        {this.props.children}
       
      </div>

      
    </div>;
  }
});

export default Layout;
