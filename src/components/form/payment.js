import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../style/payment.css"
import Navbar from '../navbar/navbar'
import Eesypaisaimg40 from "../../asset/images/Easypaisa.png"
import JazzCash40 from "../../asset/images/JazzCash40.png"

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 text-dark bg-white py-3'>
            <div className="dropdown">
              <button className="btn text-dark bg-white dropdown-toggle border-0 fs-3 fw-bold" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Payment Method
              </button>
              <ul style={{ width: "250px" }} className="dropdown-menu dropdown-menu-dark bg-white" aria-labelledby="dropdownMenuButton2">
                <li>
                  <NavLink className="dropdown-item active bg-white d-flex justify-content-around align-items-center" to="#">
                    <img src={Eesypaisaimg40} alt="ok" className='Eesypaisaimg40' />
                    <button id='Eesy40' className="btn bg-white text-end fs-5 fw-bold text-dark w-100 border-0 rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">EasyPaisa</button></NavLink></li>
                <li><NavLink className="dropdown-item active bg-white d-flex justify-content-around align-items-center" to="#"><img src={JazzCash40} alt="ok" className='JazzCashimg40' /><button id='Eesy40' className="btn bg-white text-end fs-5 fw-bold text-dark w-100 border-0 rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">JazzCash</button></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row mainDiv40'>
          <div className="col-md-5">
            <div className='maindiv'>
              <p style={{ color: "#a48528", margin: '0' }} className='text-center fs-1 fw-bold'>SECURE CHECKOUT</p>
              <br />
              <label className='ps-4 fs-5 fw-bold'>Enter Account Number or IBAN</label>

              <div className='position-relative my-2'>
                <input className='bordrinput40x ps-5' type="text" placeholder='xxxxxxxxxxxxx' />
                <div className='Bordrstyle40'></div>
              </div>
              <br />
              <label className='ps-4 fs-5 fw-bold'>Enter Purpose Of Payment</label>
              <div className='position-relative my-2'>
                <input className=' bordrinput40x ps-5' type="text" placeholder='xxxxxxxxx' />
                <div className='Bordrstyle40'></div>
              </div>
              <br />
              <label className=' ps-4 fs-5 fw-bold'>Enter Amount </label>
              <div className='position-relative my-2'>
                <input className='bordrinput40x ps-5' type="text" placeholder='xxxxxxxxx' />
                <div className='Bordrstyle40'></div>
              </div>
              <div className='my-2 text-center'>
                <input className='bordrinput40x fw-bold bg-body text-dark' type="button" value='PAY NOW' />
              </div>
            </div>
          </div>
          <div>

            <div className="offcanvas offcanvas-end OffCanvas40x bottom-0" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="mainDiv40x"></div>
              <div className="offcanvas-header" style={{ zIndex: "3" }}>
                <h5 id="offcanvasRightLabel" className='text-dark fs-4 fw-bold'>Order Summary</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div style={{ zIndex: "123" }} className="offcanvas-body">
                <p className='fs-6 fw-bold text-dark'>
                  Subtotal(1 item and shipping fee included)
                </p>
                <br />
                <p className='fs-6 fw-bold text-dark' >
                  Have a discount code?
                </p>
                <input type="text" className='bgColor26' placeholder='xxxxx' />
              </div>
              <div className="footer40x justify-content-around mb-3" style={{ zIndex: "3" }}>
                <h4 className="rupee text-dark fw-bold">Total Amount</h4>
                <h4 className="rupee text-dark fw-bold"><span className="rupee text-dark fw-bold">Rs.</span> 5000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment;