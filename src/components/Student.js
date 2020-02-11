import React, { Component } from 'react';


export default class Student extends Component {
    state = {
        show: false
    }

    handleClick = (event) => {
        this.props.eachStudent(this.props.student)
    }


    render() {

        return (
            <div class="container">  { 
                <ul>
        <li onClick={ (event) => this.handleClick(event) }> {this.props.student.bio.givenName}  {this.props.student.bio.familyName} </li>
                </ul> 
                }
 
                {/* {console.log(this.props.student)} */}
            </div>
        )
    }
}