import React from "react";
import "../../style/body.css";
import imag from "../../asset/images02.png";
const Body = () => {
  // const [dropdown, setDropdown] = useState(true);

  // const dropBtnOff = () => {
  //   setDropdown(false);
  // }
  // const dropBtnOn = () => {
  //   setDropdown(true);
  // }
  return (
    <div className="p-0 m-0">
      <img src={imag} width={'100%'} alt="imag" />
      {/* <div className="row justify-content-between my-3 px-0"> */}
      {/* <div className="col-4 container-div1">
          <div className="border">
          <div  className="main-div">
              <p>Filter Results</p>
              {
               dropdown?<i onClick={dropBtnOff} class="fa-solid fa-caret-down"></i>:
               <i onClick={dropBtnOn} class="fa-solid fa-caret-down"></i>
              }
            </div>
            <div style={dropdown? {display:'block'}: {display:"none"}} className="display-div">
              <div className="list-div">
                <div className="list-style">
                  <input type="checkbox"/>
                  <p className="inp">Beauty</p>
                </div>
              </div>
              <div className="list-div">
                <div className="list-style">
                  <input type="checkbox"/>
                  <p className="inp">Application</p>
                </div>
              </div>
              <div className="lion"></div>
              <div className="list-div">
                <p className="inp">Furniture</p>
              </div>
              <div className="list-div">
                <div className="list-style">
                  <input type="checkbox"/>
                  <p className="inp">Single bed (10)</p>
                </div>
              </div>
              <div className="list-div">
                <div className="list-style">
                  <input type="checkbox" />
                  <p className="inp">Double bed (12)</p>
                </div>
              </div>
              <div className="list-div">
                <div className="list-style">
                  <input type="checkbox" />
                  <p className="inp">Dining Table (8)</p>
                </div>
              </div>
              <div className="list-div">
                <div className="list-style">
                  <input type="checkbox" />
                  <p className="inp">Computer Table (8)</p>
                </div>
              </div>
              <div className="list-div">
                <div className="list-style">
                  <input type="checkbox" />
                  <p className="inp">Sofa (2)</p>
                </div>
              </div>
              <div className="list-div">
                <div className="list-style">
                  <span href="#" className="inp-text">
                    View 10 more +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 container-div2">
        </div> */}
      {/* </div> */}
      <div className="">
      </div>
    </div>
  );
};

export default Body;
