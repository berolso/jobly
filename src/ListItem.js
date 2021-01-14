import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateItemQuantity, removeItem } from "./actions";
import { Form, FormGroup, Input, Button } from "reactstrap";

const ListItem = ({isCart, products, product }) => {
  // handle redux store to update quantity
  const dispatch = useDispatch();
  const RdxStoreQty = useSelector((state) => state.cart[product] || 0);
  const update = () => {
    dispatch(updateItemQuantity(product, quantity));
  };

  const initialState = RdxStoreQty;
  const [quantity, setQuantity] = useState(initialState);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuantity((cur) => (value > 0 ? value : 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update();
  };

  const handleDelete = () =>{
    setQuantity(() => 0)
    dispatch(removeItem(product, quantity))
  }

  return (
    <div>
      <h3>{products[product].name}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/products/${product}`}>
        <img
          style={{ width: "200px", margin: "auto" }}
          src={`${products[product].image_url}`}
          />
          </Link>
        <Form style={{ width: "20%", margin: "auto" }} onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="quantity">Quantity</label>
            <Input
              size="sm"
              id="quantity"
              name="quantity"
              value={quantity}
              type="number"
              onChange={handleChange}
            ></Input>
            <Button size="sm">Update</Button>
          </FormGroup>
        </Form>
        {isCart && <Button color="danger" size='sm' onClick={handleDelete}>X</Button>}
        
      </div>
    </div>
  );
};

export default ListItem;
