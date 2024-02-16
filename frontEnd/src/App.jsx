import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../public/styles.css";
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Register from "./components/Register.jsx";
import Webstore from "./components/Webstore.jsx";
import CourseList from "./components/CourseList.jsx";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/course" element={<Course />} /> */}
                <Route path="/courselist" element={<CourseList />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/webstore" element={<Webstore />} />
            </Routes>
            <Footer />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App />);
