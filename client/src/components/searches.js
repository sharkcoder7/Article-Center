import React from 'react';
import Search from './search';

const Searches = (props) => {

  const renderSearches = () => {
    return (props.searches.map((search, index) => <Search key={index} query={search}/> ))
  }

    return(
      <div id="recent-searches">
        {renderSeaches()}
      </div>
    )
}

export default Searches;