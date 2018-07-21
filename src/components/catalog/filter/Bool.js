import React, {Component} from 'react';


import './Bool.css';

class Bool extends Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

export default Bool;