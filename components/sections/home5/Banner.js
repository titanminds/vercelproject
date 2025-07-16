'use client'
import Link from "next/link"
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CircleText from "../../../components/elements/CircleText"

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

        <section className="banner-style-five">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-30.png)" }}></div>
            </div>
            <Swiper {...swiperOptions} className="theme_carousel banner-carousel">
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-4.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="curve-text">
                                <div className="link"><Link href="/index-5"><i className="flaticon-right-arrow-1"></i></Link></div>
                                <div className="curved-circle-2"><CircleText text="Pleaseclicktofurtherexplore&nbsp;&nbsp;.&nbsp;&nbsp;" radius={65} /></div>
                            </div>
                            <h2>Innovation <br />in Forex, Profits <br />in Mind</h2>
                            <p>Belongs to those who fail in their duty through weakness of will readable <br />saying through shrinking from toil & pain.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-5.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="curve-text">
                                <div className="link"><Link href="/index-5"><i className="flaticon-right-arrow-1"></i></Link></div>
                                <div className="curved-circle-2"><CircleText text="Pleaseclicktofurtherexplore&nbsp;&nbsp;.&nbsp;&nbsp;" radius={65} /></div>
                            </div>
                            <h2>Strategies <br />for Financial Empowerment</h2>
                            <p>Account of the system, and expound the actual teachings of the <br />great explorer of the truth, the master.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="curve-text">
                                <div className="link"><Link href="/index-5"><i className="flaticon-right-arrow-1"></i></Link></div>
                                <div className="curved-circle-2"><CircleText text="Pleaseclicktofurtherexplore&nbsp;&nbsp;.&nbsp;&nbsp;" radius={65} /></div>
                            </div>
                            <h2>Investing <br />in Your Forex Future</h2>
                            <p>To take a trivial example, which of us ever undertakes laborious physical <br />exercise, except to obtain some advantage from it.</p>
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
        </section>

        </>
    )
}
