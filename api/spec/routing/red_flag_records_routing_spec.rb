require "rails_helper"

RSpec.describe RedFlagRecordsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/red_flag_records").to route_to("red_flag_records#index")
    end

    it "routes to #show" do
      expect(get: "/red_flag_records/1").to route_to("red_flag_records#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/red_flag_records").to route_to("red_flag_records#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/red_flag_records/1").to route_to("red_flag_records#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/red_flag_records/1").to route_to("red_flag_records#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/red_flag_records/1").to route_to("red_flag_records#destroy", id: "1")
    end
  end
end
