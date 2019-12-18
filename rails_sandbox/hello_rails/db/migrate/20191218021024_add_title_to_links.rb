class AddTitleToLinks < ActiveRecord::Migration[6.0]
  def change
    add_column :links, :title, :string, limit: 512, after: :url
  end
end
