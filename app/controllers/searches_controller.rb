class SearchController < ApplicationController

  def last_ten
    @searches = Search.select('*').order("created_at desc").limit(10)
    render json: @searches
  end

end