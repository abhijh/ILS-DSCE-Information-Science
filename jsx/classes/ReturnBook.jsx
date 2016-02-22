import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SchemaService from './SchemaService.jsx'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';

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
  render: function() {
    return (
      <div>
        <h1>Return Book</h1>
        <Formsy.Form
          onValidSubmit={this.submitForm}>
        <FormsyText
           name="accessionNumber"
           required
           floatingLabelText="Accession Number"
         />
       <br/>
         <FormsyText
            name="bid"
            required
            floatingLabelText="Book ID"
          />
        <br/>
        <RaisedButton type="submit" label="Return" secondary={true} />
        </Formsy.Form>
      </div>
    );
  }

});

module.exports = ReturnBookForm;
