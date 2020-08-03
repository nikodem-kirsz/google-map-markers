// src/components/Profile.js

import React, {Fragment} from "react";
import {useAuth0} from "../react-auth0-spa";
import UserSources from "./UserSources";
import {useDispatch, useSelector} from 'react-redux'
import {addEnergySources} from '../redux/actions'
import {showProfile} from '../redux/actions'
import Menu from "./Menu";



const Profile = (props) => {
    const {loading, user} = useAuth0();
    const dispatch = useDispatch()

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(props.user)


    fetch('/user_resources', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({user_email: props.user})
                    })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                // this.props.addEnergySources(this.state.energy_sources)
                dispatch(addEnergySources(data))
            });

    return (
        <div>
            {props.profile && props.user && (
                <div style={{height: '80vh', width: '35vh', float: 'left', display: 'inlineBlock'}}>
                    <img src={props.user_picture} style={{border: '3px', float: "left", width: props.size, height: props.size}}
                         alt="Profile"/>
                    {/*<p id="userName" style={{paddingLeft: '5px'}}>{props.user_name}</p>*/}
                    <p id="userEmail" style={{paddingLeft: '5px'}}>{props.user}</p>
                    {/*<UserSources user_email={props.user}/>*/}
                    <Menu/>
                </div>
            )}
            {!props.profile && (
                <div style={{float: "left"}}>
                    <p id="userName" style={{float: "left", marginTop: '2vh', marginLeft: "3vh"}}>{user.name}</p>
                    <img src={user.picture} style={{width: "40px", height: "40px", marginTop: '1vh', marginLeft: "1vh"}}
                         alt="Profile"/>
                </div>

            )}
        </div>
    )
};

export default Profile;