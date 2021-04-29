import React from "react";
import { mount } from "enzyme";
import RestaurantListPage from "../RestaurantListPage";
import { Navbar } from "react-materialize";

describe("RestaurantListPage", () => {
  it("renders navbar", () => {
    const wrapper = mount(<RestaurantListPage />);
    expect(wrapper.find(Navbar).length).toEqual(1);
  });

  it("display header text", () => {
    const headerText = "TDD with React & Parcel";
    const wrapper = mount(<RestaurantListPage />);
    expect(wrapper.find(".brand-logo").text()).toContain(headerText);
  });
});
