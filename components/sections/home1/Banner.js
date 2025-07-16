'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import React from 'react'
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

        <section className="banner-section">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
            <Swiper {...swiperOptions} className="theme_carousel banner-carousel">
                <SwiperSlide className="slide-item">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h6>Welcome to TM9FX
                                    </h6>
                                    <h2>Realizing <br />forex potential, one trade at <br />a time!..</h2>
                                    <div className="btn-box">
                                        <Link href="/" className="theme-btn btn-one"><span>Start Trading</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/banner/banner-img-1.jpg" alt=""/></figure>
                                    <div className='curve-text'>
                                        <div className="curved-circle"><CircleText text="Discover&nbsp;.&nbsp;Trade&nbsp;.&nbsp;Prosper&nbsp;.&nbsp;" radius={58} /></div>
                                    </div>
                                    <div className="text-box">
                                        <p>Who loves or pursues or desires to obtain pain of itself it is pain, but because occasionally...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h6>Profit with Precision</h6>
                                    <h2>Excellence in every trade, prosperity in every move.</h2>
                                    <div className="btn-box">
                                        <Link href="/" className="theme-btn btn-one"><span>Start Trading</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/banner/banner-img-2.jpg" alt=""/></figure>
                                    <div className='curve-text'>
                                        <div className="curved-circle"><CircleText text="Discover&nbsp;.&nbsp;Trade&nbsp;.&nbsp;Prosper&nbsp;.&nbsp;" radius={58} /></div>
                                    </div>
                                    <div className="text-box">
                                        <p>Occur in which toil & pain can procure him some great pleasure. To take a trivial example...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h6>Trading Platform</h6>
                                    <h2>Smart trades, Bold moves, Empowered by MT4 & MT5.</h2>
                                    <div className="btn-box">
                                        <Link href="/" className="theme-btn btn-one"><span>Start Trading</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/banner/banner-img-3.jpg" alt=""/></figure>
                                    <div className='curve-text'>
                                        <div className="curved-circle"><CircleText text="Discover&nbsp;.&nbsp;Trade&nbsp;.&nbsp;Prosper&nbsp;.&nbsp;" radius={58} /></div>
                                    </div>
                                    <div className="text-box">
                                        <p>The great explorer of the truth, the master-builder of human happiness dislikes or avoids...</p>
                                    </div>
                                </div>
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
        </section>

        </>
    )
}
