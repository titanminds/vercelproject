'use client'
import { useState } from "react"
import Link from "next/link"


export default function Offer() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
        <section className="offer-section sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>What we Offer</h6>
                    <h2>Provide all your needs</h2>
                </div>
                <div className="tabs-box">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <div className="tab-btn-box">
                                    <ul className="tab-btns tab-buttons clearfix">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>Trading Accounts</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>Monitoring & Support</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "tab-btn"}>Platforms & Tools</li>
                                        <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn" : "tab-btn"}>Education & Training</li>
                                    </ul>
                                </div>
                                <div className="inner-box">
                                    <h5>Interesting Fact</h5>
                                    <p><img src="assets/images/icons/icon-24.png" alt=""/>No. of Trades Opened Last Month</p>
                                    <h3>10 <span>Million</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                                    <div className="content-box">
                                        <div className="text-box">
                                            <h3>Trading Accounts</h3>
                                            <p>Foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty as saying through shrinking.</p>
                                            <Link href="/index-2"><span>Read More</span></Link>
                                        </div>
                                        <figure className="image-box"><img src="assets/images/resource/offers-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="standard">
                                    <div className="content-box">
                                        <div className="text-box">
                                            <h3>Monitoring & Support</h3>
                                            <p>Foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty as saying through shrinking.</p>
                                            <Link href="/index-2"><span>Read More</span></Link>
                                        </div>
                                        <figure className="image-box"><img src="assets/images/resource/offers-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"} id="standard2">
                                    <div className="content-box">
                                        <div className="text-box">
                                            <h3>Platforms & Tools</h3>
                                            <p>Foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty as saying through shrinking.</p>
                                            <Link href="/index-2"><span>Read More</span></Link>
                                        </div>
                                        <figure className="image-box"><img src="assets/images/resource/offers-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"} id="standard3">
                                    <div className="content-box">
                                        <div className="text-box">
                                            <h3>Education & Training</h3>
                                            <p>Foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty as saying through shrinking.</p>
                                            <Link href="/index-2"><span>Read More</span></Link>
                                        </div>
                                        <figure className="image-box"><img src="assets/images/resource/offers-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                            <div className="right-content">
                                <div className="text-box">
                                    <h5>Payout Details 2023</h5>
                                    <p>Blame belongs those who fail foresee.</p>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/dashboard-2.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
