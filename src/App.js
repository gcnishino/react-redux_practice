import * as React from 'react'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router'
import PropTypes from 'prop-types'
import Header from './components/common/Header'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import CoursesPage from './components/course/CoursesPage'

const App = props =>
  <div className="App">
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  </div>

export default App
