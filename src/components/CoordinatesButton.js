// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component{
    event = (e) =>{
        return this.props.onReceiveCoordinates([e.screenX,e.screenY])
        
    }
    render(){
       
        return <button onClick={this.event}/>
    }
}
export default CoordinatesButton