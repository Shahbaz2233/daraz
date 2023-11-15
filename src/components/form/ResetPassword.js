import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Baseurl } from '../Baseurl';
import { useNavigate } from 'react-router-dom';
import "../../style/sign.css";

const ResetPassword = () => {
const navigate = useNavigate();

    const getData = async () => {
        const formdata = new FormData()
        formdata.append("token", inpt.Tokencode);
        formdata.append("password", inpt.password);
        formdata.append("password_confirmation", inpt.password_confirmation);

        try {
            const res = await axios.post(`${Baseurl.baseurl}/api/reset_password`, formdata)
            if (res.data.status === true) {
                alert(res.data.response)
                navigate("/")
                setInpt({
                    Tokencode: "",
                    password: "",
                    password_confirmation: ""
                });
            } else {
                alert(res.data.error)
            }

            console.log(res.data.response, "token")
        }
        catch (error) {
            console.log(error)
        }
    }

    const [inpt, setInpt] = useState({
        Tokencode: "",
        password: "",
        password_confirmation: ""
    });

    const inputData = (e) => {
        const datName = e.target.name;
        const datValue = e.target.value;
        setInpt({ ...inpt, [datName]: datValue })
    }


    console.log(inpt.password_confirmation, inpt.password, inpt.Tokencode, "inptEmail")

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
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input type="password" name='password' onChange={(e) => inputData(e)} value={inpt.password} id="form2Example1" className="form-control" placeholder='password'/>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input type="password" name='password_confirmation' onChange={(e) => inputData(e)} value={inpt.password_confirmation} class="form-control" placeholder=" confirm-password"/>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input type="password" name='Tokencode' onChange={(e) => inputData(e)} value={inpt.Tokencode} id="form2Example1" className="form-control" placeholder="Enter token code"/>
                </div>
  
                <button type="button" onClick={() => getData()} className="btn btn-secondary btn-block">Reset password</button>

                
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ResetPassword;