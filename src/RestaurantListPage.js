import React, { Component } from "react";
import {
  Row,
  Col,
  Navbar,
  Icon,
  Modal,
  NavItem,
  Button,
} from "react-materialize";
import NewRestaurantForm from "./NewRestaurantForm";

export default class RestaurantListPage extends Component {
  state = { restaurants: [] };

  handleAddRestaurant = (name) => {
    this.setState((state) => ({
      restaurants: [name, ...state.restaurants],
    }));
  };

  render() {
    return (
      <Row>
        <Col s={12} m={12} l={12} xl={12}>
          <Navbar
            brand={
              <a className="brand-logo" href="#">
                TDD with React & Parcel
              </a>
            }
            centerLogo
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
          ></Navbar>
          <Row>
            <Col>
              <Modal
                header="New Restaurnt"
                trigger={
                  <Row>
                    <Button data-test="addRestaurantButton">
                      Add Restaurant
                    </Button>
                  </Row>
                }
              >
                <NewRestaurantForm onSave={this.handleAddRestaurant} />
              </Modal>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
