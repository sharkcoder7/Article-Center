export default function articleReducer (
  state = {
    loading: false,
    topStories: [],
    channels: [],
    channelArticles: [],
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_TOP_STORIES':
      return {...state, loading: false, topStories: action.payload.articles}

    case 'FETCH_CHANNELS':
      return {...state, loading: false, channels: action.payload.sources}

    case 'FETCH_CHANNEL_ARTICLES':
      return {...state, loading: false, channelArticles: action.payload.articles}
      
    default:
      return state;

  }
}