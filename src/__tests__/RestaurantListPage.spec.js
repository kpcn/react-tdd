import React from "react";
import { mount } from "enzyme";
import RestaurantListPage from "../RestaurantListPage";

describe("RestaurantListPage", () => {
  it("renders properly", () => {
    const wrapper = mount(<RestaurantListPage />);
  });
});
