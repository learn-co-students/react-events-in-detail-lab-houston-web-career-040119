// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component{
    
    createArr=()=>{
        console.log(this.prop)
    }
    
    
    render(){
        
        return(
            <button onClick={this.createArr}>
                create an array
            </button>
        )
    }
}
