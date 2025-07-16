'use client'
import { useState } from "react"
import Link from "next/link"

export default function Pricing() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
        <section className="pricing-style-two bg-color-7">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>Join TM9FX</h6>
                    <h2>Enter a trading challenge</h2>
                </div>
                <div className="tabs-box">
                    <div className="tab-btn-box centred">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>1 Step Challenge</li>
                                {/*<li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>2 Step Challenge</li>*/}
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-two">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Standard</h3>
                                                <p>Packages and web page editors.</p>
                                                <h2>$50 <span></span></h2>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li>Minimal Initial Deposit<span>$10</span></li>
                                                    <li>Spread<span>0.30</span></li>
                                                    <li>Commission<span>00</span></li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <div className="check-box">
                                                    <input className="check" type="checkbox" id="checkbox1"/>
                                                    <label for="checkbox1"></label>
                                                </div>
                                                <Link href="/index-3"><span>Continue</span></Link>
                                            </div>,
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-two">
                                        <div className="special-text"><h6>,PRO</h6></div>
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>PRO</h3>
                                                <p>Packages and web page editors.</p>
                                                <h2>$500 <span></span></h2>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li>Minimal Initial Deposit<span>$500</span></li>
                                                    <li>Spread<span>0.20</span></li>
                                                    <li>Commission<span>00</span></li>
                                                   
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <div className="check-box">
                                                    <input className="check" type="checkbox" id="checkbox2"/>
                                                    <label for="checkbox2"></label>
                                                </div>
                                                <Link href="/index-3"><span>Continue</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-two">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>ECN</h3>
                                                <p>Packages and web page editors.</p>
                                                <h2>$1000 <span></span></h2>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li>Minimal Initial Deposit<span>$1000</span></li>
                                                    <li>Spread<span>0.10</span></li>
                                                    <li>Commission<span>00</span></li>
                                                   
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <div className="check-box">
                                                    <input className="check" type="checkbox" id="checkbox3"/>
                                                    <label for="checkbox3"></label>
                                                </div>
                                                <Link href="/index-3"><span>Continue</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="step_two">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-two">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Starter Plan</h3>
                                                <p>Packages and web page editors.</p>
                                                <h2>$110k <span>Funding amount</span></h2>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li>Target<span>$500</span></li>
                                                    <li>Min.Trading Days<span>5 Days</span></li>
                                                    <li>Daily Drawdown<span>5%</span></li>
                                                    <li>Max.Drawdown<span>10%</span></li>
                                                    <li>Trading Period<span>No Limit</span></li>
                                                    <li>Refundable Fee<span>99 o/t</span></li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <div className="check-box">
                                                    <input className="check" type="checkbox" id="checkbox4"/>
                                                    <label for="checkbox4">Compare</label>
                                                </div>
                                                <Link href="/index-3"><span>Start Now</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-two">
                                        <div className="special-text"><h6>Popular Plan</h6></div>
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Standard Plan</h3>
                                                <p>Packages and web page editors.</p>
                                                <h2>$125k <span>Funding amount</span></h2>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li>Target<span>$1000</span></li>
                                                    <li>Min.Trading Days<span>5 Days</span></li>
                                                    <li>Daily Drawdown<span>5%</span></li>
                                                    <li>Max.Drawdown<span>10%</span></li>
                                                    <li>Trading Period<span>No Limit</span></li>
                                                    <li>Refundable Fee<span>199 o/t</span></li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <div className="check-box">
                                                    <input className="check" type="checkbox" id="checkbox5"/>
                                                    <label for="checkbox5">Compare</label>
                                                </div>
                                                <Link href="/index-3"><span>Start Now</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-two">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Advanced Plan</h3>
                                                <p>Packages and web page editors.</p>
                                                <h2>$150k <span>Funding amount</span></h2>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li>Target<span>$2000</span></li>
                                                    <li>Min.Trading Days<span>5 Days</span></li>
                                                    <li>Daily Drawdown<span>5%</span></li>
                                                    <li>Max.Drawdown<span>10%</span></li>
                                                    <li>Trading Period<span>No Limit</span></li>
                                                    <li>Refundable Fee<span>299 o/t</span></li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <div className="check-box">
                                                    <input className="check" type="checkbox" id="checkbox6"/>
                                                    <label for="checkbox6">Compare</label>
                                                </div>
                                                <Link href="/index-3"><span>Start Now</span></Link>
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
