// Code DelayedButton Component Here
import React from "react"




class DelayedButton extends React.Component{
    
    delayedClick = event=>{
        event.persist();
        setTimeout(() => {
        this.props.onDelayedClick(event);
        }, this.props.delay);
    }
    
    render(){
        return(
            <div>
                <button onClick={this.delayedClick}>
                    D E L A Y E D
                </button>
            </div>
            )
    }
    
}

export default DelayedButton