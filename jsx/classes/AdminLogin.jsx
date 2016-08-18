import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import {orange500, blue500,grey900,grey50} from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';

const style = {
    margin: 12,
};

var AdminLogin = React.createClass({

  render: function() {
    return (
      <div >
        <form method= "POST">
         <Card >
          <div>
            <CardTitle title="Enter the Authentication Key : " titleColor="black"  />
            <CardText>
              <TextField
                name = "Key"
                floatingLabelText="Key : "
              /><br/><br/>
             
              <RaisedButton
                type="submit"
               
                secondary = {true}
                className="button"
                label="Login"
              />
            </CardText><br/>
          </div>
         </Card>
        </form>
      </div>
    );
  }

});

module.exports = AdminLogin;
