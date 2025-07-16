'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"

import Link from "next/link"


export default function Education_details() {

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Education Details">

            <section className="education-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="education-details-content">
                                <div className="upper-box">
                                    <ul className="info-list">
                                        <li><i className="flaticon-filter"></i>Forex</li>
                                        <li><i className="flaticon-growth"></i>Beginner</li>
                                    </ul>
                                    <h2>What is Forex Trading & How <br />Does it Work</h2>
                                    <div className="lower-content">
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/thumb-2.jpg" alt=""/></figure>
                                            <h5>Liam Benjamin</h5>
                                            <span className="designation">Instructor</span>
                                        </div>
                                        <ul className="option-list">
                                            <li><Link href="/education-details"><i className="flaticon-heart"></i></Link></li>
                                            <li><Link href="/education-details"><i className="flaticon-share"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tabs-box">
                                    <div className="tab-btn-box">
                                        <ul className="tab-btns tab-buttons">
                                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><h5>Our Course</h5></li>
                                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><h5>Traders Reviews</h5></li>
                                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><h5>Question &amp; Answer</h5></li>
                                        </ul>
                                    </div>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="course-content">
                                                <div className="content-one">
                                                    <div className="text-box">
                                                        <h3>What are you going to Learn</h3>
                                                        <p><i className="flaticon-read"></i>3 Lectures _ 1hr 15mins</p>
                                                    </div>
                                                    <ul className="download-list clearfix">
                                                        <li>
                                                            <button className="downloaded"><i className="flaticon-video-camera"></i>What is Forex?<span>24 minutes</span></button>
                                                        </li>
                                                        <li>
                                                            <button><i className="flaticon-video-camera"></i>How It’s Work?<span>15 minutes</span></button>
                                                        </li>
                                                        <li>
                                                            <button><i className="flaticon-volume-up"></i>How to Start Forex Trading?<span>36 minutes</span></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content-two">
                                                    <h3>What is Forex?</h3>
                                                    <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are and pain can procure him some great pleasure.</p>
                                                    <h4>Everything you need to trade Forex in one place</h4>
                                                    <ul className="list-style-three clearfix">
                                                        <li>Et harum quidem rerum facilis est expedita.</li>
                                                        <li>officiis debitis aut rerum.</li>
                                                        <li>Temporibus autem quibusdam et aut.</li>
                                                    </ul>
                                                    <div className="video-inner" style={{ backgroundImage: "url(assets/images/background/video-bg-3.jpg)" }}>
                                                        <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-56.png" alt=""/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                                            <div className="review-content">
                                                <h3>Reviews</h3>
                                                <div className="comment-box">
                                                    <div className="single-comment-box">
                                                        <figure className="comment-thumb"><img src="assets/images/resource/comment-1.jpg" alt=""/></figure>
                                                        <h4>Steven Rich<span>08 Jan, 2023</span></h4>
                                                        <p>Gain is there anyone who loves or pursues or desires to obtain pain of itself, because occur in which toil and pain can procure him some great.</p>
                                                        <ul className="rating clearfix">
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="single-comment-box">
                                                        <figure className="comment-thumb"><img src="assets/images/resource/comment-2.jpg" alt=""/></figure>
                                                        <h4>William Cobus<span>24 Dec, 2022</span></h4>
                                                        <p>Ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault.</p>
                                                        <ul className="rating clearfix">
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="comment-form">
                                                    <div className="text-box">
                                                        <h3>Add Your Comment</h3>
                                                        <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                                                    </div>
                                                    <form method="post" action="/education-details" className="default-form">
                                                        <div className="row clearfix">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                <textarea name="message" placeholder="Your Comment *"></textarea>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                <input type="text" name="name" placeholder="Your Name" required=""/>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                <input type="email" name="email" placeholder="Email * " required=""/>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                <div className="check-box">
                                                                    <input className="check" type="checkbox" id="checkbox1"/>
                                                                    <label for="checkbox1">Save my name, email &amp; website in this browser for the next time I comment.</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                                <button type="submit" className="theme-btn btn-two"><span>Submit Now</span></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                                            <div className="accordion-inner faq-section">
                                                <h3>Question &amp; Answer</h3>
                                                <ul className="accordion-box">
                                                    <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                            <h5>Does Fxvibe have a good reputation?</h5>
                                                        </div>
                                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                            <h5>How can i start my journey as an Fxvibe trader?</h5>
                                                        </div>
                                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                            <h5>Who is eligible to join?</h5>
                                                        </div>
                                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                            <h5>Is my income subject to taxation?</h5>
                                                        </div>
                                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="education-sidebar">
                                <div className="upper-box">
                                    <h3>$54.00<del>$79.00</del></h3>
                                    <h5>2 days left at this price!</h5>
                                    <ul className="rating clearfix">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><span>5.0</span></li>
                                        <li>(2,726 Reviews)</li>
                                    </ul>
                                </div>
                                <ul className="info-list clearfix">
                                    <li><i className="flaticon-language"></i>Language<span>English</span></li>
                                    <li><i className="flaticon-clock"></i>Access<span>Lifetime</span></li>
                                    <li><i className="flaticon-quality"></i>Certificate<span>Yes</span></li>
                                    <li><i className="flaticon-user"></i>Enrolled<span>45 Students</span></li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/education-details" className="theme-btn btn-one"><span>Buy Now</span></Link>
                                </div>
                                <h6>Share with Others</h6>
                                <ul className="social-links clearfix centred">
                                    <li><Link href="/education-details"><i className="flaticon-facebook"></i></Link></li>
                                    <li><Link href="/education-details"><i className="flaticon-video-camera"></i></Link></li>
                                    <li><Link href="/education-details"><i className="flaticon-instagram-logo"></i></Link></li>
                                    <li><Link href="/education-details"><i className="flaticon-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}