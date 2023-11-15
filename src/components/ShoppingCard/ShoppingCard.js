import React, { useState } from "react";
// import { IoMdSend } from "react-icons/io";
import Navbar from "../navbar/navbar";
import "../../style/ShoppingCart.css";
// import { NavLink} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Footer from "../hero-section/footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../Redux/Reducer/Reducer";
import { MdDeleteForever } from "react-icons/md";
import { Button, Card } from "react-bootstrap";
import { Baseurl } from "../Baseurl";
import axios from "axios";
import { header2 } from "../config";
import { Vortex } from "react-loader-spinner";

const ShoppingCard = () => {
  const userDetails = localStorage.getItem("userDetails");
  const userId = JSON.parse(userDetails)


  const [select, setSelect] = useState();
  const [loader, setLoader] = useState(false);


  const addToProducts = useSelector((state) => state.cart.items);
  console.log(addToProducts, "sadasdasd")
  const dispatch = useDispatch();
  const deleteItems = (id) => {
    dispatch(deleteItem(id))
  }

  const SelectorData = (e) => {
    setSelect(e.target.value)
  }


  const orderStore = async () => {

    const formdata = new FormData();
    formdata.append("user_id", userId?.id)
    formdata.append("payment_type", select)

    addToProducts?.map((val) => {
     return formdata.append("products[0][product_id]", val?.id)
    })
    addToProducts?.map((val) => {
     return formdata.append("products[0][quantity]", val?.qut)
    })

    try {
      setLoader(true)
      const response = await axios.post(`${Baseurl.baseurl}/api/orders`, formdata, header2)
      console.log(response.data, "response")
      setLoader(false)
    if(response?.data?.data?.payment_link){

       window.location.href=response?.data?.data?.payment_link;
    }else{
      alert("your have successfully add to card")
    }
     

    } catch (error) {
      console.log(error)
      setLoader(false)

    }


    // axios().then((res) => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // })

  }

  return (
    <>
      {loader ? <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center  w-100"><Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      /></div> : <>

        <Navbar />
        <div className="text-center">
          <h1 className="text-dark">Shopping Cart</h1>
        </div>
        <div className="container">
          <table className="table Tble40 w-100">
            <thead>
              <tr className='Trcolor40'>
                {/* <th scope="col-md-2">Id</th> */}
                <th scope="col-md-2">Image</th>
                <th scope="col">product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">X</th>
              </tr>
            </thead>
            {addToProducts?.map((val, ind) => {
              return (
                <tbody>
                  <tr className="Thead40 my-2" key={ind}>
                    {/* <td className="text-start">{val?.id}</td> */}
                    <td className="text-start"><img src={val?.media[0]?.media} alt="ok" width={100} className='TbleImage40' /></td>
                    <td className="text-start">{val?.title}</td>
                    <td className="text-start">${val?.discounted_price}</td>
                    <td className="text-start">{val?.qut}</td>
                    <td className="text-start">${val?.total_price}</td>
                    <td style={{ fontSize: "23px", cursor: "pointer" }} className="text-start" onClick={() => deleteItems(val?.id)}><MdDeleteForever /></td>
                  </tr>
                </tbody>
              )
            })}
          </table>

          {addToProducts.length > 0 && <div className="row justify-content-end px-3 my-4">
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title className="my-2 text-dark">Cart Totals</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Subtitle className="my-2 text-dark">Subtotal</Card.Subtitle>
                  <Card.Subtitle className="my-2 text-dark">$75</Card.Subtitle>
                </div>
                <div className="d-flex justify-content-between">
                  <Card.Subtitle className="my-2 text-dark">Shipping</Card.Subtitle>
                  <Card.Subtitle className="my-2 text-dark">$5</Card.Subtitle>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <Card.Title className="my-2 text-dark">Cart Totals</Card.Title>
                  <Card.Title className="my-2 text-dark">$
                    {addToProducts?.reduce((a, b) => {
                      return a + b.total_price
                    }, 0)}
                  </Card.Title>
                </div>
                <Form.Select aria-label="Default select example text-dark" onChange={(e) => SelectorData(e)}>
                  <option className="text-dark" value="cash_on_delivery">Cash On delivery</option>
                  <option className="text-dark " value="card">Card</option>
                </Form.Select>
                {select === "card" ? <Button onClick={() => orderStore()} className="my-3 w-100" href="#">Card</Button> :
                  <Button onClick={() => {
                    orderStore()
                  }} className="my-3 w-100" href="#">Cash on delivery</Button>}
              </Card.Body>
            </Card>
          </div>}
        </div>
        <Footer />
      </>}
    </>
  );
};

export default ShoppingCard;
