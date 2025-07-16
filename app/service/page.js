import Layout from "@/components/layout/Layout"

import Link from "next/link"


export default function Service_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Services">

            <section className="service-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>Service #1</h6>
                                    <h3><Link href="/service-details">Currency Pair and Analysis</Link></h3>
                                    <p>Holds in these matters this principles...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-1.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details" className="theme-btn"><span>Explore</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>Service #2</h6>
                                    <h3><Link href="/service-details-2">Proprietary Trading Accounts</Link></h3>
                                    <p>The great explorer of the truth master...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-2.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-2" className="theme-btn"><span>Explore</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>Service #3</h6>
                                    <h3><Link href="/service-details-3">Trading Platforms and Tools</Link></h3>
                                    <p>Rationally encounter consequences...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-3.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-3" className="theme-btn"><span>Explore</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>Service #4</h6>
                                    <h3><Link href="/service-details-4">Trade Monitoring and Support</Link></h3>
                                    <p>Ever undertakes laborious physical...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-4.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-4" className="theme-btn"><span>Explore</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>Service #5</h6>
                                    <h3><Link href="/service-details-5">Forex Education and Training</Link></h3>
                                    <p>Holds in these matters this principles...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-6.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-5" className="theme-btn"><span>Explore</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>Service #6</h6>
                                    <h3><Link href="/service-details-4">Research and Market News</Link></h3>
                                    <p>The great explorer of the truth master...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-7.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-4" className="theme-btn"><span>Explore</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-style-two bg-color-1 centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-46.png)" }}></div>
                <div className="auto-container">
                    <div className="inner-box">
                        <h2>Service inquiry, Any questions?</h2>
                        <p>Inquire with Confidence, Excel with Service.</p>
                        <ul className="info-list">
                            <li>
                                <span>Mail us!</span>
                                <h5><Link href="mailto:sendmail@example.com">sendmail@example.com</Link></h5>
                            </li>
                            <li>
                                <span>Call us!</span>
                                <h5><Link href="tel:1800766123456">+1 800 766-1234 & 56</Link></h5>
                            </li>
                        </ul>
                        <Link href="/service" className="theme-btn btn-two"><span>Compare Platform</span></Link>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}