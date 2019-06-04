// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  getCoordinates = (e) => {
    this.props.onReceiveCoordinates([e.pageX,e.pageY])
  }

  render() {
    return(
      <div className="coordinates-button">
        <button onClick={this.getCoordinates}>Coordinates Button</button>
      </div>
    )
  }
}
