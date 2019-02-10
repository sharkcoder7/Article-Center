import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Channel extends Component {

  render() {
    return(
      <div className="channel">
        <h3> <Link to={{
          pathname: `/channels/${this.props.id}`,
          state: {
            name: this.props.name
          }
        }}>{this.props.name} </Link> </h3>

        
      </div>
    )
  }
}

export default Channel;