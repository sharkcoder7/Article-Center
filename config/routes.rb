Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api do
    resources :articles
      get '/headlines', to: 'articles#headlines'
      get '/channels', to: 'articles#channels'
      get '/channels/:channel/:page', to: 'articles#channel_articles'
  end
end
