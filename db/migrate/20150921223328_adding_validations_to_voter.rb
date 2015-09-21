class AddingValidationsToVoter < ActiveRecord::Migration
  def change
  	change_column_null :voters, :first_name, false
  	change_column_null :voters, :last_name, false
  	change_column_null :voters, :city, false
  	change_column_null :voters, :state, false
  	change_column_null :voters, :zip, false
  end
end
