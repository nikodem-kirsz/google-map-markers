// src/App.js

import React from "react";
import Map from "./components/Map";
import Filters from "./components/Filters"

import {connect} from 'react-redux';
import SourceCreate from "./components/SourceCreate";
import Profile from "./components/Profile";
import {Footer} from "./components/Footer";
import {useAuth0} from "./react-auth0-spa";
import Menu from "./components/Menu";

export const Home = () => {
    const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0();

    return (
        <div style={{paddingTop: '10px'}}>
            {isAuthenticated && (
                <div>
                    <SourceCreate style={{float: 'left', position: 'relative'}} user={user}/>
                    {/*<div style={{float: 'right', position: 'relative'}}>*/}
                    <div style={{height: '80vh', width: '65vw', position: 'relative', float: 'right'}}>
                        <Filters/>
                        <div
                            style={{
                                height: '80vh',
                                width: '65vw',
                                display: 'flex',
                                position: 'relative',
                                flexFlow: 'row nowrap',
                                justifyContent: 'center',
                                padding: 0
                            }}
                        >
                            <Map/>
                        </div>
                    </div>
                </div>
            )}
            {!isAuthenticated && (
                <div style={{paddingTop: '10px'}}>
                    <Menu style={{float: 'left', position: 'relative'}}/>
                    <Filters/>
                    <div
                        style={{
                            height: '80vh',
                            width: '75vw',
                            display: 'flex',
                            position: 'relative',
                            flexFlow: 'row nowrap',
                            justifyContent: 'center',
                            padding: 0
                        }}
                    >
                        <Map/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;