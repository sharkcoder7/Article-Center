export function fetchTopStories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/topStories')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_TOP_STORIES', payload: articles}))
  }
}



export function fetchChannels() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/channels')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_CHANNELS', payload: articles}))
  }
}

export function searchChannelArticles(channel) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch(`/api/channels/${channel}`)
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_CHANNEL_ARTICLES', payload: articles}))
  }
}


export function searchArticles(query) {
  return (dispatch)  => {
    dispatch({type: 'SAVE_SEARCH_QUERY', payload: query})
    return fetch('/api/news_search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({article: {query: query}})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error()
      }
      return response.json()
    })
    .then(articles => dispatch({type: 'FETCH_FILTERED_ARTICLES', payload: articles}))
    .catch(error => dispatch({type: 'HANDLE_SEARCH_ERROR', payload: error}))
  }
}
