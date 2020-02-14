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
        return this.state.desks.map(date => <AdditionalInformation data={date} studentid={this.props.show.id}  />
        )
    }

   


    render() {
        return (
            <div className="item">
                <h1> Student Details</h1>
                <div className="container">
                    <b>Student Id:</b> {this.props.show.id}
                    <br />
                    <b>First Name:</b> {this.props.show.bio.givenName}
                    <br />
                    <b> Last Name:</b> {this.props.show.bio.familyName}
                    <br />
                    <b>Nick Name:</b> {this.props.show.bio.nickName}
                    <br />
                    <b>Email:</b> {this.props.show.bio.email}
                    <br />
                    <b>Age:</b> {this.props.show.bio.age}
                    <br />
                    <b>Grade:</b> {this.props.show.bio.grade}
                    <br />
                    <h3>Student History</h3>
                    
                    <b>Absences:</b> {this.props.show.history.absences}
                    <br />
                    <b>GPA:</b> {this.props.show.history.gpa}
                    <br />
                    <h3>Student Grades</h3>
                    <b>Project 1:</b> {this.props.show.grades.project1}
                    <br />
                    <b>Project 2:</b> {this.props.show.grades.project2}
                    <br />
                    <b>Project 3:</b> {this.props.show.grades.project3}
                    <br />
                    <b>Project 4:</b> {this.props.show.grades.project4}
                    <h3> Daily Record </h3>
                    {this.renderDates()}
                    
                </div>
            </div>
        );
    }
}

export default Display;
