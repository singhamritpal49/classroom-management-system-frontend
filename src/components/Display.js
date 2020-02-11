import React, { Component } from 'react';
import AdditionalInformation from './AdditionalInformation'
export class Display extends Component {
    state = {
        desks: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/classroom/dailyData')
            .then(res => res.json())
            .then(data => this.setState({
                desks: data,

            }))
    }

    renderDates = () => {
        return this.state.desks.map(date => <AdditionalInformation data={date} studentid={this.props.show.id} />

            /*            date.students.forEach(student => {
                            if (student.studentId === this.props.show.id) {
                                    // return (<div> Date: date.date <br /> present in the class: student.absent </div>)
                                // console.log(student.absent )
                              return   <AdditionalInformation date={date.date} present={student.absent} />
                            }
                        })*/
        )
    }



    render() {

        // console.log(this.state)
        return (
            <div className="item">
                <h1> Student Details</h1>
                <div class="container">
                    Student Id: {this.props.show.id}
                    <br />
                    First Name: {this.props.show.bio.givenName}
                    <br />
                    Last Name: {this.props.show.bio.familyName}
                    <br />
                    Nick Name: {this.props.show.bio.nickName}
                    <br />
                    Email: {this.props.show.bio.email}
                    <br />
                    Age: {this.props.show.bio.age}
                    <br />
                    Grade: {this.props.show.bio.grade}
                    <br />
                    <h3>Student History</h3>
                    <br />
                    Absences: {this.props.show.history.absences}
                    <br />
                    GPA: {this.props.show.history.gpa}
                    <br />
                    <h3>Student Grades</h3>
                    <br />
                    Project 1  : {this.props.show.grades.project1}
                    <br />
                    Project 2  : {this.props.show.grades.project2}
                    <br />
                    Project 3  : {this.props.show.grades.project3}
                    <br />
                    Project 4  : {this.props.show.grades.project4}
                    <h3> Daily Record </h3>
                    {this.renderDates()}

                </div>
            </div>
        );
    }
}

export default Display;
