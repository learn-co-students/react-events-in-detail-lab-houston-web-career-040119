// Code DelayedButton Component Here

import React, { Component } from 'react'

class DelayedButton extends Component {

    clickHandler = (e) => {
        e.persist()
        let consoleEvent = () => {this.props.onDelayedClick(e)}
        setTimeout(consoleEvent, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.clickHandler}>DelayedButton</button>
        )
    }

}

export default DelayedButton