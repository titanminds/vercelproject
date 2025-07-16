import Layout from "@/components/layout/Layout"

import Link from "next/link"


export default function Contact() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>

            <section className="page-title">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/page-title-2.jpg)" }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Contact Us</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li><span>Contact Us</span></li>
                        </ul>
                    </div>
                    <div className="info-content centred">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 info-block">
                                <div className="info-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-95.png" alt=""/></div>
                                        <h5>Request Call Back</h5>
                                        <p>Share ph num, we will back.</p>
                                        <div className="phone-box"><input type="text" name="phone" placeholder="Ph Num..."/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 info-block">
                                <div className="info-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-96.png" alt=""/></div>
                                        <h5>Chat with Expert</h5>
                                        <p>Live chat with forex specialist.</p>
                                        <div className="phone-box"><button type="button" className="theme-btn btn-two"><span>Start Chat</span></button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 info-block">
                                <div className="info-block-two">
                                    <div className="inner-box">
                                        <h5>Quick Contact</h5>
                                        <ul className="list-item">
                                            <li><Link href="tel:18007661234"><i className="flaticon-phone-call"></i>+1 800 766-1234</Link></li>
                                            <li><Link href="mailto:sendmail@example.com"><i className="flaticon-open-envelope"></i>sendmail@example.com</Link></li>
                                        </ul>
                                        <h4>Business Hours</h4>
                                        <p><span>Mon - Friday  :</span>  9 am to 5 pm, <span>Satday  :</span>  10 am to 1 pm</p>
                                        <h6><img src="assets/images/icons/icon-97.png" alt=""/><Link href="/contact">Whatsapp</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-style-two">
                <div className="auto-container">
                    <div className="title-inner">
                        <div className="sec-title">
                            <h6>Send Message</h6>
                            <h2>Drop a line, Stay in touch</h2>
                            <p>Please do not hesitate to contact us by sending a message.</p>
                        </div>
                        <div className="special-text">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}></div>
                            <h6><img src="assets/images/icons/icon-63.png" alt=""/> Say Hi &amp; Hello</h6>
                        </div>
                    </div>
                    <div className="form-inner">
                        <form method="post" action="sendemail.php" id="contact-form" className="default-form"> 
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                    <div className="form-group">
                                        <label><i className="fa-regular fa-user"></i> Your Name</label>
                                        <input type="text" name="username" placeholder="Enter name here" required=""/>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label><i className="fa-regular fa-envelope"></i> Email Address</label>
                                                <input type="email" name="email" placeholder="Email address" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label><i className="fa-solid fa-phone"></i> Phone <span>(optional)</span></label>
                                                <input type="text" name="phone" required="" placeholder="Ph num"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label><i className="fa-regular fa-building"></i> Organization <span>(optional)</span></label>
                                        <input type="text" name="subject" required="" placeholder="Subject"/>
                                    </div>
                                    <div className="form-group">
                                        <label><i className="fa-regular fa-comment"></i> Want to Discuss About</label>
                                        <div className="select-box">
                                            <select className="selectmenu">
                                                <option>Withdrawals</option>
                                                <option>Currency Pairs</option>
                                                <option>Platform & Tools</option>
                                                <option>Monitoring & Support</option>
                                                <option>Education & Training</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                                    <label><i className="fa-solid fa-text-height"></i> Message</label>
                                    <div className="message-box">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message goes here"></textarea>
                                        </div>
                                        <button className="theme-btn btn-two" type="submit" name="submit-form"><span>Start Chat</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="google-map-section">
                <div className="map-inner">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={550} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="map-content">
                    <div className="icon-box"><i className="flaticon-map-point"></i></div>
                    <div className="location-box">
                        <h5>Newyork</h5>
                        <p>24/7, 1st Floor Global Str, 2nd <br />Cross, NY 10005.</p>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}