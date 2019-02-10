import React, { Component } from 'react';
import Article from '../components/article';
import { connect } from 'react-redux';
import { fetchTopStories } from '../actions/articleActions';

class TopStoriesContainer extends Component {
  componentDidMount() {
    this.props.fetchTopStories()
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

const mapStateToProps = (state) => {
  return {topStories: state.topStories}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTopStories: () => dispatch(fetchTopStories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesContainer);