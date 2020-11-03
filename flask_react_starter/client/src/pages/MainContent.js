import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import UserList from '../components/UsersList';
import CreateOrPlayPage from './CreateOrPlayPage';
import CreateAdventurePage from './CreateAdventurePage';
import AdventureForm from './AdventureForm';
import AdventureView from './AdventureView'
import AdventureEdit from './AdventureEdit'
import AdventurePlay from './AdventurePlay'
import PageForm from './PageForm';
import PageView from './PageView'
import PageEdit from './PageEdit'
import CreateCharacterPage from './CreateCharacterPage'
import CharacterForm from './CharacterForm'
import CharacterView from './CharacterView'
import DiceRoller from '../components/DiceRoller'
import NavBar from '../components/NavBar'
import '../CSS_MODULES/body.css'
import styles from '../CSS_MODULES/main_content.module.css'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { setUserAdventures } from '../store/adventures'
import { setUserPages } from '../store/pages'
import { setUserLinks } from '../store/links'
import { setUserCharacters } from '../store/characters'

function MainContent(props) {



    const userId = useSelector(state => state.session.userId)

    const dispatch = useDispatch()

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

            const getCharacters = async () => {
                await dispatch(setUserCharacters(userId));
            }
            getCharacters()

            const getLinks = async () => {
                await dispatch(setUserLinks(userId));
            }
            getLinks()
        }
    }, [dispatch, userId])



    return (
        <>
            <div className={styles.main_container}>
                <NavBar />
                <div className={styles.dice_room}>
                    <div className={styles.left_spacer}></div>
                    {userId ?
                        <Switch>
                            <Route path="/choose">
                                <CreateOrPlayPage />
                            </Route>
                            <Route path="/create-adventure">
                                <CreateAdventurePage />
                            </Route>
                            <Route path="/adventure-form">
                                <AdventureForm />
                            </Route>
                            <Route path="/adventure-view">
                                <AdventureView />
                            </Route>
                            <Route path="/adventure-edit">
                                <AdventureEdit />
                            </Route>
                            <Route path="/adventure-play">
                                <AdventurePlay />
                            </Route>
                            <Route path="/page-form">
                                <PageForm />
                            </Route>
                            <Route path="/page-view">
                                <PageView />
                            </Route>
                            <Route path="/page-edit">
                                <PageEdit />
                            </Route>
                            <Route path="/create-character">
                                <CreateCharacterPage />
                            </Route>
                            <Route path="/character-form">
                                <CharacterForm />
                            </Route>
                            <Route path="/character-view">
                                <CharacterView />
                            </Route>
                            <Route path="/">
                                <HomePage />
                            </Route>
                        </Switch>
                        :
                        <Switch>
                            <Route path="/">
                                <HomePage />
                            </Route>
                        </Switch>}
                    <DiceRoller />
                </div>
            </div>
            <Footer />
        </>
    )
}



export default MainContent;
