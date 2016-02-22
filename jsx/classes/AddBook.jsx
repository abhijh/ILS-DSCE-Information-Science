import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SchemaService from './SchemaService.jsx'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';

var AddBookForm = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  },
  submitForm: function (model) {
    SchemaService.bookRegister(model);
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
      </div>
    );
  }

});

module.exports = AddBookForm;
