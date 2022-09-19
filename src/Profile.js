import React from 'react';
import {GoogleLogout} from 'react-google-login'

const Profile= ({userData,setAuthenticated}) => {
    
    const onLogoutSuccess = () => {
        setAuthenticated(false)
    }
    const LogoutFailed = (res) =>{
        console.log(res)
    }
    return(
        <div>
           <h1>You're Logged in</h1>
           <img src={userData?.imageUrl}></img>
           <h2>{userData?.name}</h2>
           <h3>{userData?.email}</h3>
           <GoogleLogout
            clientId=""
            onLogoutSuccess={onLogoutSuccess}
            onFailure={LogoutFailed}
            buttonText='Logout'
           />
        </div>
    )
}

export default Profile