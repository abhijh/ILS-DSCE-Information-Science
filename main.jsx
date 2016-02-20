import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import Login from './jsx/classes/Login.jsx'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route, IndexRoute, Link} from 'react-router';
import Card from 'material-ui/lib/card/card';
import IssueForm from './jsx/classes/Issue.jsx'
import ReturnBookForm from './jsx/classes/ReturnBook.jsx'
import AddBookForm from './jsx/classes/AddBook.jsx'
import RegisterBorrower from './jsx/classes/Register.jsx'
import { browserHistory } from 'react-router'
import Paper from 'material-ui/lib/paper';



ReactDOM.render((<div>
<AppBar title="Library System - Department Of Information Science " /></div>),
  document.getElementById('header'));

ReactDOM.render((
  <div>
    <br/>
    <br/>
    <br/>
    <Card>
      <Router history={browserHistory}>
        <Route name="login" path="/" component={IssueForm}/>
        <Route name="issue" path="/issue" component={IssueForm}/>
        <Route name="returnbook" path="/returnbook" component={ReturnBookForm}/>
        <Route name="add" path="/add" component={AddBookForm}/>
        <Route name="register" path="/register" component={RegisterBorrower}/>
      </Router>
    </Card>
  </div>
),
document.getElementById('leftPanel'));
ReactDOM.render((
  <div>
    <br/>
    <br/>
    <br/>
    <Card>
      <Router history={browserHistory}>
        <Route name="login" path="/" component={Login}/>
        <Route name="issue" path="/issue" component={Login}/>
        <Route name="returnbook" path="/returnbook" component={Login}/>
        <Route name="add" path="/add" component={Login}/>
        <Route name="register" path="/register" component={Login}/>
      </Router>
    </Card>
  </div>
),
document.getElementById('content'));
