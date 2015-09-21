# == Schema Information
#
# Table name: voters
#
#  id         :integer          not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  address    :string
#  city       :string           not null
#  state      :string           not null
#  zip        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class VoterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
