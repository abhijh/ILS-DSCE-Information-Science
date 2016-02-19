import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

var ReturnBookForm = React.createClass({
  submitForm: function (model) {
  // Submit your validated form
  console.log("Model: ", model);
  },
  render: function() {
    return (
      <div>
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
        <RaisedButton type="submit" label="Issue" primary={true} />
        </Formsy.Form>
      </div>
    );
  }

});

module.exports = ReturnBookForm;
