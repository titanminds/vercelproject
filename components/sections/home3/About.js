import Link from "next/link"

export default function About() {
  return (
    <>
      <section className="about-style-two">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/about-2.jpg" alt=""/></figure>
                            <div className="experience-box">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-37.png" alt=""/></div>
                                <h2>10+ <span>Years</span></h2>
                                <h5>Experience in the Market</h5>
                            </div>
                            <div className="image-content">
                                <h6>Last Year Winnig Ratio</h6>
                                <h3>84.65%</h3>
                                <p><i className="flaticon-right-up"></i>+6.39%</p>
                                <div className="bar"><img src="assets/images/icons/bar-2.png" alt=""/></div>
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
                                    <div className="icon-box"><img src="assets/images/icons/icon-38.png" alt=""/></div>
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
    </>
  )
}
