'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"

import Link from "next/link"


export default function Service_details_page_five() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Education & Training">

            <section className="account-details service-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="account-sidebar default-sidebar">
                                <div className="link-box"><Link href="/account-2" className="theme-btn btn-two"><span>Open Your Account</span></Link></div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li><Link href="/service-details"><span>Currency Pairs</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-2"><span>Trading Account</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-3"><span>Platforms & Tools</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-4"><span>Monitoring & Support</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-5" className="current"><span>Education & Training</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget download-widget">
                                    <div className="widget-title">
                                        <h3>Essentials</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="download-list clearfix">
                                            <li><button type="button">Service Details.pdf<i className="flaticon-download"></i></button></li>
                                            <li><button type="button">Terms & Conditions.pdf<i className="flaticon-download"></i></button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget contact-widget">
                                    <div className="widget-content" style={{ backgroundImage: "url(assets/images/resource/sidebar-1.jpg)" }}>
                                        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-44.png)" }}></div>
                                        <h3>Trading with <br />Confidence, Winning <br />with <span>Fx</span>vibe!...</h3>
                                        <p>Navigating Markets, Maximizing Profits.</p>
                                        <Link href="tel:18007661234" className="phone"><span>Phone: +1 800 766-1234</span></Link>
                                        <Link href="contact.html" className="theme-btn btn-two"><span>Start Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="account-details-content">
                                <div className="content-one">
                                    <h2>Introducing Education & Training</h2>
                                    <p>Our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection rejects pleasures to secure other greater.</p>
                                    <figure className="image-box"><img src="assets/images/resource/account-9.jpg" alt=""/></figure>
                                </div>
                                <div className="content-two">
                                    <div className="text-box">
                                        <h2>Benefits of Education & Training</h2>
                                        <p>Nothing prevents our being able to do what we like best every pleasure is to be welcomed.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>01.</h4>
                                                <h3>Diversification</h3>
                                                <p>Again is there anyone who loves or pursue or desires to obtain pain.</p>
                                                <div className="overlay-content">
                                                    <h3>Diversification</h3>
                                                    <p>Frequently occur that pleasures have to be repudiated and annoyances matters to this principle of selection endures.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>02.</h4>
                                                <h3>Global Exposure</h3>
                                                <p>Frequently occur that pleasures have to be repudiated and annoyances.</p>
                                                <div className="overlay-content">
                                                    <h3>Global Exposure</h3>
                                                    <p>Frequently occur that pleasures have to be repudiated and annoyances matters to this principle of selection endures.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>03.</h4>
                                                <h3>Technical Analysis</h3>
                                                <p>Frequently occur that pleasures have to be repudiated and annoyances.</p>
                                                <div className="overlay-content">
                                                    <h3>Technical Analysis</h3>
                                                    <p>Frequently occur that pleasures have to be repudiated and annoyances matters to this principle of selection endures.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>04.</h4>
                                                <h3>Profit Potential</h3>
                                                <p>Again is there anyone who loves or pursue or desires to obtain pain.</p>
                                                <div className="overlay-content">
                                                    <h3>Profit Potential</h3>
                                                    <p>Frequently occur that pleasures have to be repudiated and annoyances matters to this principle of selection endures.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scroll-text">
                                        <ul className="text-list">
                                            <li><i className="flaticon-checked-1"></i>Evaluating Your Progress</li>
                                            <li><i className="flaticon-checked-1"></i>Continuous Improvement</li>
                                            <li><i className="flaticon-checked-1"></i>24/7 Customer Support</li>
                                            <li><i className="flaticon-checked-1"></i>Evaluating Your Progress</li>
                                            <li><i className="flaticon-checked-1"></i>Continuous Improvement</li>
                                            <li><i className="flaticon-checked-1"></i>24/7 Customer Support</li>
                                            <li><i className="flaticon-checked-1"></i>Evaluating Your Progress</li>
                                            <li><i className="flaticon-checked-1"></i>Continuous Improvement</li>
                                            <li><i className="flaticon-checked-1"></i>24/7 Customer Support</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content-three">
                                    <div className="text-box">
                                        <h2>What's Being Provided?</h2>
                                        <p>Dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                                    </div>
                                    <div className="tabs-box">
                                        <div className="tab-inner">
                                            <div className="tab-btn-box">
                                                <ul className="tab-btns tab-buttons clearfix">
                                                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Pair Selection</li>
                                                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Major Currency Pair</li>
                                                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Minor & Exotic Pairs</li>
                                                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Market Analysis</li>
                                                    <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}>Leverage & Margin</li>
                                                </ul>
                                            </div>
                                            <div className="tabs-content">
                                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                                        <div className="text-box">
                                                            <p>Cases are perfectly simple and easy to of choice and when nothing.</p>
                                                            <ul className="list-item">
                                                                <li>40+ Forex pairs</li>
                                                                <li>Deposit: USD, EUR, GBP, JPY</li>
                                                                <li>Trading Central</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                                        <div className="text-box">
                                                            <p>Cases are perfectly simple and easy to of choice and when nothing.</p>
                                                            <ul className="list-item">
                                                                <li>40+ Forex pairs</li>
                                                                <li>Deposit: USD, EUR, GBP, JPY</li>
                                                                <li>Trading Central</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                                        <div className="text-box">
                                                            <p>Cases are perfectly simple and easy to of choice and when nothing.</p>
                                                            <ul className="list-item">
                                                                <li>40+ Forex pairs</li>
                                                                <li>Deposit: USD, EUR, GBP, JPY</li>
                                                                <li>Trading Central</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="tab4">
                                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                                        <div className="text-box">
                                                            <p>Cases are perfectly simple and easy to of choice and when nothing.</p>
                                                            <ul className="list-item">
                                                                <li>40+ Forex pairs</li>
                                                                <li>Deposit: USD, EUR, GBP, JPY</li>
                                                                <li>Trading Central</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="tab5">
                                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                                        <div className="text-box">
                                                            <p>Cases are perfectly simple and easy to of choice and when nothing.</p>
                                                            <ul className="list-item">
                                                                <li>40+ Forex pairs</li>
                                                                <li>Deposit: USD, EUR, GBP, JPY</li>
                                                                <li>Trading Central</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-four faq-section">
                                    <div className="text-box">
                                        <h2>How does it Operate?</h2>
                                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.</p>
                                    </div>
                                    <ul className="accordion-box">
                                        <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <span>01</span>
                                                <h5>Request a trading account</h5>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness  holds in these matters to this principle .</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <span>02</span>
                                                <h5>Secure& Easy fund transfer</h5>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness  holds in these matters to this principle .</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <span>03</span>
                                                <h5>Explore all our markets</h5>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness  holds in these matters to this principle .</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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