import React from 'react'
import "./Category.css"
import WomenImage1 from "../../asset/images/friend4.jpg"
import WomenImage2 from "../../asset/images/friend5.jpg"
import WomenImage3 from "../../asset/images/friend6.jpg"
import WomenImage4 from "../../asset/images/friend7.jpg"
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {IoMdSend } from 'react-icons/io';
import Navbar from '../navbar/navbar'
import Footer from '../hero-section/footer'




const Category = () => {
    return (
        <>
        <Navbar />
            <div className="container-fluid">
                <small className='homeheading m-0'>Home <small className='SectionIcon'><IoMdSend /></small> Women</small>
                <div className='CategoryDivTilte'>
                <small className='CategoryText'>WOMEN</small>
                </div>
            </div>
            <div className="container mdcontainer">
                <div className="row row-cols-1 row-cols-md-6 g-4">
                    <div className="col Women-Card ">
                        <div className="card womenCardimage">
                            <img src={WomenImage1} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage2} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage3} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage4} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage1} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage2} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage3} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage4} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage1} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage4} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage3} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p className='d'>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col Women-Card mb-5">
                        <div className="card womenCardimage">
                            <img src={WomenImage4} className="card-img-top" alt="..." />
                            <div className="card-body CardBodyTilte">
                                <h6 className="card-title mb-0">Card title</h6>
                                <div className='d-flex p-0'>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStar /> </p>
                                    <p className="card-text"><FaStarHalfAlt /></p>
                                    <small className="text-start1">4.0<p>(2,200)</p></small>
                                </div>
                                <p className="card-text Price">₹ 2,350/month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Category