'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import React from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function Funfact() {
  return (
    <>
      <section className="funfact-style-two">
            <div className="auto-container">
                <div className="title-text">
                    <h3>Top Pairs & Pricing in Market</h3>
                </div>
            </div>
            <div className="pricing-content">
                <Swiper {...swiperOptions}>
                <SwiperSlide>
                        <div className="pairs-block-one red-block">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>eur</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>usd</li>
                                    </ul>
                                    <span className="currency">$1.06199 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">+0.04%</span>
                                        <span className="sell">Sell at 1.06199</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pairs-block-one">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>usd</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>jpy</li>
                                    </ul>
                                    <span className="currency">$1.22195 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">+0.04%</span>
                                        <span className="sell">Sell at 1.06199</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pairs-block-one">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>Gbp</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>usd</li>
                                    </ul>
                                    <span className="currency">$1.24100 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">+0.05%</span>
                                        <span className="sell">Sell at 1.24350</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pairs-block-one red-block">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>eur</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>Gbp</li>
                                    </ul>
                                    <span className="currency">$0.08388 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">-0.12%</span>
                                        <span className="sell">Sell at 0.06185</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pairs-block-one red-block">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>eur</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>usd</li>
                                    </ul>
                                    <span className="currency">$1.06199 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">+0.04%</span>
                                        <span className="sell">Sell at 1.06199</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pairs-block-one">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>usd</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>jpy</li>
                                    </ul>
                                    <span className="currency">$1.22195 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">+0.04%</span>
                                        <span className="sell">Sell at 1.06199</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pairs-block-one">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>Gbp</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>usd</li>
                                    </ul>
                                    <span className="currency">$1.24100 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">+0.05%</span>
                                        <span className="sell">Sell at 1.24350</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pairs-block-one red-block">
                            <div className="inner-box">
                                <div className="left-column">
                                    <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                    <ul className="list-item clearfix">
                                        <li>eur</li>
                                        <li><i className="flaticon-exchange"></i></li>
                                        <li>Gbp</li>
                                    </ul>
                                    <span className="currency">$0.08388 Usd</span>
                                </div>
                                <div className="right-column">
                                    <div className="text">
                                        <span className="currency-rate">-0.12%</span>
                                        <span className="sell">Sell at 0.06185</span>
                                    </div>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn"><span>Trade</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="funfact-content">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-33.png" alt=""/></div>
                                    <h2>4 <span>Hours</span></h2>
                                    <p>Avg Payout <br />Processing Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-34.png" alt=""/></div>
                                    <h2>2 <span>Days</span></h2>
                                    <p>To Earn a <br />Trading Account</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt=""/></div>
                                    <h2>10 <span>Million</span></h2>
                                    <p>No. of Trades Opened <br />Last Month</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-36.png" alt=""/></div>
                                    <h2>6 <span>Billion</span></h2>
                                    <p>Trader Payouts Provides <br />Since 2013</p>
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
