import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import PropTypes from 'prop-types'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  state = {
    course: {title: ''},
  }

  onTitleChange(event) {
    this.state.course.title = event.target.value
    this.setState(prevState => ({course: this.state.course}))
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course)
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    )
  }

  render() {
    return (
      <div className="CoursesPage">
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

function MapStateToProps(state, ownProps) {
  return {courses: state.courses}
}

function MapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(courseActions, dispatch)}
}

export default connect(MapStateToProps, MapDispatchToProps)(CoursesPage)
