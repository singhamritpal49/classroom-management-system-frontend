import React, { Component } from 'react';
import Desk from './Desk'

export class Management extends Component {
    state = {
        deskData: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/classroom/deskdata")
            .then(res => res.json())
            .then(res => this.setState({
                deskData: res
            }))
    }



    render() {
        
        const alldesks = this.state.deskData.map(desk => {
            return desk.repairs.map(damage => {
                // console.log(damage)
                return <Desk deskid={desk.id} damageData={damage}  />
            })
        })

        return (
            <div className="staff">
                <h1>For Custodians</h1>
                {alldesks}
            </div>
        );
    }
}

export default Management;
