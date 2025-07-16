import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"

export default function Banner() {
  return (
    <>
        <section className="banner-style-four">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
            </div>
            <div className="outer-container">
                <div className="inner-box">
                    <div className="content-box">
                        <div className="video-btn">
                            <VideoPopup/>
                        </div>
                        <h2>The Preferred <br />Option for Traders</h2>
                        <p>Belongs to those who fail in their duty through weakness of will <br />saying through shrinking from toil & pain.</p>
                        <div className="list-inner">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
                            <ul className="list-style-two clearfix">
                                <li>Accurate Profit Calculation</li>
                                <li>Risk Management</li>
                            </ul>
                        </div>
                        <div className="btn-box"><Link href="/index-4" className="theme-btn btn-two"><span>Start Trading</span></Link></div>
                    </div>
                    <div className="image-box">
                        <figure className="image"><img src="assets/images/resource/mockup-2.png" alt=""/></figure>
                        <div className="image-content">
                            <h6>Last Year Winnig Ratio</h6>
                            <h3>84.65%</h3>
                            <p><i className="flaticon-right-up"></i>+6.39%</p>
                            <div className="bar"><img src="assets/images/icons/bar-3.png" alt=""/></div>
                        </div>
                        <div className="market-comparison">
                            <h6>Market Comparison</h6>
                            <figure className="chart"><img src="assets/images/icons/chart-1.png" alt=""/></figure>
                            <ul className="list-item">
                                <li>Option 1</li>
                                <li>Option 2</li>
                            </ul>
                            <h5>Value</h5>
                            <h3>$42,4670</h3>
                        </div>
                    </div>
                </div>
                <div className="rating-box centred">
                    <div className="inner">
                        <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt=""/></div>
                        <h3>Trustpilot</h3>
                        <h5><i className="flaticon-rate-star-button"></i><i className="flaticon-rate-star-button"></i>Best Rated<i className="flaticon-rate-star-button"></i><i className="flaticon-rate-star-button"></i></h5>
                        <p>from 1.5 million traders</p>
                        <span>4.9/5</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
