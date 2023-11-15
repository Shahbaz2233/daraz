import React, { useEffect, useState } from "react";
import "../../style/product.css";
import axios from "axios";
import { Baseurl } from "../Baseurl";
import { header2 } from "../config";

const Product = ({idCatgory}) => {
console.log(header2,'--------->>>>header')
  const [api, setApi] = useState();


  const categoryProduct = async () => {
    try {
      const response = await axios.get(`${Baseurl.baseurl}/api/categories`, header2)
      console.log('data--->category',response?.data)
      setApi(response?.data?.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  console.log(api, "api")

  useEffect(() => {
    categoryProduct();
  }, [])
  return (
    <div className="container">
      <div className="container-box">
        {api?.map((val) => {
          return (
            <>
              <div onClick={() => {
               return idCatgory(val.id)
              }} className="box-div fs-4 fw-bold text-capitalize" style={{cursor:'pointer'}} to='/category'>{val.name}</div>
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Product;
