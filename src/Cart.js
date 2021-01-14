import React from "react";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { ListGroup, ListGroupItem, Container } from "reactstrap";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  const productList = Object.keys(cart).map((product) => (
    <ListGroupItem style={{ color: "gray" }} color="muted" key={uuid()}>
      <ListItem isCart={true} products={products} product={product} />
    </ListGroupItem>
  ));

  return (
    <Container style={{ margin: "auto" }}>
      <h1>Cart</h1>
      <ListGroup>{productList}</ListGroup>);
    </Container>
  );
};
export default Cart;
