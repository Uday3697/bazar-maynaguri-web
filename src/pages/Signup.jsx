import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { GlobalContex } from '../globalContex'
import axios from 'axios'
const Signup = () => {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const initialValues = { FullName: "", email: "", mobileNum: "", password: "", Confermpassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [errorMsg, setErrorMsg] = useState()
    const {

        setUserEmail,
        loginData,
        setLoginData,
        setUser,
        login,
        user,
    } = useContext(GlobalContex);

    //validation
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.FullName) {
            errors.FullName = "FullName is required!";
        }
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
        } if (!values.Confermpassword) {
            errors.Confermpassword = "Conferm Password is required";
        } else if (values.Confermpassword !== values.password) {
            errors.Confermpassword = "Conferm Password cannot Be different";
        }
        if (!values.mobileNum) {
            errors.mobileNum = "Mobile Num is required!";
        } else if (values.mobileNum.length < 10) {
            errors.mobileNum = "Mobile Num Should be 10 Digits"
        }
        return errors;
    };
    const handleChange = (name, value) => {
        // const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            handleLogin()
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
            .post(`https://phpwebdevelopmentservices.com/project-react-backend/api/register`, {
                "params": {
                    name: formValues.name,
                    email: formValues.email,
                    phone: formValues.mobileNum,
                    password: formValues.password,
                    password_confirmation: formValues.Confermpassword,
                }

            })
            .then((res) => {
                // console.log("iiiiiiiiiii", res.data.result.userdata.email)
                // console.log(res.data.hasOwnProperty('error'))
                if (res.data.hasOwnProperty('result')) {
                    setLoading(false);
                    setLoginData(res.data.result.userdata);

                    localStorage.setItem("user", JSON.stringify(res.data.result));
                    setUser(res.data.result.userdata.name);
                    setUserEmail(res.data.result.userdata.email)
                    // console.log("iiiiiiiiii", user, email)
                    navigate('/home');

                }

            }).catch((error) => setErrorMsg(error));
    };







    return (
        <>
            <section style={{ position: 'fixed', zIndex: '9999' }}><Header /></section>
            <div class="search_main_section">
                <div class="container">
                    <div class="row res_padd">

                        {/* <div class="bread_crumb comm_btomm">
                            <a href="/home">Home</a>
                            <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                            <a href="#">Enquiry</a>
                        </div> */}
                        {errorMsg ?
                            alert(errorMsg) : null
                        }
                        <div class="main-center-div">
                            <div class="top-border-div">
                                <div class="login-from-area">
                                    <form onSubmit={handleSubmit}>
                                        <h2>Create Account</h2>
                                        <div>
                                            <input type="text" class="login-type" placeholder="Full name" name="FullName"
                                                onChange={(e) => handleChange("FullName", e.target.value)} value={formValues.FullName}
                                            />
                                            <p style={{ color: "red" }}> {formErrors.FullName}</p>
                                            <div class="clearfix"></div>
                                        </div>

                                        <div>
                                            <input type="text" class="login-type" placeholder="Email" name="email"
                                                onChange={(e) => handleChange("email", e.target.value)} value={formValues.email}

                                            />
                                            <p style={{ color: "red" }}> {formErrors.email}</p>
                                            <div class="clearfix"></div>
                                        </div>

                                        <div>
                                            <input type="text" class="login-type" placeholder="Mobile number" name="mobileNum"
                                                onChange={(e) => handleChange("mobileNum", e.target.value)} value={formValues.mobileNum}
                                            />
                                            <p style={{ color: "red" }}> {formErrors.mobileNum}</p>
                                            <div class="clearfix"></div>
                                        </div>


                                        <div class="password-in">
                                            <input id="password-field" type="password" class="login-type" name="password" placeholder="password"
                                                onChange={(e) => handleChange("password", e.target.value)} value={formValues.password}
                                            />
                                            <p style={{ color: "red" }}> {formErrors.password}</p>
                                            <div class="clearfix"></div>
                                            <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                                        </div>
                                        <div class="password-in">
                                            <input id="password-field" type="password" class="login-type" name="Confermpassword" placeholder="Confirm password"
                                                onChange={(e) => handleChange("Confermpassword", e.target.value)} value={formValues.Confermpassword}
                                            />
                                            <p style={{ color: "red" }}> {formErrors.Confermpassword}</p>
                                            <div class="clearfix"></div>
                                            <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                                        </div>
                                        <p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>
                                        <button type="submit" class="login-submit"
                                            onClick={handleSubmit}
                                        >Sign up</button>

                                    </form>
                                </div>
                                <div class="or-area">
                                    <span>Or Continue with</span>
                                </div>
                                <div class="login-socials-area">
                                    <div class="socials-btns">
                                        <a href="#" class="common-btns facebook-btn">
                                            <img src="./images/login-facebook.png" alt="" /> Facebook
                                        </a>
                                        <a href="#" class="common-btns google-btn">
                                            <img src="./images/login-google.png" alt="" /> Google
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div class="bottom-account-div">
                                <p>Already have an account? <a href="login">Login</a></p>
                            </div>
                        </div>
                        <section><Footer /></section>



                    </div>
                </div>
            </div>

        </>


    )
}

export default Signup