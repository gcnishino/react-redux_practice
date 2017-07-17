import React, {Component} from 'react'
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
    alert(`Saving ${this.state.course.title}`)
  }

  render() {
    return (
      <div className="CoursesPage">
        <h1>Courses</h1>
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

export default CoursesPage
