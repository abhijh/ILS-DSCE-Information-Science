import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {Router, Route, IndexRoute, Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './MyTheme.jsx';

const MySampleAppComponent = React.createClass({

  //the key passed through context must be called "muiTheme"
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  },

  //the app bar and button will receive our theme through
  //context and style accordingly
  render () {
    return (
      <div>
        <Card>
          <CardText   className="cardStyle">
            <Link to="/issue">
              <RaisedButton className="buttonDesign" primary={true}>Issue</RaisedButton>
            </Link>
            <Link to="/returnbook">
              <RaisedButton className="buttonDesign">Return</RaisedButton>
            </Link>
            <Link to="/add">
              <RaisedButton className="buttonDesign">Add</RaisedButton>
            </Link>
            <Link to="/register">
              <RaisedButton className="buttonDesign">Register</RaisedButton>
            </Link>
          </CardText>
        </Card>
      </div>
    );
  },
});

export default MySampleAppComponent;
