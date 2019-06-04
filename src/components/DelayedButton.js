// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

  setDelay = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e),this.props.delay)
  }

  render() {
    return(
      <div className="coordinates-button">
        <button onClick={this.setDelay}>Delayed Button</button>
      </div>
    )
  }
}
