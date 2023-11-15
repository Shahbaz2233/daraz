import React from 'react'
import Body from '../hero-section/body'
import Footer from '../hero-section/footer'
import Product from '../hero-section/product'
import SellingPackage from '../hero-section/sellingPackage'
import Navbar from '../navbar/navbar';
import { useState } from 'react'


const MainDiv = () => {
  
  const [cate, setCate] = useState();
  const idCatgory = (id) => {
    setCate(id)
  }

return (
  <>
    <Navbar />
    <Body />
    <Product idCatgory={idCatgory} />
    <SellingPackage cate={cate} />
    <Footer />
  </>
)
}

export default MainDiv