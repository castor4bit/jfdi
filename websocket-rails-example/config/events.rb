WebsocketRails::EventMap.describe do
  subscribe :websocket_chat, to: WebsocketChatController, with_method: :message_recieve

  subscribe :client_connected,    to: WebsocketChatController, with_method: :client_connected
  subscribe :client_disconnected, to: WebsocketChatController, with_method: :client_disconnected
end
