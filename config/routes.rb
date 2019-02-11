Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api do
    resources :articles
      get '/topStories', to: 'articles#topStories'
      get '/channels', to: 'articles#channels'
      get '/channels/:channel', to: 'articles#channel_articles'
      post'/articles_search', to: 'articles#articles_search'
    
  end
end
