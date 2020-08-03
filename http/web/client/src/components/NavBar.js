// src/components/NavBar.js

import React from "react";
import {useAuth0} from "../react-auth0-spa";
import {Link, useLocation, Route, Router} from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar, NavbarBrand, Switch} from "react-bootstrap";
import Profile from "./Profile";
import history from "../utils/history";
import PrivateRoute from "./PrivateRoutes";
import Map from "./Map";
import Menu from "./Menu";
import SourceCreate from "./SourceCreate";
import Filters from "./Filters";
import {useDispatch} from 'react-redux'
import {showProfile, highlightEnergySource} from '../redux/actions'

const NavBar = () => {
    const {loading, isAuthenticated, loginWithRedirect, logout, user} = useAuth0();
    const dispatch = useDispatch()

    if (loading) {
        return <div>Loading...</div>;
    }
    // const [registered, setRegistered] = useState(false);
    console.log(user)
    return (
        <div>
            {!isAuthenticated && (
                <Router history={history}>
                    <header>
                        <Navbar className="navbar-custom" variant="light" style={{height: '12vh', width: '100vw'}}>
                            <Nav style={{color: "white"}} className="mr-auto">
                                <Nav.Link style={{color: "white"}}><Link style={{color: "white"}} to="/mapa">Mapa</Link></Nav.Link>
                                <Nav.Link style={{color: "white"}}><Link style={{color: "white"}}
                                                                         to="/">Lista</Link></Nav.Link>
                            </Nav>
                            <Form inline>
                                <Link style={{color: "white", paddingLeft: '10px'}}
                                      onClick={() => loginWithRedirect({})}>Zaloguj</Link>
                            </Form>
                        </Navbar>
                    </header>
                     <Switch>

                        <Route exact path="/mapa">
                            <DisplayMap/>
                        </Route>
                        <Route exact path="/">
                            <DisplayList/>
                        </Route>
                        <Route exact path="/profile">
                            <DisplayProfile/>
                        </Route>
                         <Route exact path="/help">
                            <Help/>
                        </Route>
                    </Switch>
                </Router>

            )}

            {isAuthenticated && (
                <Router history={history}>
                    <header>
                        <Navbar className="navbar-custom" variant="light" style={{height: '12vh', width: '100vw'}}>
                            <Nav style={{color: "white"}} className="mr-auto">
                                <Nav.Link style={{color: "white"}}><Link style={{color: "white"}} to="/mapa">Mapa</Link></Nav.Link>
                                <Nav.Link style={{color: "white"}}><Link style={{color: "white"}}
                                                                         to="/dodaj">Dodaj</Link></Nav.Link>
                                <Nav.Link style={{color: "white"}}><Link style={{color: "white"}}
                                                                         to="/">Lista</Link></Nav.Link>
                                <Nav.Link style={{color: "white"}}><Link style={{color: "white"}}
                                                                         to="/help">Pomoc</Link></Nav.Link>
                            </Nav>
                            <Form inline>
                                <Link style={{color: "white"}} to={`/profile?name=${user.email}&user_picture=${user.picture}`}><Profile size={40} profile={false}/></Link>
                                <Link style={{color: "white", paddingLeft: '10px'}}
                                      onClick={() => logout()}>Wyloguj</Link>
                            </Form>
                        </Navbar>
                    </header>
                    <Switch>

                        <Route exact path="/mapa">
                            <DisplayMap/>
                        </Route>
                        <Route exact path="/dodaj">
                            <DisplayDodaj/>
                        </Route>
                        <Route exact path="/">
                            <DisplayList/>
                        </Route>
                        <Route exact path="/profile">
                            <DisplayProfile/>
                        </Route>
                        <Route exact path="/help">
                            <Help/>
                        </Route>
                    </Switch>
                </Router>

            )}
        </div>
    );

    function DisplayMap() {
        dispatch(showProfile(false))
        dispatch(highlightEnergySource({}))
        return (
            <div style={{paddingTop: '15px'}}>
                <Filters/>
                <div
                    style={{
                        height: '80vh',
                        width: '100vw',
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
        )
    }

    function DisplayList() {
        dispatch(showProfile(false))
        dispatch(highlightEnergySource({}))
        return (
            <div style={{paddingTop: '15px'}}>
                <Menu style={{float: 'left', position: 'relative'}}/>
                <Filters/>
                <div
                    style={{
                        height: '80vh',
                        width: '76vw',
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
        )
    }

    function DisplayDodaj() {
        dispatch(showProfile(false))
        dispatch(highlightEnergySource({}))
        return (
            <div style={{paddingTop: '15px'}}>
                <SourceCreate style={{float: 'left', position: 'relative'}} user={user}/>
                <div style={{height: '80vh', width: '68vw', position: 'relative', float: 'right'}}>
                    <Filters/>
                    <div
                        style={{
                            height: '80vh',
                            width: '68vw',
                            display: 'flex',
                            position: 'relative',
                            flexFlow: 'row nowrap',
                            justifyContent: 'center',
                            padding: 0,
                            float: 'right'
                        }}
                    >
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }

    function DisplayProfile() {
        dispatch(showProfile(true))
        dispatch(highlightEnergySource({}))
        let query = new URLSearchParams(useLocation().search);
        return (
            <div style={{paddingTop: '15px'}}>
                <Profile size={70} user={query.get('name')} user_picture={query.get('user_picture')} profile={true} style={{float: 'left', position: 'relative'}}/>
                <div style={{height: '80vh', width: '75vw', position: 'relative', float: 'right'}}>
                    <Filters/>
                    <div
                        style={{
                            height: '80vh',
                            width: '75vw',
                            display: 'flex',
                            position: 'relative',
                            flexFlow: 'row nowrap',
                            justifyContent: 'center',
                            padding: 0,
                            float: 'right'
                        }}
                    >
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }

    function Help() {
        dispatch(showProfile(false))
        dispatch(highlightEnergySource({}))
        return (
            <div style={{paddingTop: '15px'}}>
                <div style={{float: 'left', position: 'relative'}}>
                     <p><b>Pomoc merytotyczna</b></p>
                <p>jazysk@agh.edu.pl</p>
                <p><b>Pomoc techniczna</b></p>
                <p>kirsz@student.agh.edu.pl</p>
                </div>
                <div style={{height: '80vh', width: '80vw', position: 'relative', float: 'right'}}>
                    <Filters/>
                    <div
                        style={{
                            height: '80vh',
                            width: '80vw',
                            display: 'flex',
                            position: 'relative',
                            flexFlow: 'row nowrap',
                            justifyContent: 'center',
                            padding: 0,
                            float: 'right'
                        }}
                    >
                        <Map/>
                    </div>
            </div>
            </div>
        )
    }
};

export default NavBar;
