import React, { useState, useEffect,useContext } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { GlobalContex } from '../globalContex'
import axios from 'axios'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {
       
        setUserEmail,
        loginData,
        setLoginData,
    } = useContext(GlobalContex);

    const handleLogin = () => {
        setLoading(true);
        axios
            .post(`https://phpwebdevelopmentservices.com/project-react-backend/api/login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                if (res.data.status) {
                    setLoading(false);
                    setLoginData(res.data);
                    localStorage.setItem("userEmailNew", res?.userdata.email);
                    localStorage.setItem("loginData", JSON.stringify(res.data));
                    setUserEmail(res?.data?.user?.email);
                    console.log(res.data)
                }
            });
    };

    return (
        <div>
            <section style={{ position: 'fixed', zIndex: '9999' }}><Header /></section>
            <div class="search_main_section">
                <div class="container">
                    <div class="row res_padd"></div>
                    <div>
                        <div className="main-center-div">
                            <div className="top-border-div">
                                <div className="login-from-area">
                                    <h2>Sign In</h2>
                                    <div>
                                        <input type="text" className="login-type" placeholder="Email or mobile number" name=""
                                            onChange={(e) => setEmail(e.target.value)} value={email}
                                        />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="password-in">
                                        <input id="password-field" type="password"
                                            onChange={(e) => setPassword(e.target.value)} value={password}
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
                                        onClick={handleLogin}
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
                                <p>Don't have an account? <a href="signup">Create Account</a></p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Login