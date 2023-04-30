require 'rails_helper'

RSpec.describe User, type: :model do
  describe "user_type enum" do
    it "can be set to user" do
      user = User.new(user_type: "user", password: "password")
      expect(user).to be_valid
      expect(user.user_type).to eq("user")
    end

    it "can be set to admin" do
      user = User.new(user_type: "admin", password: "password")
      expect(user).to be_valid
      expect(user.user_type).to eq("admin")
    end
  end
end