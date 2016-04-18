#= require websocket_rails/main
#= require jquery

window.App.ChatClient =

class ChatClient

  constructor: (url, channel) ->
    ws = new WebSocketRails(url)

    if channel?
      @conn = ws
    else
      @conn = ws.subscribe(channel)

    # event binding
    @conn.bind 'websocket_chat', (msg) ->
      message_li = document.createElement("li")
      message_li.textContent = msg

      $("#chat_area").append(message_li)

    $("#send").click =>
      comment = $("#comment").val()
      @send comment


  send: (msg, eventName = 'websocket_chat') ->
    @conn.trigger(eventName, msg)
