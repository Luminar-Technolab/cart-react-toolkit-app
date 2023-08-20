import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Home() {
  const dispatch = useDispatch()
  const [data] = useFetch("https://dummyjson.com/products");
  console.log(data);
  const handleCart = (product)=>{
    dispatch(addToCart(product))
  }
  return (
    <div style={{marginTop:'100px'}} className="container-fluid ">
      <Row>
        {data &&
          data.map((item) => (
            <Col className="mb-3" sm={12} md={6} lg={4} xl={3} >
              <Card className="p-3 text-center">
                <Card.Img
                  height={"250px"}
                  variant="top"
                  src={item?.thumbnail}
                />
                <Card.Body>
                  <Card.Title>
                    {item?.title}
                  </Card.Title>
                  <Card.Text>$ {item?.price}</Card.Text>
                  <Button onClick={()=>handleCart(item)} variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Home;
