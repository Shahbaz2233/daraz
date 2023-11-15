import React from "react";
import "../../style/Listing.css";
import { FaTruck } from 'react-icons/fa';
// import { AiOutlineStar } from "react-icons/ai";
import Navbar from "../navbar/navbar";
import Footer from "../hero-section/footer";
import { useDispatch } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Baseurl } from "../Baseurl";
import { useEffect } from "react";
import { header2 } from "../config";
import { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { addItemToCart } from "../../Redux/Reducer/Reducer";
import { Vortex } from "react-loader-spinner";

const Listing = () => {
  const [count, setCount] = useState(1);
  const [listData, setListData] = useState();
  const [RecoProds, setRecoProds] = useState();
  const [object, setObject] = useState();
  const { id } = useParams();

  const [loader, setLoader] = useState(false);




  const ShowProductsList = async () => {
    setLoader(true)
    const response = await axios.get(`${Baseurl.baseurl}/api/products/${id}`, header2)
    try {
      setLoader(false)
      console.log(response)
      setListData(response?.data?.data?.media)
      setObject(response?.data?.data);
    }
    catch (error) {
      setLoader(false)
      console.log(error)
    }
  }

  // RecommentProducts
  const RecommentedShowProductsList = async (id) => {
    setLoader(true)
    const responce = await axios.get(`${Baseurl.baseurl}/api/products/${id}`, header2)
    try {
      setLoader(false)
      setCount(1)
      setListData(responce?.data?.data?.media)
      setObject(responce?.data?.data);
    }
    catch (error) {
      setLoader(false)
      console.log(error)
    }

  }
  const RecommendedProducts = () => {
    axios.get(`${Baseurl.baseurl}/api/products/recommended/${id}`, header2).then((res) => {
      setRecoProds(res?.data?.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  // RecommentProducts


  const Toast1 = () => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'successfully add cart',
      icon: 'success',
      iconColor: 'green',
      color: 'green',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }

    })


  }
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const addtocard = () => {
    Toast1();
    const Data = {
      media: object.media,
      title: object.title,
      discounted_price: `${object.discounted_price == null ? object.price : object.discounted_price}`,
      total_price: `${object.discounted_price == null ? object.price : object.discounted_price}`,
      qut: count,
      id: object.id,
    };
    dispatch(addItemToCart(Data));
  }

  console.log(object, "object")
  useEffect(() => {
    ShowProductsList();
    RecommendedProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
      /></div> :
        <div>
          <Navbar />
          <div className="container bg-black">
            <div className="row">
              <div className="col-sm-6 mt-5">
                <Card style={{ backgroundColor: "#ffffff1c", borderRadius: "4px", padding:"5px" }}>
                  <Carousel>
                    {listData?.map(medVal => (
                      <Carousel.Item
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "15px",
                          border:"none"
                        }}
                        key={medVal.id}
                      >
                        {medVal?.type === 'image' ? (
                          <img src={medVal.media} type={medVal.type} alt="jacket" width="250px" />
                        ) : (
                          <video width="100%" height="100%" controls>
                            <source src={medVal?.media} type={medVal.type} />
                          </video>
                        )}
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Card>
                <div className="row row-cols-6 row-cols-md-1 d-flex g-6 MinSlideContent">
                  {listData?.map((medVal) => (
                    <div className="col w2 m-2" key={medVal.id}>
                      <div className="card Content" style={{ width: '9rem',padding:"5px", height: "7rem", position: "relative" }}>
                        {medVal?.type === 'image' ? (
                          <img src={medVal.media} type={medVal.type} alt="jacket" width="100%" height="100%" />
                        ) : (
                          <video width="100%" height="100%" controls>
                            <source src={medVal?.media} type={medVal.type} />
                          </video>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="info mt-5">
                  <div>
                    <h1 className="big h ligt">{object?.title}</h1>
                    <span className="new">
                      <p className="text-dark">
                        {/* <AiOutlineStar />
                        <AiOutlineStar className="fa" />
                        <AiOutlineStar className="fa" />
                        <AiOutlineStar className="fa" />
                        <AiOutlineStar /> */}
                        (2,233)
                      </p>
                    </span>
                  </div>
                  <div className="description">
                    <p className="text ligt">{object?.description}</p>
                  </div>
                  {object?.discounted_price === null ? (
                    <div className="description">
                      <p className="text ligt">${object?.price}</p>
                    </div>
                  ) : (
                    <div className="description">
                      <p className="text ligt">${object?.discounted_price}</p>
                    </div>
                  )}
                  <div className="color-container">
                    <p className="title ligt">
                      <FaTruck /> Shipped in 3 days
                    </p>
                
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <div className="number">
                        <span style={{ cursor: "pointer" }} className="minus" onClick={decrement}>
                          -
                        </span>
                        <input className="inpstyle mx-1 text-dark" type="text" value={count} />
                        <span style={{ cursor: "pointer" }} className="plus" onClick={increment}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="watch-name float-center">
                    <span></span>
                  </div>
                  <div className="col-md-12">
                    <button onClick={addtocard} htmlFor="#" className="btn btn-primary rounded border-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="mt-5 text-dark">Recommended Products</h1>
            <div className="d-flex flex-wrap align-items-center">
              {RecoProds?.map((val) => (
                <Card
                  onClick={() => RecommentedShowProductsList(val?.id)}
                  // style={{ width: '18rem', margin: "25px", background:"#746e6e17" }}
                  className="recommended-products"
                >
                  <Card.Img style={{ width: '60%', padding:"5px"}} variant="top" src={val?.media[0]?.media} />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>{val?.title}</Card.Title>
                    <Card.Text>{val.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>


            {/* <div className="col-md-12  p-5 midleContainer">
              <div className="col-sm-6 feature-margin1" >
                <p className="siz">Size & Dimensions</p>
                <p className="ligt"><span className="BoldText">.</span> 24"L x 23"B x 39"H
                </p>
                <p className="ligt"><span className="BoldText">.</span> Safety & usage
                </p>
                <p className="ligt"><span className="BoldText">.</span> Do not overload the
                  washing machine</p>
                <p className="ligt"><span className="BoldText">.</span> Ensure to clean inside the
                  drum to avoid damage</p>
              </div>

              <div className="col-sm-6 feature-margin" >
                <p className="feature">Feature & Specifica</p>
                <p className="ligt"><span className="BoldText">.</span> Capacity/Size : 5.8 to 6.5</p>
                <p className="ligt"><span className="BoldText">.</span> Brand May vary
                </p>
                <p className="ligt"><span className="BoldText">.</span> Whirlpool/Haier/Godrej
                </p>
              </div>

            </div> */}

            {/* <div className="container bor ">
              <h1 className="frequently">Frequently Asked Ques</h1>
              <div className="accordion w-100" id="basicAccordion">
                <div className="accordion-item blk">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button blk collapsed" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Q1: The standard Lorem Ipsum passage, used since the 1500s
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item blk">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed blk" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Q2: The standard Lorem Ipsum passage, used since the 1500s
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item blk">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed blk" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Q3: The standard Lorem Ipsum passage, used since the 1500s
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body ">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item blk">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed blk" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Q4: The standard Lorem Ipsum passage, used since the 1500s
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item blk">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed blk" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Q5: The standard Lorem Ipsum passage, used since the 1500s
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item blk">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed blk" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Q6: The standard Lorem Ipsum passage, used since the 1500s
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Frequently Asked Ques */}

          </div>
            <Footer />
        </div>
      }
    </>
  );
}

export default Listing;
