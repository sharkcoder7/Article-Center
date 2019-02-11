import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopStoriesContainer from '../containers/TopStoriesContainer';
import ChannelsContainer from '../containers/ChannelsContainer';
import ChannelArticlesContainer from '../containers/ChannelArticlesContainer';
import QueryContainer from '../containers/QueryContainer';

const Navbar = () => {
  return(
    <Router>
      <div>
        <div className="App-menu">
          <div className="ui tabular stackable menu">
            <Link to="/" id="TopStories-link" className="item"> Top Stories </Link>
            <Link to="/channels" id="channels-link" className="item"> Browse Channels </Link>
            <Link to="/search" id="search-link" className="item">Search Articles</Link>
            <h1 id="title" className="ui header floated right item">Article Center</h1>
          </div>
        </div>
        <div className="ui hidden divider"></div>
        <Route exact path="/" component={TopStoriesContainer} />
        <Route exact path="/channels" component={ChannelsContainer} />
        <Route exact path="/channels/:id" component={ChannelArticlesContainer} />
        <Route exact path="/search" component={QueryContainer} />
        <Route exact path="/search/:query" component={QueryContainer} />

    </div>
    </Router>
  )
}

export default Navbar;