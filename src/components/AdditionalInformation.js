import React, { Component } from 'react';
let attendance, room, positionId, deskId;

class AdditionalInformation extends Component {


    data = () => {
        return this.props.data.students.forEach(element => {
            if (element.studentId === this.props.studentid) {
                attendance = element.absent ? "No" : "Yes"
                room = element.roomId
                positionId = element.positionId

            }
        });
    }


    deskData = () => {
        return this.props.data.desks.forEach(desk => {
            if (desk.positionId === positionId) {
                deskId = desk.deskId
            }
        });
    }



    render() {
        // this.data()
        this.data()
        this.deskData()

        return (
            <div>
                <ul>
                    <li>
                        <b>Date:</b> {this.props.data.date}
                        <br />
                        <b>Present:</b> {attendance}
                        <br />
                        <b>Room:</b> {room}
                        <br />
                        <b> Desk ID:</b> {deskId}
                        <br />
                        <b> Desk Position:</b> {positionId}


                    </li>
                </ul>

            </div>
        );
    }
}

export default AdditionalInformation;