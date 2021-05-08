import React from "react";
import { mount } from "enzyme";
import NewRestaurantForm from "../../src/NewRestaurantForm";

describe("NewRestaurantForm", () => {
  describe("clicking the save button", () => {
    let saveHandler, wrapper;

    beforeEach(() => {
      saveHandler = jest.fn();

      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate("change", { target: { value: "Yummy Yummy" } });

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate("click");
    });

    it("calls the onSave handler", () => {
      expect(saveHandler).toHaveBeenCalledWith("Yummy Yummy");
    });

    it("clears the text field", () => {
      expect(
        // eslint-disable-next-line comma-dangle
        wrapper.find('input[data-test="newRestaurantName"]').props().value
      ).toEqual("");
    });
  });
});
