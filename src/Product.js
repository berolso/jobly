import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateItemQuantity } from "./actions";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  FormGroup,
  Form,
  Input,
} from "reactstrap";

const Product = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products[id]);
  const dispatch = useDispatch();
  const RdxStoreQty = useSelector((state) => state.cart[id] || 0);
  const update = () => {
    dispatch(updateItemQuantity(id, quantity));
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

  return (
    <div>
      <Card style={{ margin: "30px", color: "salmon" }}>
        <CardImg
          style={{ width: "50%", margin: "auto" }}
          src={`${product.image_url}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle as="h3">{product.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <h1>${product.price}</h1>
          </CardSubtitle>
          <CardText>
            <p>{product.description}</p>
          </CardText>
          <Form
            style={{ width: "20%", margin: "auto" }}
            onSubmit={handleSubmit}
          >
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
        </CardBody>
      </Card>
    </div>
  );
};
export default Product;
