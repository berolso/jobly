import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

import { ListGroup, ListGroupItem, Container } from "reactstrap";

const List = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  const productList = Object.keys(products).map((product) => (
    <ListGroupItem
      style={{ backgroundColor: "oldLace", color: "gray" }}
      color="muted"
      tag="a"
      href="#"
    >
      <ListItem products={products} product={product} />
    </ListGroupItem>
  ));

  return (
    <Container style={{margin:'auto'}}>
      <h1>Shop</h1>
      <ListGroup>{productList}</ListGroup>);
    </Container>
  );
};
export default List;
