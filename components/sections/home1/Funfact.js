'use client'
import { useState } from "react"

export default function Funfact() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
      <section className="funfact-section bg-color-1">
            <div className="bg-layer"></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="sec-title">
                                <h6>Magic Numbers</h6>
                                <h2>Service that speaks volumes</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt=""/></div>
                                    <h2>4 <span>Hours</span></h2>
                                    <p>Avg Payout <br />Processing Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt=""/></div>
                                    <h2>2 <span>Days</span></h2>
                                    <p>To Earn a <br />Trading Account</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt=""/></div>
                                    <h2>10 <span>Million</span></h2>
                                    <p>No. of Trades Opened <br />Last Month</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-9.png" alt=""/></div>
                                    <h2>8+ <span>Years</span></h2>
                                    <p>Provide Funds to Futures <br />Traders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="tabs-box chart-one">
                                <h5>Last 6 Months Payout <br />Details</h5>
                                <div className="tab-btn-box">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>Apr</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>May</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "tab-btn"}>Jun</li>
                                        <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn" : "tab-btn"}>Jul</li>
                                        <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "p-tab-btn active-btn" : "tab-btn"}>Aug</li>
                                        <li onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "p-tab-btn active-btn" : "tab-btn"}>Sep</li>
                                    </ul>
                                </div>
                                <div className="tabs-content">
                                    <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                                        <div className="content-box">
                                            <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                            <div className="text-box">
                                                <h3>$42,4670</h3>
                                                <p><i className="flaticon-right-up"></i>+6.39%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="may">
                                        <div className="content-box">
                                            <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                            <div className="text-box">
                                                <h3>$36,4670</h3>
                                                <p><i className="flaticon-right-up"></i>+5.39%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"} id="jun">
                                        <div className="content-box">
                                            <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                            <div className="text-box">
                                                <h3>$52,4670</h3>
                                                <p><i className="flaticon-right-up"></i>+8.39%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"} id="jul">
                                        <div className="content-box">
                                            <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                            <div className="text-box">
                                                <h3>$69,4670</h3>
                                                <p><i className="flaticon-right-up"></i>+11.39%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 5 ? "tab p-tab active-tab" : "tab"} id="aug">
                                        <div className="content-box">
                                            <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                            <div className="text-box">
                                                <h3>$47,4670</h3>
                                                <p><i className="flaticon-right-up"></i>+8.39%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 6 ? "tab p-tab active-tab" : "tab"} id="sep">
                                        <div className="content-box">
                                            <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                            <div className="text-box">
                                                <h3>$30,4670</h3>
                                                <p><i className="flaticon-right-up"></i>+3.39%</p>
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
    </>
  )
}
