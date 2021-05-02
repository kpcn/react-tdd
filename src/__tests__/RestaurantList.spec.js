import React from "react";
import { mount } from "enzyme";
import RestaurantList, {
  RestaurantItems,
  NoRecord,
  Items,
} from "../../src/RestaurantList";

describe("RestaurantListing", () => {
  describe("RestaurantList", () => {
    let wrapper;

    it("display header properly", () => {
      wrapper = mount(<RestaurantList restaurants={[]} />);
      expect(wrapper.find(".collection-header").text()).toEqual("Restaurants");
    });

    it("should render RestaurantItems component", () => {
      expect(wrapper.contains(RestaurantItems)).toBe(true);
    });
  });

  // TODO: refactor test flow
  describe("RestaurantItems", () => {
    it("should render NoRecord component when list is empty", () => {
      const wrapper = mount(<RestaurantItems restaurants={[]} />);
      expect(wrapper.contains(NoRecord)).toBe(true);
    });

    it("should render Items component when list has a item", () => {
      const wrapper = mount(<RestaurantItems restaurants={["Yummy Yummy"]} />);
      expect(wrapper.contains(Items)).toBe(true);
    });
  });
});
