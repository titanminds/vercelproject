'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
        el: '.swiper-pagination-two',
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

export default function Chooseus() {
  return (
    <>
        <section className="chooseus-section sec-pad bg-color-2">
            <div className="auto-container">
                <div className="sec-title light">
                    <h6>Key Highlights</h6>
                    <h2>Reasons for choosing us</h2>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="theme_carousel">
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    </div>
                                    <h3>No Min. Trading Days</h3>
                                    <p>In a free hour when our power choice untrammelled and when nothing prevents our being able.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-12.png" alt=""/></div>
                                    </div>
                                    <h3>Best Profit Split</h3>
                                    <p>Duty or the obligations of business in it will frequently occur that pleasures all have to be repudiated.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-13.png" alt=""/></div>
                                    </div>
                                    <h3>Simple Trading Rules</h3>
                                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain all itself because it is pain.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    </div>
                                    <h3>No Min. Trading Days</h3>
                                    <p>In a free hour when our power choice untrammelled and when nothing prevents our being able.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-12.png" alt=""/></div>
                                    </div>
                                    <h3>Best Profit Split</h3>
                                    <p>Duty or the obligations of business in it will frequently occur that pleasures all have to be repudiated.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-13.png" alt=""/></div>
                                    </div>
                                    <h3>Simple Trading Rules</h3>
                                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain all itself because it is pain.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="dots-style-one">
                        <div className="swiper-pagination-two"></div>
                    </div>

                    <div className="nav-style-one">
                        <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                        <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
