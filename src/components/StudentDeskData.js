import React, { Component } from 'react';
let positionId;
let studentId;
let studentName;
export class StudentDeskData extends Component {
    state = {
        deskData: [],
        studentData: []
    }
    componentDidMount() {
        fetch("http://localhost:3000/classroom/students")
            .then(res => res.json())
            .then(data => {
                this.setState({ studentData: data })
            })


        fetch("http://localhost:3000/classroom/dailyData")
            .then(res => res.json())
            .then(data => {
                this.setState({ deskData: data })
            })
    }

    gettingPositionId = () => {
        this.state.deskData.forEach(date => {
            date.desks.forEach(desk => {
                //    console.log(desk)
                if (this.props.deskId === desk.deskId) {
                    positionId = desk.positionId
                }
            })
        })
    }
    gettingStudentId = () => {
        this.state.deskData.forEach(date => {
            date.students.forEach(student => {
                //    console.log(desk)
                if (positionId === student.positionId) {
                    studentId = student.studentId
                    
                }
            })
        })
    }
    gettingStudentName = () => {
        this.state.studentData.forEach(student => {
            if (student.id === studentId) {
                studentName = `${student.bio.givenName}   ${student.bio.familyName}`       }
        })
    }





    render() {
        this.gettingPositionId()
        this.gettingStudentId()
        this.gettingStudentName()
        // console.log(positionId)
        // console.log(this.state.studentData)
        // console.log(studentId)
        return (
            <div>
                Student  = {studentName}
            </div>
        );
    }
}

export default StudentDeskData;
