import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'


async function loginUser(credentials) {
    return fetch('https://phpwebdevelopmentservices.com/project-react-backend/docs/api-docs.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        if ('accessToken' in response) {
            window.alert(("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            }))
                .then((value) => {
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                    window.location.href = "/profile";
                });
        } else {
            window.alert(("Failed", response.message, "error"));
        }
    }
    return (
        <div style={{ margin: '20px' }}>
            <div><Header /></div>
            <div>
                <div className="main-center-div">
                    <div className="top-border-div">
                        <div className="login-from-area">
                            <h2>Sign In</h2>
                            <div>
                                <input type="text" className="login-type" placeholder="Email or mobile number" name=""
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <div className="clearfix"></div>
                            </div>
                            <div className="password-in">
                                <input id="password-field" type="password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="login-type" name="password" placeholder="password" />
                                <div className="clearfix"></div>
                                <span toggle="#password-field" className="field-icon fa fa-fw fa-eye toggle-password"></span>
                            </div>
                            <div className="remmber-area">
                                <label className="list_checkBox">Remember me
                                    <input type="checkbox" name="text" />
                                    <span className="list_checkmark"></span>
                                </label>
                                <a className="forgot-passwords" href="#">Forgot Password?</a>
                            </div>
                            <p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>
                            <button type="submit" 
                                onClick={handleSubmit}
                            className="login-submit">Sign In</button>
                        </div>
                        <div className="or-area">
                            <span>Or Continue with</span>
                        </div>
                        <div className="login-socials-area">
                            <div className="socials-btns">
                                <a href="#" className="common-btns facebook-btn">
                                    <img src="./images/login-facebook.png" alt="" /> Facebook
                                </a>
                                <a href="#" className="common-btns google-btn">
                                    <img src="./images/login-google.png" alt="" /> Google
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-account-div">
                        <p>Don't have an account? <a href="signup.html">Create Account</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login