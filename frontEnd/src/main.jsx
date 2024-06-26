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
import CourseCRUD from "./components/CourseCRUD.jsx";
import CourseUpdate from "./components/CourseUpdate.jsx";
import StudentManagement from "./components/StudentManagement.jsx";
import AdminDashboard from "./components/techtinker/AdminDashBoard.jsx";

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
                <Route path="/courseupdate" element={<CourseCRUD />} />
                <Route path="/courseUpdate/:id" element={<CourseUpdate />} />
                <Route path="/events" element={<Events />} />
                <Route path="/courselist/:courseid" element={<CourseDetails />} />
                <Route path="/courseadd" element={<CourseAdd />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/register" element={<Register handleFormData={handleFormData} />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/webstore" element={<Webstore handleAddToCart={handleAddToCart} />} />
                <Route path="/admin_login" element={<AdminLogin/> } />
                <Route path="/admin_main" element={<AdminMain/>} />
                <Route path="/checkout" element={<CheckOut formData={formData} />} />
                <Route path="/StudentManagement" element={<StudentManagement/> } />
                <Route path="/admin_dashboard" element={<AdminDashboard/>}/>
            </Routes>
            <Footer />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
