import React from "react";
import { createRoot } from 'react-dom/client';
import '../public/styles.css'; 
import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Footer />
            </>
        );
    }
}

const contents = document.getElementById("contents");
const root = createRoot(contents);
root.render(<App />);