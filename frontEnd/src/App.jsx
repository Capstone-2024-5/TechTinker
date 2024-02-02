import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Update import
import '../public/styles.css';
import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';
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
        );
    }
}

const contents = document.getElementById("contents");
const root = createRoot(contents);
root.render(<App />);