import React, {useState,Profile} from "react";
import "./App.css";
import {GoogleLogin} from 'react-google-login';


function App() {
//to find out if the user has logged in
 const [authenticated, setAuthenticated] = useState(false);
 const [user,setUser] = useState({
  email: '',
  name:'',
  imageUrl: ''
})

 // print out the answers that will come back to us.
 const loginSuccess= (res) =>{
    console.log(res);
    setUser({
      email: res?.profileObj.email,
      name: res?.profileObj.name,
      imageUrl: res?.profileObj.imageUrl
    })
    setAuthenticated(true)
 }
 const loginFail = (res) => {
  console.log(res);
 }

  return (
    <div className="App">
      {
        authenticated ?
        <Profile userData={user} setAuthenticated={setAuthenticated}/>
        :
        <GoogleLogin 
        clientId=""
        onSuccess={loginSuccess}
        onFailure={loginFail}
       />   
      }
      </div>
  );
}

export default App;
