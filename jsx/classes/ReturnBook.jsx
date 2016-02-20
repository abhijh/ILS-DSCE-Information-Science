import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SchemaService from './SchemaService.jsx'

var ReturnBookForm = React.createClass({
  submitForm: function (model) {
  SchemaService.returnBook(model);
  console.log("Model: ", model);
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
        <RaisedButton type="submit" label="Return" primary={true} />
        </Formsy.Form>
      </div>
    );
  }

});

module.exports = ReturnBookForm;
