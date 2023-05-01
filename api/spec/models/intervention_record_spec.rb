require 'rails_helper'


RSpec.describe InterventionRecord, type: :model do
  describe 'validations' do
    it 'requires a title' do
      intervention = InterventionRecord.new(description: 'This is a description')
      expect(intervention).to_not be_valid
    end
  end
end
