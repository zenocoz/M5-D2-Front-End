import React from "react"
import FormStudent from "./components/FormStudent"
import StudentList from "./components/StudentList"
import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"
import { Container, Row, Col } from "react-bootstrap"

class App extends React.Component {
  state = {
    students: [],
    showModal: false,
    studentId: "",
  }

  getStudentsArray = (students) => {
    this.setState({ students: students })
    console.log(students)
  }

  handleModal = (id) => {
    this.setState({ showModal: true })
    this.setState({ studentId: id })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <FormStudent
              getStudentsArray={this.getStudentsArray}
              showModal={this.state.showModal}
            />

            {this.state.students.length > 0 && (
              <StudentList
                students={this.state.students}
                handleModal={this.handleModal}
              />
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
