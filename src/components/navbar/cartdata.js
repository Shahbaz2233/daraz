import React from "react";
import "./cartdata.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const CartItem = useSelector((state) => state.cart.items);
  let Totalprice = 0;
  return (
    <div className="main d-flex flex-column justify-content-between">
      <div className="row" style={{overflowY:"auto",height:'auto'}}>
        {CartItem.length === 0 ? (
          <p style={{ textAlign: "center" }}>No Item In Cart</p>
        ) : (
          CartItem.map((data, index) => {
            Totalprice += data.price * data.qty;
            return (
              <div className="row p-1 d-flex gap-2">
                <div className="col-3">
                  <img
                    src={data.image}
                    alt="sdas"
                    style={{ width: "70px", height: "80px" }}
                  />
                </div>
                <div className="col-8 px-2">
                  <h4 style={{ fontSize: "14px" }}>{data.title}</h4>
                  <p style={{ fontSize: "12px" }}>
                   
                    Price : {data.price} <br /> Quantity: {data.qty}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="row ">
        <div className="py-3">
          <h5>Total Price : {Totalprice.toFixed(2)}</h5>
        </div>
        <button className="btn btn-dark">Go to cart </button>
      </div>
    </div>
  );
};

export default Cart;
