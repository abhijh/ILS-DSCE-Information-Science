import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SchemaService from './SchemaService.jsx'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';
import AutoComplete from 'material-ui/lib/auto-complete';
import MenuItem from 'material-ui/lib/menus/menu-item';



const style = {
  
  textAlign: 'center',
  display: 'inline-block',

};


var ReturnBookForm = React.createClass({
  submitForm: function (model) {
  SchemaService.returnBook(model);
  console.log("Model: ", model);
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  },
  handleClick(){
      var $booknum = $("#aNum");
      var $usn = $("#Usn");
      var data = {
          bookid : $booknum.val(),
          usnVal : $usn.val(),
      };
      $.ajax({
          type: "POST",
          url : "/return",
          data : data,
          success: function(dataval){}
      });
  },
  render: function() {
    return (
      <div className = "child" >
       <Paper style={style} zDepth={3} rounded={false} children={
          <card >
                <form onSubmit={this.submitForm}>
                    <CardHeader title="RETURN  BOOK"/><br/>
                      <CardText>
                         <TextField
                            hintText="Enter the USN:"
                            floatingLabelText = "Student USN"
                            id = "Usn"
                            required
                          /><br/>
                           <TextField
                            hintText="Enter the ID:"
                            floatingLabelText = "Accession number:"
                            required
                            id = "aNum"
                          /><br/><br/>
                      </CardText>
                    <RaisedButton  label="Return" secondary={true} onClick={this.handleClick} /><br/><br/>
                </form>
        </card>
      }/>
    </div>
    );
  }

});

module.exports = ReturnBookForm;
