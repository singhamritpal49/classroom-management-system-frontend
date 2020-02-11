import React, { Component } from 'react';
let date2, attendance, room, positionId;
class AdditionalInformation extends Component {


    data = () => {
        return this.props.data.students.forEach(element => {
            if (element.studentId === this.props.studentid) {
                date2 = this.props.data.date
                attendance = element.absent ? "No" : "Yes"
                room = element.roomId
                positionId = element.positionId
            }
        });
    }


    render() {
        console.log(this.props);
        // this.data()
        this.data()
        console.log(date2)
        return (
            <div>
                <ul>
                    <li>
                        Date: {this.props.data.date} 
                        <br/>
                        Present: {attendance}
                        <br/>
                        Room: {room}
                        <br/>
                        Desk Position: {positionId}


                    </li>
                </ul>

            </div>
        );
    }
}

export default AdditionalInformation;