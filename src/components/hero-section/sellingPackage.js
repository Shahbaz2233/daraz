import React, { useEffect, useState } from "react";
import "../../style/sellingPackage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl } from "../Baseurl";
// import { header2 } from "../config";
import { Card } from "react-bootstrap";
import { Vortex } from "react-loader-spinner";
import imgpro from "../../asset/populorproduct.jpg"

const SellingPackage = ({ cate }) => {
  console.log(cate, "cate");
  const navigate = useNavigate();
  const [resData, setResData] = useState();
  const [resPopular, setResPopular] = useState();
  const [loader, setLoader] = useState(false);

  const token2 = localStorage.getItem("userToken")
  const header2 = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token2}`
    }
  }
  const GetApiProduct = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${Baseurl.baseurl}/api/products`, header2);
      setLoader(false);
      if (response.status === 200 && response.data.status === true) {
        setResData(response?.data?.data);
      } else {
        setLoader(false);
        console.log(response.data.error);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  // category_product
  const category_product = resData?.filter((val) => val?.category?.id === cate);
  // category_product


  const PopularApiProduct = () => {
    axios
      .get(`${Baseurl.baseurl}/api/popular_products`, header2)
      .then((res) => {
        if (res.status === 200 && res.data.status === true) {
          setResPopular(res?.data?.data);
        } else {
          console.log(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetApiProduct();
    PopularApiProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tolisting = (id) => {
    navigate(`/listing/${id}`);
  };

  return (
    <>
      {loader ? <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center w-100"><Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      /></div> :
        <div className="container mt-5F">
          <h1 className="fs-4 fw-bold text-center text-dark">Best Selling Packages</h1>
          {!category_product || category_product.length === 0 ? (
            <div className="main-Div">
              {resData?.map((val) => (
                <Card style={{ border: 'none' }} key={val.id} onClick={() => tolisting(val?.id)} className="selling-card" >

                  {val?.media?.map((medVal) => (
                    <div key={medVal.id} className="selling-card-image-wrapper">
                      {medVal?.type === "image" && (
                        <img
                          src={medVal.media}
                          type={medVal.type}
                          alt="jacket"
                          className="selling-card-image"
                        />
                      )}
                    </div>
                  ))}
                  <div className="selling-card-details">
                    <Card.Title>{val.title}</Card.Title>
                    <div className="fs-6 fw-bold text-dark">
                      Price:{" "}
                      {val.discounted_price ? (
                        <>
                          <strike className="fs-6 fw-bold text-dark">{val.price}</strike>{" "}
                          <span className="fs-6 fw-bold text-dark">{val.discounted_price}</span>
                        </>
                      ) : (
                        <span className="fs-6 fw-bold text-dark">{val.price}</span>
                      )}
                    </div>
                    <Card.Text>{val.description}</Card.Text>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="main-Div">
              {category_product?.map((val) => (
                <Card style={{ border: 'none' }} key={val.id} onClick={() => tolisting(val?.id)} className="selling-card" >
                  {val?.media?.map((medVal) => (
                    <div
                      key={medVal.id}
                      className="selling-card-image-wrapper"
                    >
                      {medVal?.type === "image" && (
                        <img
                          src={medVal.media}
                          type={medVal.type}
                          alt="jacket"
                          className="selling-card-image"
                        />
                      )}
                    </div>
                  ))}
                  <div className="selling-card-details">
                    <Card.Title>{val.title}</Card.Title>
                    <div className="fs-6 fw-bold text-dark">
                      Price:{" "}
                      {val.discounted_price ? (
                        <>
                          <strike className="fs-6 fw-bold text-dark">{val.price}</strike>{" "}
                          <span className="fs-6 fw-bold text-dark">{val.discounted_price}</span>
                        </>
                      ) : (
                        <span className="fs-6 fw-bold text-dark">{val.price}</span>
                      )}
                    </div>
                    <Card.Text>{val.description}</Card.Text>
                  </div>
                </Card>
              ))}
            </div>
          )}
          <img src={imgpro} alt="Popular Products" width={'100%'} />
          <h1 className="fw-bold fs-3 text-dark text-center">Popular Products</h1>
          <div className="main-Div">
            {resPopular?.map((val) => (
              <Card
                style={{ border: "none" }}
                key={val.id}
                onClick={() => tolisting(val?.id)}
                className="selling-card"
              >
                {val?.media?.map((medVal) => (
                  <div

                    key={medVal.id}
                    className="selling-card-image-wrapper"
                  >
                    {medVal?.type === "image" && (
                      <img
                        src={medVal.media}
                        type={medVal.type}
                        alt="jacket"
                        className="selling-card-image"
                      />
                    )}
                  </div>
                ))}
                <div className="selling-card-details">
                  <Card.Title>{val.title}</Card.Title>
                  <div className="fs-6 fw-bold text-dark">
                    Price:{" "}
                    {val.discounted_price ? (
                      <>
                        <strike className="fs-6 fw-bold text-dark">{val.price}</strike>{" "}
                        <span className="fs-6 fw-bold text-dark">{val.discounted_price}</span>
                      </>
                    ) : (
                      <span className="fs-6 fw-bold text-dark">{val.price}</span>
                    )}
                  </div>
                  <div>
                    <Card.Text className="fs-6 fw-bold text-dark">
                      Sell products: {val.order_items_count}
                    </Card.Text>
                  </div>
                  <Card.Text>{val.description}</Card.Text>
                </div>
              </Card>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default SellingPackage;
