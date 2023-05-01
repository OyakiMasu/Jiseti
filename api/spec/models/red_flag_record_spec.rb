require 'rails_helper'

RSpec.describe RedFlagRecord, type: :model do
  describe 'validations' do
    it 'requires a title' do
      red_flag = RedFlagRecord.new(description: 'This is a description')
      expect(red_flag).to_not be_valid
    end
  end
end
