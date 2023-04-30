require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the UsersHelper. For example:
#
# describe UsersHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe UsersHelper, type: :helper do
  describe '#user_type' do
    it 'returns "User" for user_type 0' do
      user = User.new(user_type: "user")
      expect(user_type(user)).to eq('User')
    end

    it 'returns "Admin" for user_type 1' do
      user = User.new(user_type: "admin")
      expect(user_type(user)).to eq('Admin')
    end
  end
end

module UsersHelper
  def user_type(user)
    case user.user_type
    when 'user'
      'User'
    when 'admin'
      'Admin'
    end
  end
end