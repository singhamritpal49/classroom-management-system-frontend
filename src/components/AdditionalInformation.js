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
                        Date: {this.props.data.date}
                        <br />
                        Present: {attendance}
                        <br />
                        Room: {room}
                        <br />
                        Desk ID: {deskId}
                        <br />
                        Desk Position: {positionId}


                    </li>
                </ul>

            </div>
        );
    }
}

export default AdditionalInformation;