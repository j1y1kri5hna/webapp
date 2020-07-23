import React, { Component } from 'react'
import menu_icon from './../../../assets/img/menu_icon.svg'
export class upate_availability extends Component {
    render() {
        return (
            <div className="availability-title">
                <div><img src={menu_icon}></img></div>
                <h1>My availability</h1>
                <h4>you can select multiple options</h4>
            </div>
        )
    }
}

export default upate_availability
