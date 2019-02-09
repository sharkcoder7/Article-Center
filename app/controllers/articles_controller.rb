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

  def channels
    response = Faraday.get 'https://newsapi.org/v2/sources?' do |req|
      req.params['apiKey'] = ENV['SECRET_KEY']
      req.params['country'] = 'us'
    end
    @channels = JSON.parse(response.body)
    render json: @channels, status: 200
  end

  def channel_articles
    response = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = ENV['SECRET_KEY']
      req.params['country'] = 'us'
      req.params['pageSize'] = 100
      
    end
    @channel_articles = JSON.parse(response.body)
    render json: @channel_articles, stats: 200
  end

end