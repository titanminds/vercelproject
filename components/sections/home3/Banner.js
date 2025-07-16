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
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner() {
  return (
    <>
      <section className="banner-style-three centred">
            <Swiper {...swiperOptions} className="theme_carousel banner-carousel">
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                            <h6>Welcome to TM9FX</h6>
                            <h2>Maximizing Gains <br />Empowering Traders.</h2>
                            <p>Unleashing Profit Potential, One Trade at a Time.</p>
                            <div className="btn-box">
                                <Link href="/index-3" className="theme-btn btn-two"><span>Start Trading</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                            <h6>Trading Platforms</h6>
                            <h2>Seamless Trading <br />with MT4 & MT5 Platform.</h2>
                            <p>Transforming Trades, Elevating Profits.</p>
                            <div className="btn-box">
                                <Link href="/index-3" className="theme-btn btn-two"><span>Start Trading</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                            <h6>Trading Tomorrow, Today</h6>
                            <h2>Beyond Boundaries, <br />Beyond Profits.</h2>
                            <p>Infinite Possibilities, One Forex Firm.</p>
                            <div className="btn-box">
                                <Link href="/index-3" className="theme-btn btn-two"><span>Start Trading</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="owl-dots">
                    <div className="swiper-pagination"></div>
                </div>

                <div className="owl-nav">
                    <button type="button" className="owl-prev"><span className="flaticon-left-align"></span></button>
                    <button type="button" className="owl-next"><span className="flaticon-right"></span></button>
                </div>
            </Swiper>
            <ul className="social-links">
                <li><a href="index-3.html"><i className="flaticon-facebook"></i></a></li>
                <li><a href="index-3.html"><i className="flaticon-video-camera"></i></a></li>
                <li><a href="index-3.html"><i className="flaticon-instagram-logo"></i></a></li>
                <li><a href="index-3.html"><i className="flaticon-youtube"></i></a></li>
            </ul>
        </section>
    </>
  )
}
