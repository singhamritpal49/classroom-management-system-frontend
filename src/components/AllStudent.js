import React, { Component } from 'react';
import Student from './Student'
import Display from './Display'

const studentAPI = "http://localhost:3000/classroom/students"

export class AllStudents extends Component {
    state = {
        allStudents: [],
        show: false,
        student: {}
    }

    componentDidMount() {
        fetch(studentAPI)
            .then(res => res.json())
            .then(data => this.setState({
                allStudents: data
            }))
    }

    handleShow = (newStudent) => {
        this.setState({ show: !this.state.show, student: newStudent })
    }




    render() {
        // {this.studentData()}

        const allstudents = this.state.allStudents.map(student => {
            return <Student
                student={student}
                key={student.id}
                eachStudent={this.handleShow}
            />
        })
        // console.log(this.state)
        return (
            <div>
                <h1> Students</h1>
                {allstudents}
                {this.state.show ?
                    <Display show={this.state.student} />
                    :
                    null
                }
            </div>
        );
    }
}

export default AllStudents;
