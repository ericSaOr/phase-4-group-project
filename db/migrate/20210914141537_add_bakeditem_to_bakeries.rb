class AddBakeditemToBakeries < ActiveRecord::Migration[6.1]
  def change
    add_column :bakeries, :item, :string
  end
end
