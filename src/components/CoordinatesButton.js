// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    constructor() {
        super()
        this.state = {
            coordinates: [0,0]
        }
    }
    clickButton = (event) => {
        this.setState({
            coordinates:[event.clientX, event.clientY]
        })
        return this.state.coordinates
    }


    render() {
        return (
        <div>
            <button onClick={(event) => this.props.onReceiveCoordinates(this.clickButton(event))}></button>
        </div>
        )
    }
}
