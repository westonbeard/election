# == Schema Information
#
# Table name: voters
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  address    :string
#  city       :string
#  state      :string
#  zip        :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Voter < ActiveRecord::Base
end
