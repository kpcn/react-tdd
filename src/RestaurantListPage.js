import React, { Component } from "react";
import { Row, Col, Navbar, Icon, NavItem } from "react-materialize";

export default class RestaurantListPage extends Component {
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
        </Col>
      </Row>
    );
  }
}
