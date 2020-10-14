import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './pages/MainContent'


function App() {
    useEffect(() => {
        const getCSRF = async () => {
            const res = await fetch('/api/session/csrf');

            if (res.ok) {
                return;
            }
        }

        getCSRF();

        const script = document.createElement('script');
        script.async = true;
        script.src = "https://kit.fontawesome.com/f2d99464c5.js"
        script.crossOrigin = "anonymous"
        document.head.appendChild(script)
    }, []);



    return (
        <BrowserRouter>
            <MainContent />
        </BrowserRouter>
    );
}

export default App;
