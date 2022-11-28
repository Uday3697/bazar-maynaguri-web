import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const SearchPage = () => {
    return (
        <>
            <section style={{position:'fixed',zIndex:'9999'}}><Header /></section>
            <section>
                <div className="search_main_section">
                    <div className="container">
                        <div className="row res_padd">

                            <div className="bread_crumb">
                                <a href="#">Home</a>
                                <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                                <a href="#">Vegetables</a>
                            </div>

                            <div className="mobile_filter"> <i class="fa fa-filter" aria-hidden="true"></i><p>Show Filter</p></div>

                            <div className="laft_search_panel">
                                <h3>Filter Options</h3>

                                <div className="form_group" style={{position:"relative"}}>
                                    <input type="text" placeholder="Keyword" class="search-input" />
                                    <img src="assets/images/icon36.png" class="search_icon" />
                                </div>

                                <div className="form_group">
                                    <label className="search_label">Category</label>
                                    <select className="slectt">
                                        <option>Vegetable</option>
                                        <option>Fruits</option>
                                        <option>Dairy products</option>
                                        <option>Organic Products</option>
                                        <option>Grocery Items</option>
                                    </select>
                                </div>

                                <div className="form_group">
                                    <label class="search_label">Sub Category</label>
                                    <ul class="c_ul">
                                        <li>
                                            <label className="contect_container_checkBox">Sub Category one
                                                <input type="checkbox" checked="checked" name="text" />
                                                <span className="contect_checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="contect_container_checkBox">Sub Category two
                                                <input type="checkbox" checked="checked" name="text" />
                                                <span className="contect_checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="contect_container_checkBox">Sub Category
                                                <input type="checkbox" checked="checked" name="text" />
                                                <span className="contect_checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="contect_container_checkBox">Sub Categoru name here
                                                <input type="checkbox" checked="checked" name="text" />
                                                <span class="contect_checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="contect_container_checkBox">Sub Category
                                                <input type="checkbox" checked="checked" name="text" />
                                                <span class="contect_checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>


                                <div className="form_group">
                                    <label className="search_label">Price Range</label>
                                    <div class="slider_rnge">
                                        <div id="slider-range" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                            <div class="ui-slider-range ui-widget-header ui-corner-all" style={{left: "0%" , width: '100%'}}></div>
                                            <span tabindex="0" class="ui-slider-handle ui-state-default ui-corner-all" style={{left:" 0%"}}></span>
                                            <span tabindex="0" class="ui-slider-handle ui-state-default ui-corner-all" style={{left:" 100%"}}></span>
                                        </div>
                                        <span class="range-text">
                                            <input type="text" class="price_numb" readonly id="amount" />
                                        </span>
                                    </div>
                                </div>

                                <button type="submit" class="search-submit1">Filter</button>

                            </div>
                            {/* <!---->

                        <!--right--> */}
                            <div class="right_search_panel">

                                <div class="evnt_shot_by_main">
                                    <label class="event-sort">Showing 1-20 out of 100 product for Vegetable</label>
                                    <div class="sort-filter">
                                        <p>Sort by :</p>
                                        <select class="sort-select">
                                            <option>Select</option>
                                            <option>Price - Low to High</option>
                                            <option>Price - High to Low </option>
                                        </select>
                                    </div>
                                </div>


                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search01.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.40.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search02.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.20.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search03.JPG" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.40.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search04.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.30.00</p>
                                    </div>
                                </div>



                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search05.png" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search06.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search07.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search08.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>



                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search09.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search10.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search11.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search12.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>


                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search01.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.40.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search02.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.20.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search03.JPG" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.40.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search04.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.30.00</p>
                                    </div>
                                </div>



                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search05.png" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search06.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search07.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>

                                <div class="search_proo">
                                    <div class="srch_pic_box">
                                        <img src="assets/images/search08.jpg" alt="" />
                                        <span><a href="#">Call For Enquiry</a></span>
                                    </div>
                                    <div class="srch_dtls_box">
                                        <a href="#">Fresh Onion</a>
                                        <p>Rs.80.00</p>
                                    </div>
                                </div>


                                <div class="w-100"></div>

                                <div class="pagination_area">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i> </a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li class="active"><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">...</a></li>
                                        <li><a href="#">25</a></li>
                                        <li><a href="#"> <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default SearchPage;