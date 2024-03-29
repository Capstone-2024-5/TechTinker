import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles.css";
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import Home from "./components/techtinker/Home.jsx";
import Contact from "./components/techtinker/Contact.jsx";
import Register from "./components/Register.jsx";
import Webstore from "./components/Webstore.jsx";
import CourseList from "./components/CourseList.jsx";
import Faqs from "./components/techtinker/Faqs.jsx";
import AboutUs from "./components/techtinker/AboutUs.jsx";
import Events from "./components/events.jsx";
import AdminLogin from "./components/techtinker/AdminLogin.jsx";
import AdminMain from "./components/techtinker/AdminMain.jsx";
import CheckOut from "./components/CheckOut.jsx";
import CourseDetails from "./components/CourseDetails.jsx";
import CourseAdd from "./components/CourseAdd.jsx";

const App = () => {
    // Define state to store form data
    const [formData, setFormData] = useState(null);

    // State to manage cart count
  const [cartCount, setCartCount] = useState(0);

    // Callback function to receive form data from child component
    const handleFormData = (data) => {
        setFormData(data);
    };

    // Function to handle adding items to the cart
  const handleAddToCart = () => {
    // Logic to add item to the cart
    setCartCount(cartCount + 1); // Increment cart count
  };

    return (
        <Router>
            <Header cartCount={cartCount} handleAddToCart={handleAddToCart} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courselist" element={<CourseList />} />
                <Route path="/events" element={<Events />} />
                <Route path="/courselist/:courseid" element={<CourseDetails />} />
                <Route path="/courseadd" element={<CourseAdd />} />
                <Route path="/contact-us" element={<Contact />} />
                {/* Pass handleFormData as a prop to Register component */}
                <Route path="/register" element={<Register handleFormData={handleFormData} />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/webstore" element={<Webstore handleAddToCart={handleAddToCart} />} />
                <Route path="/admin_login" element={<AdminLogin/> } />
                <Route path="/admin_main" element={<AdminMain/>} />

                {/* Pass formData as a prop to CheckOut component */}
              
        <Route path="/checkout" element={<CheckOut formData={formData} />} />
            </Routes>
            <Footer />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
