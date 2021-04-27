import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App", () => {
  it("renders properly", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("h1").text()).toContain("TDD with React & Parcel");
  });
});
