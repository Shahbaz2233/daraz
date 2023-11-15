import React, { useState } from "react";
import "../../style/navbar.css";
// import navLogo from "../../asset/images/Shoppix-01.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { RxHamburgerMenu } from 'react-icons/rx';
import axios from "axios";
import { Baseurl } from "../Baseurl";
import { header2 } from "../config";

const Navbar = () => {
  const navigate = useNavigate();
  const [inptdata, setInptdata] = useState();
  const [inpt, setInpt] = useState();
  console.log(inpt)

  const funData = async () => {
    try {
      const apidata12 = await axios.get(`${Baseurl.baseurl}/api/products`, header2)
      const filteredData = inpt ? apidata12.data.data.filter(obj => obj.title.toLowerCase().includes(inpt.toLowerCase())) : null;

      setInptdata(filteredData);
    }
    catch (error) {
      console.log(error, "error")
    }
  }

  console.log(inptdata, "inptdata..")


  const Increment = useSelector((state) => state.cart.items);
  console.log(Increment, "Increment")

  const Toast = () => {
    if (Increment.length < 1) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Shoping Cart is Empty',
        icon: 'error',
        iconColor: '#947421',
        color: '#947421',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }

      })
    } else {
      return navigate("/cart");
    }
  }



  const tolisting = (id) => {
    navigate(`/listing/${id}`);
  };
  return (

    <>
      <nav className="navbar navbar-expand-lg bg-color nav-cont mb-1" style={{ boxShadow: '2px 2px 10px rgba(12, 1, 4, 0.4)' }}>
        <div className="container nav-box">

          {/* <img
            src={navLogo}
            alt="Logo"
            width="10%"

            className="d-inline-block align-text-top"
          /> */}
          <span className="text-dark fw-bold fs-4">Shoppix</span>
          <button
            className="navbar-toggler toggle-btn m-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <RxHamburgerMenu style={{ fontSize: "20px", background: "black" }} />
          </button>
          {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <span className="text">HNH TECH SOLUTIONS</span> */}


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav  mx-2 mb-1 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link fs-6"
                  to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link fs-6"
                  to="">
                  Sell on Daraz
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link fs-6" aria-current="page" href="#">
                  Customer care
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link fs-6" aria-current="page" href="#">
                  Track Order
                </Link>
              </li>
            </ul>
            <div style={inpt ? { position: 'relative', backgroundColor: 'white', borderRadius: "5px 5px 0px 0px", boxSizing: "border-box" } : {}}>
              <div className="input-style" style={inpt ? { margin: "0" } : {}}>
                <input
                  className="form-control  inp-form"
                  placeholder="Search"
                  onChange={(e) => {
                    setInpt(e.target.value);
                    funData();
                  }}
                />
                <i className="fa fa-magnifying-glass inp-icon"></i>
              </div>
              {inpt && <ul className="position-absolute bg-white w-100 m-0 " style={{ zIndex: "1234", borderRadius: "0px 0px 5px 5px", }}>
                {inptdata?.map((val) => {
                  return (
                    <>
                      <li onClick={() => tolisting(val?.id)} style={{ listStyle: "none", margin: "5px 4px", cursor: "pointer", }} className="text-dark">{val.title}</li>
                    </>
                  )
                })}
              </ul>}
            </div>
            <button
              type="button"
              className="card-dev mx-3 my-3 border-0 d-block"
              data-bs-toggle="modal"
              onClick={(e) => {
                // hide(!show) 
                Toast()
              }}
            >
              <i className="fa fa-cart-shopping" style={{ color: "black" }}></i>
              <div className="card-icon s40">
                {Increment.length}</div>
            </button>
            {/* <div >
                <ToastContainer style={{color:'black'}}/>
              </div> */}


            <button className="btn btn-outline-primary ms-2 my-3" type="submit">
              <NavLink
                style={{ textDecoration: "none", border: "none", color: "black" }}
                to="/login">
                Log In
              </NavLink>
            </button>
          </div>
        </div>
        {/* {show ? <Cart /> : null} */}
      </nav>
    </>
  );
};

export default Navbar;
