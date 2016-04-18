window.App = {}

$ ->
  chatClient = new App.ChatClient("localhost:3000/websocket", "websocket_chat_channel")
