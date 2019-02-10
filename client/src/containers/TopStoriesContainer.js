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

const mapStateToProps = state => {
  return {topStories: state.articles.topStories}
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default TopStoriesContainer;