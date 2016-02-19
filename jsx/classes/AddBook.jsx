import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

var AddBookForm = React.createClass({
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
            name="name"
            required
            floatingLabelText="Book Name"
            />
          <br/>
          <FormsyText
            name="acessionName"
            required
            floatingLabelText="Accession Name"
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
            primary={true} />
        </Formsy.Form>
      </div>
    );
  }

});

module.exports = AddBookForm;
