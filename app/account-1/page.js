'use client'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"

import VideoPopup from "@/components/elements/VideoPopup"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Chooseus from "@/components/sections/home1/Chooseus"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Account_one() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Accounts Overview">
            <section className="account-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>Account Types</h6>
                        <h2>Forex trading accounts</h2>
                    </div>
                    <div className="inner-container">
                        <Swiper {...swiperOptions} className="theme_carousel">
                            <SwiperSlide>
                                <div className="account-block-one">
                                    <div className="inner-box">
                                        <h3><Link href="/account-2">Demo Account</Link></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-81.png" alt=""/></div>
                                        <figure className="image-box"><img src="assets/images/resource/account-1.jpg" alt=""/></figure>
                                        <p>Idea of dencings masterder of human the moment blinded...</p>
                                        <div className="link"><Link href="/account-2"><span>Explore More</span></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="account-block-one">
                                    <div className="inner-box">
                                        <h3><Link href="/account-3">Individual Account</Link></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt=""/></div>
                                        <figure className="image-box"><img src="assets/images/resource/account-2.jpg" alt=""/></figure>
                                        <p>Business it will frequently occur that pleasures have to repudiated...</p>
                                        <div className="link"><Link href="/account-3"><span>Explore More</span></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="account-block-one">
                                    <div className="inner-box">
                                        <h3><Link href="/account-4">Professional Account</Link></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-83.png" alt=""/></div>
                                        <figure className="image-box"><img src="assets/images/resource/account-3.jpg" alt=""/></figure>
                                        <p>Holds in these matters this principle of selection he rejects...</p>
                                        <div className="link"><Link href="/account-4"><span>Explore More</span></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="account-block-one">
                                    <div className="inner-box">
                                        <h3><Link href="/account-2">Demo Account</Link></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-81.png" alt=""/></div>
                                        <figure className="image-box"><img src="assets/images/resource/account-1.jpg" alt=""/></figure>
                                        <p>Idea of dencings masterder of human the moment blinded...</p>
                                        <div className="link"><Link href="/account-2"><span>Explore More</span></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="account-block-one">
                                    <div className="inner-box">
                                        <h3><Link href="/account-3">Individual Account</Link></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt=""/></div>
                                        <figure className="image-box"><img src="assets/images/resource/account-2.jpg" alt=""/></figure>
                                        <p>Business it will frequently occur that pleasures have to repudiated...</p>
                                        <div className="link"><Link href="/account-3"><span>Explore More</span></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="account-block-one">
                                    <div className="inner-box">
                                        <h3><Link href="/account-4">Professional Account</Link></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-83.png" alt=""/></div>
                                        <figure className="image-box"><img src="assets/images/resource/account-3.jpg" alt=""/></figure>
                                        <p>Holds in these matters this principle of selection he rejects...</p>
                                        <div className="link"><Link href="/account-4"><span>Explore More</span></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="dots-style-one">
                            <div className="swiper-pagination"></div>
                        </div>

                        <div className="nav-style-one">
                            <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                            <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="pricing-style-two bg-color-1">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <h6>Join Fxvibe</h6>
                        <h2>Enter a trading challenge</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box centred">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>1 Step Challenge</li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>2 Step Challenge</li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-two">
                                            <div className="pricing-table">
                                                <div className="table-header">
                                                    <h3>Starter Plan</h3>
                                                    <p>Packages and web page editors.</p>
                                                    <h2>$10k <span>Funding amount</span></h2>
                                                </div>
                                                <div className="table-content">
                                                    <ul className="feature-list clearfix">
                                                        <li>Target<span>$500</span></li>
                                                        <li>Min.Trading Days<span>5 Days</span></li>
                                                        <li>Daily Drawdown<span>5%</span></li>
                                                        <li>Max.Drawdown<span>10%</span></li>
                                                        <li>Trading Period<span>No Limit</span></li>
                                                        <li>Refundable Fee<span>99 o/t</span></li>
                                                    </ul>
                                                </div>
                                                <div className="table-footer">
                                                    <div className="check-box">
                                                        <input className="check" type="checkbox" id="checkbox1"/>
                                                        <label for="checkbox1">Compare</label>
                                                    </div>
                                                    <Link href="/index-3"><span>Start Now</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-two">
                                            <div className="special-text"><h6>Popular Plan</h6></div>
                                            <div className="pricing-table">
                                                <div className="table-header">
                                                    <h3>Standard Plan</h3>
                                                    <p>Packages and web page editors.</p>
                                                    <h2>$25k <span>Funding amount</span></h2>
                                                </div>
                                                <div className="table-content">
                                                    <ul className="feature-list clearfix">
                                                        <li>Target<span>$1000</span></li>
                                                        <li>Min.Trading Days<span>5 Days</span></li>
                                                        <li>Daily Drawdown<span>5%</span></li>
                                                        <li>Max.Drawdown<span>10%</span></li>
                                                        <li>Trading Period<span>No Limit</span></li>
                                                        <li>Refundable Fee<span>199 o/t</span></li>
                                                    </ul>
                                                </div>
                                                <div className="table-footer">
                                                    <div className="check-box">
                                                        <input className="check" type="checkbox" id="checkbox2"/>
                                                        <label for="checkbox2">Compare</label>
                                                    </div>
                                                    <Link href="/index-3"><span>Start Now</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-two">
                                            <div className="pricing-table">
                                                <div className="table-header">
                                                    <h3>Advanced Plan</h3>
                                                    <p>Packages and web page editors.</p>
                                                    <h2>$50k <span>Funding amount</span></h2>
                                                </div>
                                                <div className="table-content">
                                                    <ul className="feature-list clearfix">
                                                        <li>Target<span>$2000</span></li>
                                                        <li>Min.Trading Days<span>5 Days</span></li>
                                                        <li>Daily Drawdown<span>5%</span></li>
                                                        <li>Max.Drawdown<span>10%</span></li>
                                                        <li>Trading Period<span>No Limit</span></li>
                                                        <li>Refundable Fee<span>299 o/t</span></li>
                                                    </ul>
                                                </div>
                                                <div className="table-footer">
                                                    <div className="check-box">
                                                        <input className="check" type="checkbox" id="checkbox3"/>
                                                        <label for="checkbox3">Compare</label>
                                                    </div>
                                                    <Link href="/index-3"><span>Start Now</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="step_two">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-two">
                                            <div className="pricing-table">
                                                <div className="table-header">
                                                    <h3>Starter Plan</h3>
                                                    <p>Packages and web page editors.</p>
                                                    <h2>$110k <span>Funding amount</span></h2>
                                                </div>
                                                <div className="table-content">
                                                    <ul className="feature-list clearfix">
                                                        <li>Target<span>$500</span></li>
                                                        <li>Min.Trading Days<span>5 Days</span></li>
                                                        <li>Daily Drawdown<span>5%</span></li>
                                                        <li>Max.Drawdown<span>10%</span></li>
                                                        <li>Trading Period<span>No Limit</span></li>
                                                        <li>Refundable Fee<span>99 o/t</span></li>
                                                    </ul>
                                                </div>
                                                <div className="table-footer">
                                                    <div className="check-box">
                                                        <input className="check" type="checkbox" id="checkbox4"/>
                                                        <label for="checkbox4">Compare</label>
                                                    </div>
                                                    <Link href="/index-3"><span>Start Now</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-two">
                                            <div className="special-text"><h6>Popular Plan</h6></div>
                                            <div className="pricing-table">
                                                <div className="table-header">
                                                    <h3>Standard Plan</h3>
                                                    <p>Packages and web page editors.</p>
                                                    <h2>$125k <span>Funding amount</span></h2>
                                                </div>
                                                <div className="table-content">
                                                    <ul className="feature-list clearfix">
                                                        <li>Target<span>$1000</span></li>
                                                        <li>Min.Trading Days<span>5 Days</span></li>
                                                        <li>Daily Drawdown<span>5%</span></li>
                                                        <li>Max.Drawdown<span>10%</span></li>
                                                        <li>Trading Period<span>No Limit</span></li>
                                                        <li>Refundable Fee<span>199 o/t</span></li>
                                                    </ul>
                                                </div>
                                                <div className="table-footer">
                                                    <div className="check-box">
                                                        <input className="check" type="checkbox" id="checkbox5"/>
                                                        <label for="checkbox5">Compare</label>
                                                    </div>
                                                    <Link href="/index-3"><span>Start Now</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-two">
                                            <div className="pricing-table">
                                                <div className="table-header">
                                                    <h3>Advanced Plan</h3>
                                                    <p>Packages and web page editors.</p>
                                                    <h2>$150k <span>Funding amount</span></h2>
                                                </div>
                                                <div className="table-content">
                                                    <ul className="feature-list clearfix">
                                                        <li>Target<span>$2000</span></li>
                                                        <li>Min.Trading Days<span>5 Days</span></li>
                                                        <li>Daily Drawdown<span>5%</span></li>
                                                        <li>Max.Drawdown<span>10%</span></li>
                                                        <li>Trading Period<span>No Limit</span></li>
                                                        <li>Refundable Fee<span>299 o/t</span></li>
                                                    </ul>
                                                </div>
                                                <div className="table-footer">
                                                    <div className="check-box">
                                                        <input className="check" type="checkbox" id="checkbox6"/>
                                                        <label for="checkbox6">Compare</label>
                                                    </div>
                                                    <Link href="/index-3"><span>Start Now</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Chooseus/>
            
            <section className="profit-calculator alternat-2">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 profit-column">
                            <div className="profit-inner">
                                <div className="bg-layer"></div>
                                <span className="big-text">calculator</span>
                                <div className="inner-box">
                                    <h5>Select Account Size</h5>
                                    <button className="w-125"><span id="accountSizeLabel">$1,000</span></button><br/>
                                    <div className="single-item">
                                        <input type="range" id="accountSizeRange" min="1000" max="100000" step="10"/>
                                        <div className="currency-list">
                                            <span>$1,000</span>
                                            <span>$100,000</span>
                                        </div>
                                    </div>
                                    

                                    <h5>Profit Rate</h5>
                                    <button className="w-125"><span id="profitRateLabel">0.5%</span></button><br/>
                                    <div className="single-item">
                                        <input type="range" id="profitRateRange" min="0.005" max="0.1" step="0.0001"/>
                                        <div className="currency-list">
                                            <span>0.5%</span>
                                            <span>10%</span>
                                        </div>
                                    </div>
                                    

                                    <br/>

                                    <div className="btn-box">
                                        <h3>$20<span>/Month</span></h3>
                                        <button className="theme-btn btn-two"><span>START TRADING</span></button>
                                    </div>

                                    <h4 id="result"></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6>Profit Calculator</h6>
                                    <h2>Estimate the earnings for a full time trader</h2>
                                </div>
                                <div className="text-box">
                                    <p>Trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                                    <ul className="list-style-two clearfix">
                                        <li>Accurate Profit Calculation</li>
                                        <li>Risk Management</li>
                                        <li>Improved Decision Making</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="working-style-two alternat-2 bg-color-1">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>How It’s Work</h6>
                        <h2>Deep dive into evaluation</h2>
                        <div className="video-inner">
                            <VideoPopup />
                            <h5>Play this video for <br />forex success</h5>
                        </div>
                    </div>
                    <div className="inner-container">
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-42.png)" }}></div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                <div className="working-block-two">
                                    <div className="inner-box">
                                        <div className="text-box">
                                            <h3>Trading Challenge</h3>
                                            <p>Nor again is there anyone who loves or pursues or desires to obtain pain all itself.</p>
                                        </div>
                                        <div className="decore"></div>
                                        <div className="step"><h6>Step 01</h6></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-84.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                <div className="working-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-85.png" alt=""/></div>
                                        <div className="step"><h6>Step 02</h6></div>
                                        <div className="decore"></div>
                                        <div className="text-box">
                                            <h3>Get Verified</h3>
                                            <p>One rejects, dislikes avoids pleasureitself, because it is  but who do not know.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                <div className="working-block-two">
                                    <div className="inner-box">
                                        <div className="text-box">
                                            <h3>Get Funded</h3>
                                            <p>Ever undertakes laborious physical exercise except obtain all advantages.</p>
                                        </div>
                                        <div className="decore"></div>
                                        <div className="step"><h6>Step 03</h6></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                <div className="working-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-87.png" alt=""/></div>
                                        <div className="step"><h6>Step 04</h6></div>
                                        <div className="decore"></div>
                                        <div className="text-box">
                                            <h3>Get Paid</h3>
                                            <p>Foresee the pain & trouble that are bound to ensue equal blame belongs fail. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}