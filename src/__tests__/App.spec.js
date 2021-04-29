import React from "react";
import { mount } from "enzyme";
import App from "../App";
import RestaurantListPage from "../RestaurantListPage";

describe("App", () => {
  it("renders properly", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(RestaurantListPage).length).toEqual(1);
  });
});
