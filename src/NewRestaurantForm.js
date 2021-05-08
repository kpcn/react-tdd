import React, { Component } from "react";
import { Button, Row, TextInput } from "react-materialize";

export default class NewRestaurantForm extends Component {
  state = {
    restaurantName: "",
  };

  handleTextChange = (event) => {
    this.setState({ restaurantName: event.target.value });
  };

  handleSave = () => {
    const { restaurantName } = this.state;
    this.props.onSave(restaurantName);
    this.setState({ restaurantName: "" });
  };

  render() {
    const { restaurantName } = this.state;
    return (
      <Row>
        <TextInput
          s={12}
          m={8}
          l={10}
          label="Restaurant Name"
          value={restaurantName}
          onChange={this.handleTextChange}
          data-test="newRestaurantName"
        />
        <Button
          modal="close"
          s={12}
          m={4}
          l={2}
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
          Save
        </Button>
      </Row>
    );
  }
}
