import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './pages/MainContent'
import { loadSession } from '../src/store/session'
import { useDispatch, useSelector } from 'react-redux';
import { setUserAdventures } from '../src/store/adventures'
import { setUserPages } from '../src/store/pages'
import { setUserLinks } from '../src/store/links'
import {setSelectedAdventureId} from '../src/store/ui'
import {setSelectedPageId} from '../src/store/ui'



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


    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.userId)

    useEffect(() => {
        const load = async () => {
            const selectedAdvId = await localStorage.getItem('selectedAdventure')
            await dispatch(setSelectedAdventureId(Number(selectedAdvId)))
            const selectedPgId = await localStorage.getItem('selectedPage')
            await dispatch(setSelectedPageId(Number(selectedPgId)))
            await dispatch(loadSession());
        }
        load()
    }, [dispatch])


    useEffect(() => {
        if (userId) {
            const getAdventures = async () => {
                await dispatch(setUserAdventures(userId));
            }
            getAdventures()

            const getPages = async () => {
                await dispatch(setUserPages(userId));
            }
            getPages()

            const getLinks = async () => {
                await dispatch(setUserLinks(userId));
            }
            getLinks()


        }
    }, [dispatch, userId])


    const script = document.createElement('script');
    script.async = true;
    script.src = "https://kit.fontawesome.com/f2d99464c5.js"
    script.crossOrigin = "anonymous"
    document.head.appendChild(script)


    return (
        <BrowserRouter>
            <MainContent />
        </BrowserRouter>
    );
}

export default App;
