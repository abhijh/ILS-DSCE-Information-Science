import React from 'react';
const FMUI = require('formsy-material-ui');
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SchemaService from './SchemaService.jsx'
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';
import AutoComplete from 'material-ui/lib/auto-complete';




const style = {
  
  textAlign: 'center',
  display: 'inline-block',

};

var IssueForm = React.createClass({
    getInitialState(props) {
        return { books : []};
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
    submitForm: function (model) {
      SchemaService.issueBook(model);
      console.log("Model: ", model);
    },
    handleClick() {
        var $ibook = $("#issuebook");
        var $susn = $("#S_usn");
        var data = {
            bookname : $ibook.val(),
            usnissue : $susn.val(),
        };
        $.ajax({
            type: "POST",
            url : "/issue",
            data : data,
            success: function(dataval){}
        });
    },
    render: function() {
        return (
          <div className = "child">
           <Paper style={style} zDepth={3} rounded={false} children={
              <card >
                    <form onSubmit={this.submitForm}>
                        <CardHeader title="ISSUE FORM"/><br/>
                          <CardText>
                             <TextField
                                hintText="Enter the USN:"
                                floatingLabelText = "Student USN"
                                required
                                id="S_usn"
                              /><br/>
                              <AutoComplete
                                  floatingLabelText="Issue Book :"
                                  filter={AutoComplete.caseInsensitiveFilter}
                                  triggerUpdateOnFocus={true}
                                  dataSource={this.state.books}
                                  id="issuebook"
                              />
                               <br/><br/>

                          </CardText>
                        <RaisedButton  label="Issue" secondary={true} onClick={this.handleClick}/><br/><br/>
                    </form>
            </card>
          }/>
        </div>
        );
    }

});

module.exports = IssueForm;
