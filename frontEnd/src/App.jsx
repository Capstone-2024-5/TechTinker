import React from "react";
import { createRoot } from 'react-dom/client';
import '../public/styles.css'; 
import Header from './components/shared/header.jsx';
import Footer from './components/shared/Footer.jsx';
import { Home } from "@mui/icons-material";

class App extends React.Component {
    render() {
        return (
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