 import React from 'react';
const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import SchemaService from './SchemaService.jsx'
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

var BorrowBookForm = React.createClass({
  getInitialState: function() {
    return {value: 'staff'};
  },
  submitForm: function (model) {
    SchemaService.borrowerRegister(model);
    console.log("Model: ", model);
  },
  handleChange: function(event, index, value){this.setState({value: event.target.value});},
  render: function() {
    return (
      <div>
        <h1>Register User</h1>
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
            floatingLabelText="Roles">
            <MenuItem value={'staff'} primaryText="Staff" />
            <MenuItem
              value={'student'}
              primaryText="Student" />
          </FormsySelect>
          <br/>
          <RaisedButton
            type="submit"
            label="Register"
            primary={true} />
        </Formsy.Form>
      </div>
    );
  }

});

module.exports = BorrowBookForm;
