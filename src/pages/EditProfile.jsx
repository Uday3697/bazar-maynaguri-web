import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const EditProfile = () => {
    return (
        <>
            <section><Header /></section>
            <section>
                <div>
                    <div className="container">
                        <div className="mainDasbordInr">
                            <div className="row">
                                <div className="col-lg-3 col-md-12 col-sm-12 pl-0">
                                    <div className="dasbordLeftsec">
                                        <a href="#url" class="showmeu" data-toggle="collapse" data-target="#demo"><i class="fa fa-bars"></i>Show Menus</a>
                                        <div className="dasbordLeft ">
                                            <div className="profibx">
                                                <em><img src="assets/images/dachprofi.jpg" alt="" /></em>
                                                <strong>Rabin Mnna</strong>
                                                <ul>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star2.png" alt="" /></a></li>
                                                    <li><span>(410)</span></li>
                                                </ul>
                                            </div>
                                            <div className="dasbordLeftlink">
                                                <ul>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico1.png" alt="" class="dashico1" />
                                                        </span>
                                                        Dashboard
                                                    </a></li>
                                                    <li><a href="#" class="activ">
                                                        <span>
                                                            <img src="assets/images/dashico2.png" alt="" class="dashico1" />
                                                        </span>
                                                        Edit Profile
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico3.png" alt="" class="dashico1" />
                                                        </span>
                                                        My Order
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico10.png" alt="" class="dashico1" />
                                                        </span>
                                                        My Favorite
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico4.png" alt="" class="dashico1" />
                                                        </span>
                                                        Reviews
                                                    </a></li>

                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico7.png" alt="" class="dashico1" />
                                                        </span>
                                                        Messages<em>10</em>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico8.png" alt="" class="dashico1" />
                                                        </span>
                                                        Notifications
                                                        <em>14</em>
                                                    </a></li>
                                                    <li><a href="login.html">
                                                        <span>
                                                            <img src="assets/images/dashico9.png" alt="" class="dashico1" />
                                                        </span>
                                                        Log Out

                                                    </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 pr-0">
                                    <div className="dasbordRightlink">
                                        <h1>Edit Profile</h1>
                                        <div className="dasbordRightBody">

                                            <div className="editProformBx">
                                                <form action="edit-profile-service-offered.html">
                                                    <div className="editProformir">

                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-12">
                                                                <div className="iputBx">
                                                                    <label>Name</label>
                                                                    <input type="text" placeholder="Enter here" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12">
                                                                <div className="iputBx">
                                                                    <label>Email</label>
                                                                    <input type="text" placeholder="Enter here" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12">
                                                                <div className="iputBx">
                                                                    <label>Phone</label>
                                                                    <input type="text" placeholder="Enter here" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="iputBx">
                                                                    <label>About me</label>
                                                                    <textarea placeholder="Enter your description here..."></textarea>
                                                                </div>
                                                            </div>



                                                            <div className="col-md-5 col-sm-6">
                                                                <div className="iputBx">
                                                                    <label>Date of Birth</label>
                                                                    <input type="text" class="datepicker" placeholder="Enter here" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 col-sm-6">
                                                                <div className="genfil">
                                                                    <span>Gender</span>
                                                                    <ul>
                                                                        <li>
                                                                            <input type="radio" id="radio1" name="radios" value="all" checked />
                                                                            <label for="radio1">Male</label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="radio2" name="radios" value="all" />
                                                                            <label for="radio2">Female</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-12">
                                                                <div className="form_group edt_checkk">
                                                                    <label className="search_label">Travel</label>
                                                                    <ul class="c_ul">
                                                                        <li>
                                                                            <label className="contect_container_checkBox">Bus
                                                                                <input type="checkbox" checked="" name="text" />
                                                                                <span className="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label className="contect_container_checkBox">Car
                                                                                <input type="checkbox" name="text" />
                                                                                <span className="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label className="contect_container_checkBox">Track
                                                                                <input type="checkbox" name="text" />
                                                                                <span className="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label className="contect_container_checkBox">Walk
                                                                                <input type="checkbox" name="text" />
                                                                                <span className="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label className="contect_container_checkBox">Scooter
                                                                                <input type="checkbox" name="text" />
                                                                                <span className="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-12">
                                                                <div className="form_fild_area_m frm_grp arro">
                                                                    <label>Language </label>
                                                                    <select data-placeholder="Select" class="chosen-select" multiple tabindex="4">
                                                                        <option value=""></option>
                                                                        <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                        <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                        <option value="">Htmuyyiyyuyu uyytuyl</option><option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-12">
                                                                <div className="uplodimg">
                                                                    <span>Profile Image</span>
                                                                    <div class="uplodimgfil">
                                                                        <input type="file" nameName="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                                                        <label for="file-1">Click here to Upload Profile Image<img src="images/clickhe.png" alt="" /></label>
                                                                    </div>
                                                                    <div class="uplodimgfilimg">
                                                                        <em><img src="assets/images/uplodimg.jpg" alt="" /></em>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="locatioSec">
                                                            <h3>Location</h3>
                                                            <div className="row">
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="iputBx">
                                                                        <label>Country</label>
                                                                        <select>
                                                                            <option>Select</option>
                                                                            <option>Select1</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="iputBx">
                                                                        <label>State</label>
                                                                        <input type="text" placeholder="Enter here" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-sm-12">
                                                                    <div className="iputBx">
                                                                        <label>City</label>
                                                                        <input type="text" placeholder="Enter your full address" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="locatioSec">
                                                            <h3>Change password</h3>
                                                            <div className="row">
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="iputBx">
                                                                        <label>Current password</label>
                                                                        <input type="password" placeholder="Enter here" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="iputBx">
                                                                        <label>New password</label>
                                                                        <input type="password" placeholder="Enter here" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-sm-12">
                                                                    <div className="iputBx">
                                                                        <label>Confirm password</label>
                                                                        <input type="password" placeholder="Enter here" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="footdashSec">
                                                            <input type="submit" value="Save all changes" className="subbtn" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    )
}

export default EditProfile