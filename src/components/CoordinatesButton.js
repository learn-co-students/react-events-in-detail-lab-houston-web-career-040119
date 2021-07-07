// Code CoordinatesButton Component Here

import React from 'react'


export default class CoordinatesButton extends React.Component{
    event=(e)=>{
        return this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render(){
        return(
   <button onClick={this.event}>x,y</button>
        )
    }
}
