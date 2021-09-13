class AddImageToBakeries < ActiveRecord::Migration[6.1]
  def change
    add_column :bakeries, :image, :string
  end
end
