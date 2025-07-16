import Layout from "@/components/layout/Layout"
//import "app/favicon.ico"//
import Link from "next/link"
import Working from "@/components/sections/home1/Working"
import Funding from "@/components/sections/home1/Funding"
import Pairs from "@/components/sections/home1/Pairs"
import Chooseus from "@/components/sections/home1/Chooseus"
import Testimonial from "@/components/sections/home1/Testimonial"
import Featured from "@/components/sections/home1/Featured"
import News from "@/components/sections/home1/News"

export default function About_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Company">
                
            <section className="about-style-four about-page sec-pad centred">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>About FXvibe</h6>
                        <h2>Pioneers in <br />proprietary forex trading</h2>
                    </div>
                    <div className="inner-box">
                        <div className="award-box">
                            <figure className="badge"><img src="assets/images/icons/badge-1.png" alt=""/></figure>
                            <span>Global Forex Awards <br />Mar, 2023</span>
                        </div>
                        <div className="text-box">
                            <p>Our forex company offers cutting-edge trading solutions, expert analysis, & exceptional customer support, empowering traders to thrive in the dynamic foreign exchange market.</p>
                            <figure className="signature"><img src="assets/images/icons/signature-1.png" alt=""/></figure>
                            <h5>Jack Santiago, <span>Ceo & Founder</span></h5>
                        </div>
                        <div className="award-box">
                            <figure className="badge"><img src="assets/images/icons/badge-2.png" alt=""/></figure>
                            <span>Best Customer Service <br />Jun, 2022</span>
                        </div>
                    </div>
                    <div className="links-box">
                        <ul className="links-list"> 
                            <li><Link href="/index-5"><span>+</span>Company Story</Link></li>
                            <li><Link href="/index-5"><span>+</span>Our Promise</Link></li>
                            <li><Link href="/index-5"><span>+</span>Our Core Values</Link></li>
                        </ul>
                    </div>
                    <figure className="image-box"><img src="assets/images/resource/about-3.jpg" alt=""/></figure>
                </div>
            </section>

            <section className="about-style-two">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/about-2.jpg" alt=""/></figure>
                                <div className="experience-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-35.png)" }}></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-37.png" alt=""/></div>
                                    <h2>10+ <span>Years</span></h2>
                                    <h5>Experience in the Market</h5>
                                </div>
                                <div className="image-content">
                                    <h6>Last Year Winnig Ratio</h6>
                                    <h3>84.65%</h3>
                                    <p><i className="flaticon-right-up"></i>+6.39%</p>
                                    <div className="bar"><img src="assets/images/icons/bar-4.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6>Corporate Journey</h6>
                                    <h2>In the world of forex,We lead</h2>
                                </div>
                                <div className="text-box">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of  making here is that it has a more-or-less normal distribution all letters as opposed to using.</p>
                                    <div className="single-item">
                                        <div className="icon-box"><img src="assets/images/icons/icon-67.png" alt=""/></div>
                                        <h3>Evolution</h3>
                                        <p>Nor again is there anyone who loves or pursues or all itself because it is pain.</p>
                                    </div>
                                    <Link href="/index-3" className="theme-btn btn-two"><span>Explore History</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="funfact-style-three bg-color-2 centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-36.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-68.png" alt=""/></div>
                                    <h2>4 <span>Hours</span></h2>
                                    <p>Avg Payout <br />Processing Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-69.png" alt=""/></div>
                                    <h2>2 <span>Days</span></h2>
                                    <p>To Earn a <br />Trading Account</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-70.png" alt=""/></div>
                                    <h2>10 <span>Million</span></h2>
                                    <p>No. of Trades Opened <br />Last Month</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-71.png" alt=""/></div>
                                    <h2>8+ <span>Years</span></h2>
                                    <p>Provide Funds to Futures <br />Traders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 <section className="statements-section bg-color-1 centred">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>Statements</h6>
                        <h2>Guiding principles of our <br />forex firm</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-one">
                                            <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/statement-1.jpg)" }}>
                                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-37.png)" }}></div>
                                                <h3>Our Mission</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-72.png" alt=""/></div>
                                                <p>Who chooses to enjoy a pleasures that has no annoying consequences or one who avoids a pain.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-73.png" alt=""/></div>
                                                <p>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-one">
                                            <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/statement-2.jpg)" }}>
                                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-37.png)" }}></div>
                                                <h3>Our Vision</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                            <div className="right-content">
                                <div className="statements-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-74.png" alt=""/></div>
                                        <h3>Our Core Values</h3>
                                        <p>Find fault with a man who chooses to enjoy a pleasure that has no annoying resultant pleasure.</p>
                                        <ul className="list-item">
                                            <li>Integrity</li>
                                            <li>Client-Centric</li>
                                            <li>Innovation</li>
                                            <li>Risk Management</li>
                                            <li>Professionalism</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>Team Members</h6>
                        <h2>Team behind our success</h2>
                        <a href="team.html" className="theme-btn btn-two"><span>See All Members</span></a>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="assets/images/team/team-1.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Michel Kyle</Link></h3>
                                        <p>Foresee the pain and trouble that are bound to ensue.</p>
                                        <div className="lower-box">
                                            <span className="designation">Founder</span>
                                            <ul className="social-links">
                                                <li><Link href="/about"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="assets/images/team/team-2.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Gerald Ivor</Link></h3>
                                        <p>Our being able to do what  like best, every pleasure occur.</p>
                                        <div className="lower-box">
                                            <span className="designation">cfo</span>
                                            <ul className="social-links">
                                                <li><Link href="/about"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="assets/images/team/team-3.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Nora Lillian</Link></h3>
                                        <p>Holds in these matters this principle of selection.</p>
                                        <div className="lower-box">
                                            <span className="designation">Head of Trading</span>
                                            <ul className="social-links">
                                                <li><Link href="/about"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="assets/images/team/team-4.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Michal Starck</Link></h3>
                                        <p>He rejects pleasures to secure other greater pleasures.</p>
                                        <div className="lower-box">
                                            <span className="designation">Market Analysts</span>
                                            <ul className="social-links">
                                                <li><Link href="/about"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Working/>
            <Funding/>
            <Pairs/>
            <Chooseus/>
            <Testimonial/>
            <Featured/>
            <News/>

            </Layout>
        </div>
    )
}