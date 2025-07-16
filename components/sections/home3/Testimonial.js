'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import React from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {
  return (
    <>
      <section className="testimonial-style-two sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>Testimonials</h6>
                    <h2>Hear what traders think</h2>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="theme_carousel">
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <h5>Experience Like Never Before</h5>
                                <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                        <h3>Nathan Felix</h3>
                                        <span className="designation">California, USA</span>
                                    </div>
                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms of pleasures of the moment reader will be distracted all by the readable.</p>
                                    <div className="lower-box">
                                        <div className="text-box">
                                            <span>Payout</span>
                                            <h3>$4,350</h3>
                                        </div>
                                        <div className="rating">
                                            <h6><i className="flaticon-rate-star-button"></i>4.9</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <h5>Made Simple and Easy</h5>
                                <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                        <h3>Eloise Juniper</h3>
                                        <span className="designation">Liverpool, UK</span>
                                    </div>
                                    <p>Cases are perfect simple easy distinguish in a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do best.</p>
                                    <div className="lower-box">
                                        <div className="text-box">
                                            <span>Payout</span>
                                            <h3>$3,940</h3>
                                        </div>
                                        <div className="rating">
                                            <h6><i className="flaticon-rate-star-button"></i>5.0</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <h5>TM9FX Changed My Life!</h5>
                                <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                        <h3>Richard Harry</h3>
                                        <span className="designation">Munich, German</span>
                                    </div>
                                    <p>To the claims of duty or the obligations of business it will frequently occur that have to be repudiated these matters to this principle of selection.</p>
                                    <div className="lower-box">
                                        <div className="text-box">
                                            <span>Payout</span>
                                            <h3>$2,175</h3>
                                        </div>
                                        <div className="rating">
                                            <h6><i className="flaticon-rate-star-button"></i>4.9</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <h5>Experience Like Never Before</h5>
                                <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                        <h3>Nathan Felix</h3>
                                        <span className="designation">California, USA</span>
                                    </div>
                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms of pleasures of the moment reader will be distracted all by the readable.</p>
                                    <div className="lower-box">
                                        <div className="text-box">
                                            <span>Payout</span>
                                            <h3>$4,350</h3>
                                        </div>
                                        <div className="rating">
                                            <h6><i className="flaticon-rate-star-button"></i>4.9</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <h5>Made Simple and Easy</h5>
                                <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                        <h3>Eloise Juniper</h3>
                                        <span className="designation">Liverpool, UK</span>
                                    </div>
                                    <p>Cases are perfect simple easy distinguish in a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do best.</p>
                                    <div className="lower-box">
                                        <div className="text-box">
                                            <span>Payout</span>
                                            <h3>$3,940</h3>
                                        </div>
                                        <div className="rating">
                                            <h6><i className="flaticon-rate-star-button"></i>5.0</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <h5>Fxvibe Changed My Life!</h5>
                                <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                        <h3>Richard Harry</h3>
                                        <span className="designation">Munich, German</span>
                                    </div>
                                    <p>To the claims of duty or the obligations of business it will frequently occur that have to be repudiated these matters to this principle of selection.</p>
                                    <div className="lower-box">
                                        <div className="text-box">
                                            <span>Payout</span>
                                            <h3>$2,175</h3>
                                        </div>
                                        <div className="rating">
                                            <h6><i className="flaticon-rate-star-button"></i>4.9</h6>
                                        </div>
                                    </div>
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
