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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}

export default function News() {
  return (
    <>
        <section className="news-style-two sec-pad">
            <div className="auto-container">
                <div className="sec-title">
                    <h6>News & Updates</h6>
                    <h2>Latest Updates & Headlines</h2>
                    <a href="blog.html" className="theme-btn btn-two"><span>Read More</span></a>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="theme_carousel">
                        <SwiperSlide>
                            <div className="news-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-4.jpg" alt=""/></Link></figure>
                                    <h6>Trading Tips</h6>
                                    <h3><a href="blog-details.html">How Much do you Need to Start Forex Trading?</a></h3>
                                    <p>Reader will be distracted the readable content page when looking...</p>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Dustin Langer</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 14, 2023</li>
                                    </ul>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-5.jpg" alt=""/></Link></figure>
                                    <h6>Trading Markets</h6>
                                    <h3><a href="blog-details.html">How to Make $1.5k Profits with $20k Funded a/c</a></h3>
                                    <p>Undertakes laborious physical exercise, to obtain some advantage...</p>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Raana Irave</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 05, 2023</li>
                                    </ul>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-4.jpg" alt=""/></Link></figure>
                                    <h6>Trading Tips</h6>
                                    <h3><a href="blog-details.html">How Much do you Need to Start Forex Trading?</a></h3>
                                    <p>Reader will be distracted the readable content page when looking...</p>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Dustin Langer</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 14, 2023</li>
                                    </ul>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-5.jpg" alt=""/></Link></figure>
                                    <h6>Trading Markets</h6>
                                    <h3><a href="blog-details.html">How to Make $1.5k Profits with $20k Funded a/c</a></h3>
                                    <p>Undertakes laborious physical exercise, to obtain some advantage...</p>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Raana Irave</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 05, 2023</li>
                                    </ul>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-4.jpg" alt=""/></Link></figure>
                                    <h6>Trading Tips</h6>
                                    <h3><a href="blog-details.html">How Much do you Need to Start Forex Trading?</a></h3>
                                    <p>Reader will be distracted the readable content page when looking...</p>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Dustin Langer</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 14, 2023</li>
                                    </ul>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-5.jpg" alt=""/></Link></figure>
                                    <h6>Trading Markets</h6>
                                    <h3><a href="blog-details.html">How to Make $1.5k Profits with $20k Funded a/c</a></h3>
                                    <p>Undertakes laborious physical exercise, to obtain some advantage...</p>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Raana Irave</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 05, 2023</li>
                                    </ul>
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="dots-style-one">
                            <div className="swiper-pagination"></div>
                        </div>

                        <div className="nav-style-one">
                            <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                            <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    </>
  )
}
