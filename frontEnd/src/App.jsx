import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../public/styles.css";
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
import CheckOut from "./components/CheckOut.jsx";

const App = () => {
    // Define state to store form data
    const [formData, setFormData] = useState(null);

    // Callback function to receive form data from child component
    const handleFormData = (data) => {
        setFormData(data);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courselist" element={<CourseList />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact-us" element={<Contact />} />
                {/* Pass handleFormData as a prop to Register component */}
                <Route path="/register" element={<Register handleFormData={handleFormData} />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/webstore" element={<Webstore />} />
                {/* Pass formData as a prop to CheckOut component */}
              
        <Route path="/checkout" element={<CheckOut formData={formData} />} />
            </Routes>
            <Footer />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App />);
