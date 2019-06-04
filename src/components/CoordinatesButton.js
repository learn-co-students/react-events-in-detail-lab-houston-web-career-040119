// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

    clickEvent = (e) => {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return(
            <button onClick={this.clickEvent}>CoordinatesButton</button>
        )
    }
}

export default CoordinatesButton