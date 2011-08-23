require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'active_record'
require File.join(File.dirname(__FILE__), 'environment')

mime_type :json, 'application/json'

get '/' do
  erb :index
end

get '/data/artists.json' do
  content_type :json
  JSON.pretty_generate(Catalogue.items(:leaf => :artist))
end

get '/data/albums.json' do
  content_type :json
  JSON.pretty_generate(Catalogue.items(:leaf => :album))
end

get '/data/tracks.json' do
  content_type :json
  JSON.pretty_generate(Catalogue.items(:leaf => :track))
end
