import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch, withRouter} from 'react-router'
import {connect} from 'react-redux'
import App from './App'

const Routes = props =>
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>

export default Routes
