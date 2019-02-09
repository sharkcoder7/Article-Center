class ArticlesController < ApplicationController

  def headlines
    response = Faraday.get 'https://newsapi.org/v2/top-headlines?' do |req|
      req.params['apiKey'] = ENV['SECRET_KEY']
      req.params['country'] = 'us'
      req.params['pageSize'] = 100
      req.params['page'] = 1
    end
    @headlines = JSON.parse(response.body)
    render json: @headlines, status: 200
  end


  



end