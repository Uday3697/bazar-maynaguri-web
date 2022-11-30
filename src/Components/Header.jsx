import React from 'react'
import { useState, useEffect } from 'react';
import Login from '../pages/Login';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (

        <div className={scroll ? "two_in_one fixed-header" : "two_in_one"}>

            <div className="top_head">
                <div className="container">
                    <div className="row ">
                        <div className="head_contact">
                            <ul>
                                <li><img src="images/icon04.png" alt="" /> Sarkar shoss exclusive Natun Bazar turminal complex, PO : Maynaguri, Dist : Jalpaiguri, Pin : 753224.</li>
                            </ul>
                        </div>
                        <div className="head_log_area ml-auto">
                            <ul>
                                <li><a href="#"><img src="assets/images/icon03.png" alt="" />dhrubadjs.mng@gmail.com</a></li>
                                <li><a href="tel:7797813261"><img src="assets/images/icon02.jpg" alt="" /> +91 7797813261</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="middle_head">
                <div className="container">
                    <div className="row res_padd">
                        <span className="logo"><a href="/home"><img src="assets/images/logo.png" alt="" /></a></span>
                        <div className="right_search ml-auto">
                            <div className="left_search">
                                <form>
                                    <input type="text" class="search_type mobill010" placeholder="Search for Products" />
                                    <button type="submit" value="" class="search_submit"></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="for_all_cat_sub_cat">

                <div className="menu_area">
                    <div className="container">
                        <div class="row res_padd relet">


                            <div className="adjust_rm01">

                                <div className="off_canvas_animate slide off_canvas_container left_menu_1">
                                    <div className="off_canvas_animate slide off_canvas_top_menu">
                                        <div className="off_canvas_toggles">
                                            <span className="nav_prev_btn"><i class="icon-left"></i>Back</span>
                                            <span className="nav_close_btn"><i class="icon-cancel"></i></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="content_animate slide content">
                                    <div className="content_animate slide">
                                        <span className="nav_toggle"><i class="icon-menu"></i></span>
                                        <nav className="dropdown">
                                            <ul>
                                                <li><a href="javascript:void(0);" class="adjust_rm02">All Categories <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0);">Vegetable <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:void(0);">Fruits<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:void(0);">Dairy products <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:void(0);">Organic Products <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="javascript:void(0);">Grocery Items <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>



                            <nav class="navbar navbar-expand-md navbar-light">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">

                                        {/* <li class="nav-item dropdown ">
                                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Fruits
                                                    </a>
                                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        <a class="dropdown-item" href="fruits.html">Foodgrains</a>
                                                        <a class="dropdown-item" href="vagetables.html"> Oil</a>
                                                        <a class="dropdown-item" href="leaves.html">Masala</a>
                                                    </ul>
                                                </li> */}

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">About Bazar Maynaguri</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">B2B Information</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">FAQ</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contact Us</a>
                                        </li>

                                        <li className="nav-item">
                                            <a class="nav-link" href="#">Enquiry Us</a>
                                        </li>
                                        {/* <li className="nav-item" style={{marginLeft:'300px'}}>
                                            
                                            <a className="nav-link" href={localStorage.getItem('user') == null ? <Login /> :"/edit"}>My Account</a>
                                        </li> */}


                                    </ul>

                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Header