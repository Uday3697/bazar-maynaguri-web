import React, { useState, useEffect, useContext } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { GlobalContex } from '../globalContex'
import axios from 'axios'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const {

        setUserEmail,
        loginData,
        setLoginData,
    } = useContext(GlobalContex);

    //validation
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // if (!values.username) {
        //     errors.username = "Username is required!";
        // }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 20) {
            errors.password = "Password cannot exceed more than 20 characters";
        }
        return errors;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    const handleLogin = () => {
        setLoading(true);
        axios
            .post(`https://phpwebdevelopmentservices.com/project-react-backend/api/login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log("iiiiiiiiiii", res.data.userdata)
                // if (res.data.status) {
                //     setLoading(false);
                //     setLoginData(res.data);
                //     localStorage.setItem("userEmail", res?.userdata.email);
                //     localStorage.setItem("loginData", JSON.stringify(res.data));

                // }
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
                            {Object.keys(formErrors).length === 0 && isSubmit ? (
                                <div className="ui message success">Signed in successfully</div>
                            ) : (
                                null
                            )}
                            <div className="top-border-div">
                                <div className="login-from-area">
                                    <h2>Sign In</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <input type="text" className="login-type" placeholder="Email or mobile number" name="email"
                                                onChange={handleChange} value={formValues.email}
                                            />
                                            <p>{formErrors.email}</p>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="password-in">
                                            <input id="password-field" type="password"
                                                onChange={handleChange} value={formValues.password}
                                                className="login-type" name="password" placeholder="password" />
                                            <p>{formErrors.password}</p>
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
                                            onClick='submit'
                                            className="login-submit">Sign In</button>
                                    </form>
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