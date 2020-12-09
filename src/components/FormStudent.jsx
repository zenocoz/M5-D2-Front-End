import React, { Component } from "react"
import { Container, Form, Row, Col, Button, Modal } from "react-bootstrap"

export default class FormStudent extends Component {
  state = {
    student: {},
    showModal: false,
  }

  handleChange = (e) => {
    this.setState({
      student: {
        ...this.state.student,
        [e.target.id]: e.target.value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addStudent()
  }
  getStudents = async () => {
    try {
      let response = await fetch("http://localhost:3001/students")
      if (response.ok) {
        let students = await response.json()
        console.log(students)
        this.props.getStudentsArray(students)
      } else {
        console.log("Something went wrong")
      }
    } catch (error) {
      //   console.log(error)
    }
  }

  addStudent = async () => {
    try {
      const response = await fetch("http://localhost:3001/students", {
        method: "POST",
        body: JSON.stringify(this.state.student),
        headers: new Headers({ "Content-Type": "application/json" }),
      })
      if (response.ok) {
        alert("student submitted correctly")
        let success = await response.json()
        console.log(success)
        this.setState({ student: {} })
      } else {
        alert("something went wrong")
      }
    } catch (error) {}
  }

  componentDidMount = () => {
    this.getStudents()
  }

  render() {
    return (
      <Container>
        <h1>STUDENTS MANAGER</h1>
        <Row>
          <Col>
            {this.state.showModal && (
              <>
                <Button variant="primary">Launch demo modal</Button>

                <Modal>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button>Close</Button>
                    <Button>Save Changes</Button>
                  </Modal.Footer>
                </Modal>
              </>
            )}

            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter name"
                  value={this.state.student.name}
                  onChange={(e) => this.handleChange(e)}
                  id="name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter surname"
                  value={this.state.student.surname}
                  onChange={(e) => this.handleChange(e)}
                  id="surname"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter email"
                  value={this.state.student.email}
                  onChange={(e) => this.handleChange(e)}
                  id="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter date of birth"
                  value={this.state.student.dob}
                  onChange={(e) => this.handleChange(e)}
                  id="dob"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
