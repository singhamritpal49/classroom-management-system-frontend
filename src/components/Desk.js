import React, { Component } from 'react';
import StudentDeskData from './StudentDeskData'
class Desk extends Component {
    state = {
        desks: []
    }

    render() {
        // console.log(this.props);

        return (
            <div>
                <ul>
                    <li> <b>Desk ID:</b> {this.props.deskid}
                        <br />
                        <b>Repair ID:</b> {this.props.damageData.repairId}
                        <br />
                        <b>Damage:</b> {this.props.damageData.issueString}
                        <br />
                        <b>Fixed:</b> {this.props.damageData.fixString}
                        <StudentDeskData deskId={this.props.deskid}/>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Desk;