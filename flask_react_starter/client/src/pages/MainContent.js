import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import UserList from '../components/UsersList';
import CreateOrPlayPage from './CreateOrPlayPage';
import CreateAdventurePage from './CreateAdventurePage';
import AdventureForm from './AdventureForm';
import PageForm from './PageForm';
import AdventureView from './AdventureView'


function MainContent(props) {

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                    <li><NavLink to="/choose" activeclass="active">Create or Play</NavLink></li>
                    <li><NavLink to="/create-adventure" activeclass="active">Create Adventure</NavLink></li>
                    <li><NavLink to="/adventure-form" activeclass="active">Adventure Form</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>
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
                    <AdventureView/>
                </Route>
                <Route path="/page-form">
                    <PageForm />
                </Route>
                {/* <Route path="/page-view">
                    <PageView/>
                </Route> */}
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </>
    )
}



export default MainContent;
