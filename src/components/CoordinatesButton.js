// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component{
    
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>B I G  B U T T O N</button>;
  }
}

export default CoordinatesButton