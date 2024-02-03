import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Update import
import '../public/styles.css';
import Header from './components/shared/header.jsx';
import Footer from './components/shared/Footer.jsx';
import { Home } from "@mui/icons-material";
import CourseRegistration from './components/CourseRegistration.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <Header />
                    <Routes>  
                        <Route path="/register" element={<CourseRegistration />} />
                       
                    </Routes>
                    <Footer />
                </>
            </Router>
            <>
                <Header />
                <Home />
                <Footer />
            </>
        );
    }
}

const contents = document.getElementById("contents");
const root = createRoot(contents);
root.render(<App />);