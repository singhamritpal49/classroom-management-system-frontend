import React, { Component } from 'react';
let positionId;
let studentId;
let studentName;
let roomID = [];

export class StudentDeskData extends Component {
    state = {
        deskData: [],
        studentData: [],
        room: []
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

        fetch("http://localhost:3000/classroom/rooms")
            .then(res => res.json())
            .then(data => {
                this.setState({ room: data })
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
            // console.log(student)
            if (student.id === studentId) {
                studentName = `${student.bio.givenName}   ${student.bio.familyName}`
            }
        })
    }

    gettingDeskLocation = () => {
        this.state.room.forEach(room => {
            //  console.log(room.roomId)
            room.positions.forEach(position => {
                if (positionId === position) {
                    // console.log(room.roomId)
                    return roomID = room.roomId
                }
            })
        })
    }




    render() {
        console.log(roomID)
        this.gettingPositionId()
        this.gettingStudentId()
        this.gettingStudentName()
        this.gettingDeskLocation()
        return (
            <div>
                Student: {studentName}
                <br />
                Room ID: {roomID}
            </div>
        );
    }
}

export default StudentDeskData;
