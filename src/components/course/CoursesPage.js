import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import {Link} from 'react-router-dom'

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
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    )
  }

  render() {
    debugger
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

function MapStateToProps(state, ownProps) {
  debugger
  return {courses: state.courses}
}

export default connect(MapStateToProps)(CoursesPage)
