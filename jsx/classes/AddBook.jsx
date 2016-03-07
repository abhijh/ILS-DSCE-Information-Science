import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SchemaService from './SchemaService.jsx'
import Snackbar from 'material-ui/lib/snackbar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';

var AddBookForm = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  },
  getInitialState: function(){
    return {open: false};
  },
  handleRequestClose: function(){
    this.setState({
      open: false,
    });
  },
  submitForm: function (model) {
    //var returnValue = SchemaService.bookRegister(model);
    //console.log(returnValue);
    $.ajax({
    type: "POST",
    url: '/api/registerbook/',
    data: JSON.stringify(model),
    success: function() {
          this.setState({open: true});
        }.bind(this),
    error: function(xhr, status, err) {
       console.error(status, err.toString());
     }.bind(this)

  });
  console.log("Model: ", model);
  },
  render: function() {
    return (
      <div>
        <h1>Add Book</h1>
        <Formsy.Form
          onValidSubmit={this.submitForm}>
          <FormsyText
            name="name"
            required
            floatingLabelText="Book Name"
            />
          <br/>
          <FormsyText
            name="accessionNumber"
            required
            floatingLabelText="Accession Number"
            />
          <br/>
          <FormsyText
            name="category"
            required
            floatingLabelText="Category"
            />
          <br/>
          <FormsyText
            name="author"
            required
            floatingLabelText="Author"
            />
          <br/>
          <FormsyText
            name="publication"
            required
            floatingLabelText="Publication"
            />
          <br/>
          <FormsyText
            name="edition"
            required
            floatingLabelText="Edition"
            />
          <br/>
          <RaisedButton
            type="submit"
            label="Add Book"
            secondary={true} />
        </Formsy.Form>
        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }

});

module.exports = AddBookForm;
