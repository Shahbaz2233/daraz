import React, { useState } from 'react';
import "../../style/sign.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { Baseurl } from '../Baseurl';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {

  const token2 = localStorage.getItem("userToken")
  const navigate = useNavigate("");
const [typepassward, settypepassward] = useState("password")

  const [inpt, setInpt] = useState({
    email: "",
    password: ""
  });

  const inputData = (e) => {
    e.preventDefault()
    const datName = e.target.name;
    const datValue = e.target.value;
    setInpt({ ...inpt, [datName]: datValue })
  }


  const UserApi = () => {
    // setEmailError(""); // Reset email error
    // setPasswordError(""); // Reset password error

    if (inpt.email === "" || inpt.password === "") {
      alert("Please fill each Fields")

    } else {
      const formdata = new FormData();
      formdata.append("email", inpt.email)
      formdata.append("password", inpt.password)

      axios.post(`${Baseurl.baseurl}/api/login`, formdata).then((res) => {
        if (res.data.status === true) {
          localStorage.setItem("userToken", res.data.data.access_token);
          localStorage.setItem("userDetails", JSON.stringify(res.data.data));
          toast.success("Login Successfully")
          setInpt({
            email: "",
            password: ""
          })
          navigate("/home")

        } else {
          toast.error(res.data.error)
        }

      }).catch((err) => {
        console.log(err)
      })
    }
  }
  const registerlogin = () => {
    console.log(inpt, "inpt.....")
    UserApi();
  }

  const [inpFunt, setInpFunt] = useState("");

  const inputData2 = (e) => {
    e.preventDefault();
    setInpFunt(e.target.value)
  }

  console.log(inpFunt, "inpFunt")

  const submitEmail = () => {
    const formdata = new FormData();
    formdata.append("email", inpFunt)

    const apiDat = {
      method: "post",
      url: `${Baseurl.baseurl}/api/forget`,
      data: formdata,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token2}`
      }
    }

    axios(apiDat).then((res) => {
      console.log(res, "forget Api")
      if (res.data.status === true) {
        navigate("/resetpassword")
      } else (
        toast.error(res.data.message)
      )
    }).catch((err) => {
      console.log(err, "err")
    })

  }

  return (
    <div className='body123'>
      <div className="container container12">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input type="email" name='email' className="form-control" placeholder="Enter a valid email address" onChange={(e) => inputData(e)} value={inpt.email} id="form3Example3" />
              </div>
              <div className="input-group my-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i style={{cursor:"pointer"}} onClick={()=>settypepassward(!typepassward)} className="fa fa-lock"></i>
                  </span>
                </div>
                <input  name='password' onChange={(e) => inputData(e)} value={inpt.password} type={typepassward?"password":"text"} id="form3Example4" className="form-control" placeholder=" Enter password" />
              </div>

              <button onClick={registerlogin} type="button" className="btn btn-secondary btn-block" >LOGIN</button>

              <div className="message">
                <div >
                  <input type="checkbox" /> Remember ME
                </div>
                <div class="modal fade" id="exampleModal01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title text-dark" id="exampleModalLabel">Email Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <label for="recipient-name" class="col-form-label text-dark">Email:</label>
                            <input type="email" name='email' onChange={(e) => inputData2(e)} class="form-control text-dark" id="recipient-name" placeholder='abc@gmail.com' />
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" onClick={() => submitEmail()} className="btn btn-dark border-0" data-bs-dismiss="modal">Send message</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ cursor: "pointer" }} className="border-0 forget" data-bs-toggle="modal" data-bs-target="#exampleModal01" data-bs-whatever="@mdo">Forget password?</div>
                </div>
              </div>
            </form>
            <div className="social py-3">
              Not a member? &nbsp; <NavLink style={{ textDecoration: "underline" }} className="text-white" to={"/signup"}> Create Account</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
