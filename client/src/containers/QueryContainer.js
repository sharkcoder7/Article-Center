import React, { Component } from 'react';
import QueryInput from '../components/queryInput';
import QueryArticles from '../components/queryArticles';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';


class QueryContainer extends Component {
  state = {

  }

  render() {
    return (
      <div className="search">
        <div id="query">
          <QueryInput searchArticles={this.props.searchArticles} />

        </div>

        <div>
          <QueryArticles results={this.props.results} numResults={this.props.numResults} searchDone={this.props.searchDone}/> 
        </div> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    results: state.results,
    query: state.query,
    numResults: state.numResults,
    searchDone: state.searchDone,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query) => dispatch(searchArticles(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);