import React from "react";
import ReactDOM from "react-dom";
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
import AdminLogin from "./components/techtinker/AdminLogin.jsx";
import AdminMain from "./components/techtinker/AdminMain.jsx";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courselist" element={<CourseList />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/webstore" element={<Webstore />} />
                <Route path="/admin_login" element={<AdminLogin/> } />
                <Route path="/admin_main" element={<AdminMain/>} />
            </Routes>
            <Footer />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App />);
