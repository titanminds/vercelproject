import Link from "next/link"

export default function Chooseus() {
  return (
    <>
      <section className="chooseus-style-three sec-pad">
            <div className="auto-container">
                <div className="sec-title centred light">
                    <h6>Key Highlights</h6>
                    <h2>Reasons for choosing us</h2>
                </div>
                <div className="inner-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 left-column">
                            <div className="left-content clearfix">
                                <div className="single-item">
                                    <h5><Link href="/index-3"><i className="flaticon-check-1"></i> 90% Virtual Profit Split</Link></h5>
                                </div>
                                <div className="single-item">
                                    <h5><Link href="/index-3"><i className="flaticon-check-1"></i> 10% Virtual Profit</Link></h5>
                                </div>
                                <div className="single-item">
                                    <h5><Link href="/index-3"><i className="flaticon-check-1"></i> 1-step Evaluation</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/chooseus-1.jpg" alt=""/></figure>
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
                                <span className="big-text">TM9FX</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                            <div className="right-content clearfix">
                                <div className="single-item">
                                    <h5><Link href="/index-3"><i className="flaticon-check-1"></i> 90% Virtual Profit Split</Link></h5>
                                </div>
                                <div className="single-item">
                                    <h5><Link href="/index-3"><i className="flaticon-check-1"></i> 10% Virtual Profit</Link></h5>
                                </div>
                                <div className="single-item">
                                    <h5><Link href="/index-3"><i className="flaticon-check-1"></i> 1-step Evaluation</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-content centred">
                    <h3>90% Virtual Profit Split</h3>
                    <p>Packages and web page editors now use lorem ipsum as their default model text, and a search for lorem <br />will uncover many web sites still in their infancy. Various versions</p>
                    <Link href="/index-3" className="theme-btn btn-two"><span>More Details</span></Link>
                </div>
            </div>
        </section>
    </>
  )
}
