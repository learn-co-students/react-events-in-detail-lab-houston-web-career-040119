// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component{
    event = (e) => {
        e.persist()
        setTimeout(() => this.props.onDelayedClick(e),this.props.delay)
    }
    render(){
        return <button onClick={this.event}/>

    }
}
export default DelayedButton