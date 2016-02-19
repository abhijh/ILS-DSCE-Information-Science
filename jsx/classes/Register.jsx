import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';

import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

var AddBookForm = React.createClass({
  getInitialState: function() {
    return {value: 'staff'};
  },
  submitForm: function (model) {
    // Submit your validated form
    console.log("Model: ", model);
  },
  handleChange: function(event, index, value){this.setState({value});},
  render: function() {
    return (
      <div>
        <Formsy.Form
          onValidSubmit={this.submitForm}>
          <FormsyText
            name="name"
            required
            floatingLabelText="Name"
            />
          <br/>
          <FormsyText
            name="id"
            required
            floatingLabelText="User ID"
            />
            <br/>
            <FormsySelect
            value={this.state.value}
            onChange={this.handleChange}
            name='roles'
            required
            floatingLabelText="Roles">
            <MenuItem value={'staff'} primaryText="Staff" />
            <MenuItem value={'student'} primaryText="Student" />
          </FormsySelect>
          <br/>
          <RaisedButton
            type="submit"
            label="Issue"
            primary={true} />
        </Formsy.Form>
      </div>
    );
  }

});

module.exports = AddBookForm;
