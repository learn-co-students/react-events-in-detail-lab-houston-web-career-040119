// Code DelayedButton Component Here

import React from 'react'


export default class DelayedButton extends React.Component{
    event=(e)=>{
        e.persist()
        setTimeout(()=>this.props.onDelayedClick(e),this.props.delayed)
    }
    render(){
        return(
        <div>

   <button onClick={this.event}></button>
   </div>
        )
    }
}
