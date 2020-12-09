import React from "react"
import FormStudent from "./components/FormStudent"
import StudentList from "./components/StudentList"
import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"
import {Container, Row, Col} from "react-bootstrap"

class App extends React.Component {
  state = {
    students: [],
  }

  getStudentsArray = (students) => {
    this.setState({students: students})
    console.log(students)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <FormStudent getStudentsArray={this.getStudentsArray} />

            {this.state.students.length > 0 && (
              <StudentList students={this.state.students} />
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
