import React from 'react';
import "../../style/signup.css";
import { IoMdContact } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLockAlt } from 'react-icons/bi';
import { MdOutlineContactMail } from 'react-icons/md';
import axios from 'axios';
import { Baseurl } from '../Baseurl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Define a Yup schema for validation
const validationSchema = Yup.object({
  fname: Yup.string().required('Name is required'),
  lname: Yup.string().required('lname is required'),
  username: Yup.string().required('username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('address is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
});

const Signup = () => {

  const token = localStorage.getItem("userToken")
  const navigate = useNavigate();
const [TpePasw, setTpePasw] = useState('password')

  const initialValues = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    address: "",
    password: ""
  };

  // const handleSubmit = (values) => {
  //   // Handle form submission
  //   console.log(values, "Handle form submission");
  // };

  // const [inpt, setInpt] = useState({
  //   fname: "",
  //   lname: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   address: ""

  // });




  // const inputData = (e) => {
  //   e.preventDefault();
  //   const datName = e.target.name;
  //   const datValue = e.target.value;
  //   setInpt({ ...inpt, [datName]: datValue })
  // }



  // console.log([inpt.fname, inpt.lname, inpt.email, inpt.password])


  const handleSubmit = (values, { resetForm }) => {

    const formdata = new FormData();

    formdata.append("username", values.username)
    formdata.append("fname", values.fname)
    formdata.append("lname", values.lname)
    formdata.append("email", values.email)
    formdata.append("password", values.password)
    formdata.append("address", values.address)

    // console.log(inpt)

    const configProduct = {
      method: "POST",
      url: `${Baseurl.baseurl}/api/register`,
      data: formdata,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    axios(configProduct)
      .then((res) => {
        navigate('/login')
        resetForm();
        console.log(res, "product Response----->")
      }).catch((err) => {
        console.log(err)
      })
  }
  // const register = () => {
  //   userRegiter();
  // }

  return (
    <div className="body3322" style={{ backgroundColor: 'white' }}>
      <div className="form121 shadow">
        {/*  <input type="text" placeholder="Your First Name" />
        <input type="email" placeholder="Your Last Name" />
        <input type="email" placeholder="User Name" />
        <input type="email" placeholder="Your Email" />
        <input type="email" placeholder="Your Password" />
        <textarea type="text" placeholder="Your Address" ></textarea>
        <a href="_" type="button">Sign in</a>
        <p style={{color:"#FFA500", backgroundColor:"transparent"}}>or sign up with</p> */}

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ resetForm }) => (

            <Form>
              <h2 className='fw-bold' style={{ color: "#FFA500" }}>Sign up</h2>

              <div className='position-relative'>
                <Field className='input ps-3' type="text" id="fname" name="fname" placeholder='fname' autoComplete='off' />
                <IoMdContact style={{ fontSize: "25px", position: "absolute", right: "10px", bottom: "18px", background: "#FFA500" }} />
              </div>
              <div className='text-start'>
                <ErrorMessage className='text-warning' name="fname" component="div" />
              </div>

              <div className='position-relative'>
                <Field className='input ps-3' type="text" id="lname" name="lname" placeholder='lname' autoComplete='off' />
                <IoMdContact style={{ fontSize: "25px", position: "absolute", right: "10px", bottom: "18px", background: "#FFA500" }} />
              </div>
              <div className='text-start'>
                <ErrorMessage className='text-warning' name="lname" component="div" />
              </div>

              <div className='position-relative'>
                <Field className='input ps-3 ' type="text" id="lname" name="username" placeholder='username' autoComplete='off' />
                <IoMdContact style={{ fontSize: "25px", position: "absolute", right: "10px", bottom: "18px", background: "#FFA500" }} />
              </div>
              <div className='text-start'>
                <ErrorMessage className='text-warning' name="username" component="div" />
              </div>

              <div className='position-relative'>
                <Field className='input ps-3' type="email" id="email" name="email" placeholder='Email' autoComplete='off' />
                <HiOutlineMail style={{ fontSize: "25px", position: "absolute", right: "10px", bottom: "18px", background: "#FFA500" }} />
              </div>
              <div className='text-start'>
                <ErrorMessage className='text-warning' name="email" component="div" />
              </div>

              <div className='position-relative'>
                <Field className='input ps-3' type="text" id="address" name="address" placeholder='address' autoComplete='off' />
                <MdOutlineContactMail style={{ fontSize: "25px", position: "absolute", right: "10px", bottom: "18px", background: "#FFA500" }} />
              </div>
              <div className='text-start'>
                <ErrorMessage className='text-warning' name="address" component="div" />
              </div>

              <div className='position-relative'>
                <Field className='input ps-3' type={TpePasw?"password":"text"} id="password" name="password" placeholder='password' autoComplete='off' />
                <BiLockAlt onClick={()=>setTpePasw(!TpePasw)} style={{ fontSize: "25px", position: "absolute", right: "10px", bottom: "18px", background: "#FFA500", cursor:"pointer"}} />
              </div>
              <div className='text-start'>
                <ErrorMessage className='text-warning' name="password" component="div" />
              </div>
              <div className="social">
                Already a member? &nbsp; <Link style={{background:"none", boxShadow:"none", padding:'0', margin:"0", }} to={"/"}>Log in</Link>
              </div>

              <div className='mt-2 text-center'>
                <button type="submit" style={{ background: "#FFA500" }} className='btn border-0 ' >Register</button>
              </div>
            </Form>
          )}
        </Formik>


        {/* <div class="socials">
          <img src="https://i.pinimg.com/originals/b3/da/ac/b3daac6815ebf1516a545db6c3e40a36.jpg" alt="" />
          <img src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-orange.png" alt="" />
          <img src="https://i.pinimg.com/originals/ac/cf/1d/accf1d80314304e11e2bcf9537e13304.jpg" alt="" />
        </div> */}
      </div>
      <div class="circle"></div>
      <div class="circle-1"></div>
      <div class="circle-2"></div>
    </div>
  )
}

export default Signup 