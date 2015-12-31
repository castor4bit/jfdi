require "sinatra"
require "redis"
require "json"

redis = Redis.new(
  host: ENV["REDIS_PORT_6379_TCP_ADDR"],
  port: ENV["REDIS_PORT_6379_TCP_PORT"]
)

before do
  headers 'X-Loadbaranced-Host' => ENV["HOSTNAME"]
end

get '/data/:key' do
  value = redis.get params[:key]
  v = {
    key: params[:key],
    value: value
  }
  v.to_json
end

post '/data/:key' do
  msg = request.body.read
  redis.set params[:key], msg
end
