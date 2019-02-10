import React, { Component } from 'react';
import QueryInput from '../components/QueryInput';
import QueryArticles from '../components/queryArticles';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';


class QueryContainer extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <div id="query">
          <QueryInput searchArticles={this.props.searchArticles} />

        </div>

        <div>
          <QueryArticles results={this.props.results} numResults={this.props.numResults}/> 
        </div> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    results: state.articles.results,
    query: state.articles.query,
    numResults: state.articles.numResults,
    searchDone: state.articles.searchDone,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query) => dispatch(searchArticles(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);