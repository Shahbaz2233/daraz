import React from "react";
import "../../style/footer.css";
import img04 from "../../asset/image04.png";

const Footer = () => {
  return (
    <>
      <div className="container footer-box py-3">
         <div className="row d-lg-flex  d-sm-none d-none">
         <div className="col-lg-6 col-md-12 col-12 column01">
            <h2>Product</h2>
            <div>
              Whether you want to rent furniture or appliance, you won’t have to
              pay extra for maintenance. Most of the things in your home may
              come with the responsibility of regular upkeep. But, when you rent
              it from Voorent, we keep your things up and
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 column02">
            <img src={img04} width="100%" alt="img" />
          </div>
         </div>
         <div className="d-lg-none d-sm-block d-block">
            <div className="column01">
            <h2>Product</h2>
            <div>
              Whether you want to rent furniture or appliance, you won’t have to
              pay extra for maintenance. Most of the things in your home may
              come with the responsibility of regular upkeep. But, when you rent
              it from Voorent, we keep your things up and
            </div>
            </div>
             <div className="column02">
            <img src={img04} width="100%" alt="img" />
             </div>
         </div>
      </div>

      <div className="container-fluid footer-data" style={{ background: "rgb(26 26 25)" }}>
        <p>About us | FAQ's | Terms & Conditions | Privacy Policy</p>
        <div className="footer-btn">
          <i class="fa fa-phone-volume"></i>
          <p className="p-0 m-0">+91234 567 8910</p>
        </div>
        <div className="footer-btn">
          <i class="fa-solid fa-envelope"></i>
          <p className="p-0 m-0">putyour@email.com</p>
        </div>
        <p className="p-0 mt-1">Follow us</p>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <div className="container-fluid">
          <div className="text-center py-2">
            Copyright © 2023 HnH tech solutions. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
