class WebsocketChatController < WebsocketRails::BaseController

  def client_connected
    p 'client connected **************************************************'
  end

  def client_disconnected
    p 'client disconnected ###############################################'
  end

  def message_recieve
    # 受信したメッセージをブロードキャスト
    recieve_message = message()
    broadcast_message(:websocket_chat, recieve_message)
  end

  def message_recieve_on_channel
    # 受信したメッセージを指定のチャンネルにブロードキャスト
    recieve_message = message()
    WebsocketRails[:websocket_with_channel].trigger(:websocket_chat, recieve_message)
  end
end
