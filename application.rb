require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'active_record'
require File.join(File.dirname(__FILE__), 'environment')

get '/' do
  erb :index
end
