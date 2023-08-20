import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.cartReducer);
  const handleRemove = (id)=>{
    dispatch(removeItem(id))
  }
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <table className="table shadow mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts &&
            allProducts.map((item,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>
                  {" "}
                  <img
                    width={"70px"}
                    height={"70px"}
                    src={item?.thumbnail}
                    alt=""
                  />{" "}
                </td>
                <td>$ {item?.price}</td>
                <td>
                  {" "}
                  <i onClick={()=>handleRemove(item.id)} className="fa-solid fa-trash text-danger"></i>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
