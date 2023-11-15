import React from "react";
import MainDiv from "./components/main-div/main-div";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Category from "./components/Category/Category";
import Listing from "./components/product/Listing";
import Signup from "./components/form/signup";
import Payment from "./components/form/payment";
import Login from "./components/form/login";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import ResetPassword from "./components/form/ResetPassword";
import Margin from "./Margin";

const App = () => {

  return (
    <div >
      <Router>
        <Routes><Route path="/" element={<Login />} /></Routes>
        <Routes><Route path="/home" element={<MainDiv />} /></Routes>
        <Routes><Route path="/category" element={<Category />} /></Routes>
        <Routes><Route path="/listing/:id" element={<Listing />} /></Routes>
        <Routes><Route path="/cart" element={<ShoppingCard />} /></Routes>
        <Routes><Route path="/signup" element={<Signup />} /></Routes>
        <Routes><Route path="/login" element={<Login />} /></Routes>
        <Routes><Route path="/payment" element={<Payment />} /></Routes>
        <Routes><Route path="/resetpassword" element={<ResetPassword />} /></Routes> 
        <Routes><Route path="/margin" element={<Margin />} /></Routes> 
      </Router>

    </div>
  );
};

export default App;
