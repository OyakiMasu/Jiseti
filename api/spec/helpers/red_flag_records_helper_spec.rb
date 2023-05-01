require 'rails_helper'

RSpec.describe RedFlagRecordsHelper, type: :helper do
  describe '#display_status' do
    it 'returns "Under investigation" for status 0' do
      red_flag = RedFlagRecord.new(status: "under_investigation")
      expect(display_status(red_flag)).to eq('Under investigation')
    end

    it 'returns "Rejected" for status 1' do
      red_flag = RedFlagRecord.new(status: "rejected")
      expect(display_status(red_flag)).to eq('Rejected')
    end

    it 'returns "Resolved" for status 2' do
      red_flag = RedFlagRecord.new(status: "resolved")
      expect(display_status(red_flag)).to eq('Resolved')
    end

  end

  module RedFlagRecordsHelper
    def display_status(red_flag)
      case red_flag.status
      when "under_investigation"
        'Under investigation'
      when "rejected"
        'Rejected'
      when "resolved"
        'Resolved'
      else
        'Unknown'
      end
    end
  end
end
