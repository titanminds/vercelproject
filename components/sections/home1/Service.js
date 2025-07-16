import Link from "next/link"

export default function Service() {
  return (
    <>
        <section className="service-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>What we Offer</h6>
                    <h2>Provide all you need for <br />trading success</h2>
                </div>
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
                    <div className="col-lg-4 col-md-6 col-sm-12 image-block">
                        <div className="image-inner">
                            <figure className="image clearfix"><img src="assets/images/resource/vector-1.png" alt=""/></figure>
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
                        <div className="service-block-two">
                            <div className="inner-box">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/service/service-5.jpg)" }}></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt=""/></div>
                                <h3>TM9FX <br />Expert Guidance for Financial Rise!...</h3>
                                <p>Customized Forex Strategy Consultation.</p>
                                <Link href="/" className="theme-btn"><span>Start Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
