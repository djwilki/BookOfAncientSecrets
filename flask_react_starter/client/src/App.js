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
    }, []);



    return (
        <BrowserRouter>
            <MainContent />
        </BrowserRouter>
    );
}

export default App;
