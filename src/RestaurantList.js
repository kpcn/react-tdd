import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const RestaurantList = ({ restaurants }) => {
  return (
    <Collection header="Restaurants">
      <RestaurantItems restaurants={restaurants} />
    </Collection>
  );
};

export const RestaurantItems = ({ restaurants }) =>
  restaurants.length === 0 ? <NoRecord /> : <Items restaurants={restaurants} />;

export const NoRecord = () => (
  <CollectionItem style={{ color: "gray" }}>(empty list)</CollectionItem>
);

export const Items = ({ restaurants }) =>
  restaurants.map((name) => <CollectionItem key={name}>{name}</CollectionItem>);

export default RestaurantList;
