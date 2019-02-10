import React, { Component } from 'react';
import Article from '../components/article';
import { connect } from 'react-redux';
// add actions

class TopStoriesContainer extends Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return(
      <div>
        <Article />
        
      </div>  
    )
  }

}

export default TopStoriesContainer;