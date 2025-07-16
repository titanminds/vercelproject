'use client'
import { useState } from "react"
import Link from "next/link"

export default function Funding() {

    const [activeTab, setActiveTab] = useState('#tab1');
    const [subActiveTab, setsubActiveTab] = useState('#tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const handleSubTabClick = (tabId) => {
        setsubActiveTab(tabId);
    };

  return (
    <>
         <section className="funding-section home-5 bg-color-8">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                    <h6>Join TM9FX</h6>
                    <h2>Enter a trading challenge</h2>
                    <div className="icon-box"><i className="flaticon-live-chat"></i></div>
                </div>
                <div className="tabs-box">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-12 col-sm-12 btns-column">
                            <div className="tab-btn-one">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li className={`tab-btn ${activeTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab1')}><span>TM9FX Standard Plan</span></li>
                                    <li className={`tab-btn ${activeTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab2')}><span>PRO</span></li>
                                    <li className={`tab-btn ${activeTab === '#tab3' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab3')}><span>ECN</span></li>

                                </ul>
                            </div>
                            <div className="payment-system">
                                <h6>We Accept:</h6>
                                <p>Accept a wide range of cards.</p>
                                <ul className="card-list clearfix">
                                    <li><Link href="/"><img src="assets/images/resource/card-1.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/resource/card-2.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/resource/card-3.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/resource/card-4.png" alt=""/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 right-column">
                            <div className="tabs-content">
                                <div  className={`tab ${activeTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                    <div className="tabs-box-2">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2 clearfix">
                                                <li className={`tab-btn ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}>1 Step Challenge</li>
                                                {/*<li className={`tab-btn ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}>2 Step Challenge</li>*/}
                                            </ul>
                                        </div>
                                        <div className="tabs-content-2">
                                            <div  className={`tab ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>50$<span></span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Continue</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Minimal Initial Deposit<span>$10</span></li>
                                                                <li>Spread<span>0.30</span></li>
                                                                <li>Commission<span>00</span></li>
                                                               
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>20k<span>.USD</span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Start Now</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Target<span>$1600</span></li>
                                                                <li>Min.Trading Days<span>5 Days</span></li>
                                                                <li>Daily Drawdown<span>5%</span></li>
                                                                <li>Max.Drawdown<span>10%</span></li>
                                                                <li>Trading Period<span>No Limit</span></li>
                                                                <li>Refundable Fee<span>$99 O/T</span></li>
                                                                <li>Leverage<span>Up to 1:100</span></li>
                                                                <li>Monthly Fees<span>No Fees</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={`tab ${activeTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                    <div className="tabs-box-2">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2 clearfix">
                                                <li className={`tab-btn ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}>1 Step Challenge</li>
                                               {/* <li className={`tab-btn ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}>2 Step Challenge</li>*/}
                                            </ul>
                                        </div>
                                        <div className="tabs-content-2">
                                            <div  className={`tab ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>500$<span></span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Continue</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Minimal Initial Deposit<span>$500</span></li>
                                                                <li>Spread<span>0.20</span></li>
                                                                <li>Commission<span>00</span></li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>40k<span>.USD</span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Continue</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Target<span>$3200</span></li>
                                                                <li>Min.Trading Days<span>5 Days</span></li>
                                                                <li>Daily Drawdown<span>5%</span></li>
                                                                <li>Max.Drawdown<span>10%</span></li>
                                                                <li>Trading Period<span>No Limit</span></li>
                                                                <li>Refundable Fee<span>$99 O/T</span></li>
                                                                <li>Leverage<span>Up to 1:100</span></li>
                                                                <li>Monthly Fees<span>No Fees</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={`tab ${activeTab === '#tab3' ? 'active-tab' : ''}`} id="tab3">
                                    <div className="tabs-box-2">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2 clearfix">
                                                <li className={`tab-btn ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}>1 Step Challenge</li>
                                                {/*<li className={`tab-btn ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}>2 Step Challenge</li>*/}
                                            </ul>
                                        </div>
                                        <div className="tabs-content-2">
                                            <div  className={`tab ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>1000$<span></span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Continue</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Minimal Initial Deposit<span>$1000</span></li>
                                                                <li>Spread<span>0.10</span></li>
                                                                <li>Commission<span>00</span></li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>60k<span>.USD</span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Continue</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Target<span>$4800</span></li>
                                                                <li>Min.Trading Days<span>5 Days</span></li>
                                                                <li>Daily Drawdown<span>5%</span></li>
                                                                <li>Max.Drawdown<span>10%</span></li>
                                                                <li>Trading Period<span>No Limit</span></li>
                                                                <li>Refundable Fee<span>$99 O/T</span></li>
                                                                <li>Leverage<span>Up to 1:100</span></li>
                                                                <li>Monthly Fees<span>No Fees</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={`tab ${activeTab === '#tab4' ? 'active-tab' : ''}`} id="tab4">
                                    <div className="tabs-box-2">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2 clearfix">
                                                <li className={`tab-btn ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}>1 Step Challenge</li>
                                                    {/*<li className={`tab-btn ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}>2 Step Challenge</li>*/}
                                            </ul>
                                        </div>
                                        <div className="tabs-content-2">
                                            <div  className={`tab ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>80k<span>.USD</span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Start Now</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Target<span>$6400</span></li>
                                                                <li>Min.Trading Days<span>5 Days</span></li>
                                                                <li>Daily Drawdown<span>5%</span></li>
                                                                <li>Max.Drawdown<span>10%</span></li>
                                                                <li>Trading Period<span>No Limit</span></li>
                                                                <li>Refundable Fee<span>$99 O/T</span></li>
                                                                <li>Leverage<span>Up to 1:100</span></li>
                                                                <li>Monthly Fees<span>No Fees</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                                <div className="content-box">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img src="assets/images/resource/vector-5.png" alt=""/></figure>
                                                                <h2>100k<span>.USD</span></h2>
                                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                                <Link href="/" className="theme-btn"><span>Start Now</span></Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                                            <ul className="trading-list clearfix">
                                                                <li>Target<span>$8000</span></li>
                                                                <li>Min.Trading Days<span>5 Days</span></li>
                                                                <li>Daily Drawdown<span>5%</span></li>
                                                                <li>Max.Drawdown<span>10%</span></li>
                                                                <li>Trading Period<span>No Limit</span></li>
                                                                <li>Refundable Fee<span>$99 O/T</span></li>
                                                                <li>Leverage<span>Up to 1:100</span></li>
                                                                <li>Monthly Fees<span>No Fees</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
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
