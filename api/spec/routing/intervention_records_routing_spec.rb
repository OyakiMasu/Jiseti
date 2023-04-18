require "rails_helper"

RSpec.describe InterventionRecordsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/intervention_records").to route_to("intervention_records#index")
    end

    it "routes to #show" do
      expect(get: "/intervention_records/1").to route_to("intervention_records#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/intervention_records").to route_to("intervention_records#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/intervention_records/1").to route_to("intervention_records#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/intervention_records/1").to route_to("intervention_records#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/intervention_records/1").to route_to("intervention_records#destroy", id: "1")
    end
  end
end
