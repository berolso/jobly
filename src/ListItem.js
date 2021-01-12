import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

const ListItem = ({ products, product }) => {
  return (
    <div>
      <h3>{products[product].name}</h3>
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <img style={{ width: "200px",margin:'auto' }} src={`${products[product].image_url}`} />
        <Form style={{ width: "20%", margin:'auto'}}>
          <FormGroup>
            <label for="quantity">Quantity</label>
            <Input id="quantity" type="number"></Input>
          </FormGroup>
          <Button>Add</Button>
        </Form>
      </div>
    </div>
  );
};

export default ListItem;
