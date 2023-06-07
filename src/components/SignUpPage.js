import { useState } from "react";
import { createUser } from "../apis/UserApis";
import { Navigate, useNavigate } from "react-router-dom";


export default function SignUpPage(){

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    function handleSignUpTextInput(e){
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    function createNewUser(){
        createUser(newUser)
            .then((user) =>user.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }
    
    function redirectToLoginPage(){
        navigate('/');
    }

    return(
        
        <div
        style={{
          backgroundImage: `url("https://golf.com/wp-content/uploads/2020/04/augusta-national-12-960x540.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
       
        <h1>Sign Up</h1>
        <div className="signup-page-div">
        <form>
        <div className="login-email-label">
            <label>Name</label>
        </div>
        <div className="login-email-input">
                <input
                    name="name"
                     placeholder="Enter your name"
                    required
                    value={newUser.name}
                        onChange={handleSignUpTextInput}
                    /> 
            </div>
            <div className="login-email-label">
            <label>Email</label>
            </div>
            <div className="login-email-input">
                <input
                    name="email"
                    placeholder="Enter your email address"
                    required
                    value={newUser.email}
                    onChange={handleSignUpTextInput}
                /> 
            </div>
            <div className="login-email-label">
            <label>Password</label>
            </div>
            <div className="login-email-input">
                <input
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={newUser.password}
                    onChange={handleSignUpTextInput}
                />
            </div>
            <button type="submit" class="btn btn-success" onClick={(e) => {
            e.preventDefault();
            createNewUser();
            redirectToLoginPage();
          }}>Sign Up</button>
        </form>
        </div>
        </div>
        
    );
}