require 'rails_helper'

RSpec.describe InterventionRecordsHelper, type: :helper do
  describe '#display_status' do
    it 'returns "Under investigation" for status 0' do
      intervention = InterventionRecord.new(status: "under_investigation")
      expect(display_status(intervention)).to eq('Under investigation')
    end

    it 'returns "Rejected" for status 1' do
      intervention = InterventionRecord.new(status: "rejected")
      expect(display_status(intervention)).to eq('Rejected')
    end

    it 'returns "Resolved" for status 2' do
      intervention = InterventionRecord.new(status: "resolved")
      expect(display_status(intervention)).to eq('Resolved')
    end

  end

  module InterventionRecordsHelper
    def display_status(intervention)
      case intervention.status
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
