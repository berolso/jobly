import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { v4 as uuid } from "uuid";

import { ListGroup, ListGroupItem, Container } from "reactstrap";

const List = () => {
  const products = useSelector((state) => state.products);

  const productList = Object.keys(products).map((product) => (
    <ListGroupItem style={{ color: "gray" }} color="muted" key={uuid()}>
      <ListItem isCart={false} products={products} product={product} />
    </ListGroupItem>
  ));

  return (
    <Container style={{ margin: "auto" }}>
      <h1>Shop</h1>
      <ListGroup>{productList}</ListGroup>);
    </Container>
  );
};
export default List;
