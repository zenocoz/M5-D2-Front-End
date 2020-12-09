import React from "react"
import {Table, Button} from "react-bootstrap"

const StudentList = (props) => {
  const deleteStudent = async (id) => {
    try {
      let response = await fetch("http://localhost:3001/students/" + id, {
        method: "DELETE",
      })
      if (response.ok) {
        alert("student deleted")
      } else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateStudent = async (id) => {}
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>email</th>
          <th>Date of Birth</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.email}</td>
            <td>{student.dob}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => deleteStudent(student.ID)}
              >
                Delete
              </Button>
              <Button
                className="ml-3"
                variant="primary"
                onClick={() => updateStudent(student.ID)}
              >
                Update
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default StudentList
