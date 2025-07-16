'use client'
import Link from "next/link"
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function Offers() {
  return (
    <>
        <section className="offers-style-two">
            <div className="outer-container">
                <div className="auto-container">
                    <div className="sec-title light">
                        <h6>What we Offer</h6>
                        <h2>Provide all your needs</h2>
                    </div>
                    <div className="inner-container">
                        <Swiper {...swiperOptions} className="theme_carousel">
                            <SwiperSlide>
                                <div className="offers-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                                        <h5>01</h5>
                                        <div className="icon-box"><img src="assets/images/icons/icon-47.png" alt=""/></div>
                                        <h3><Link href="/index-4">Trading Accounts</Link></h3>
                                        <p>Packages & web page editors now use lorem ipsum as their default.</p>
                                        <div className="link"><Link href="/index-4"><i className="flaticon-right-arrow"></i></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="offers-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                                        <h5>02</h5>
                                        <div className="icon-box"><img src="assets/images/icons/icon-48.png" alt=""/></div>
                                        <h3><Link href="/index-4">Trading Platforms</Link></h3>
                                        <p>Business will frequently occurs that pleasures that too repudiate & annoyances.</p>
                                        <div className="link"><Link href="/index-4"><i className="flaticon-right-arrow"></i></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="offers-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                                        <h5>03</h5>
                                        <div className="icon-box"><img src="assets/images/icons/icon-49.png" alt=""/></div>
                                        <h3><Link href="/index-4">Monitoring</Link></h3>
                                        <p>Packages & web page editors now use lorem ipsum as their default. </p>
                                        <div className="link"><Link href="/index-4"><i className="flaticon-right-arrow"></i></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="offers-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                                        <h5>04</h5>
                                        <div className="icon-box"><img src="assets/images/icons/icon-50.png" alt=""/></div>
                                        <h3><Link href="/index-4">Training</Link></h3>
                                        <p>Business will frequently occurs that pleasures that too repudiate & annoyances.</p>
                                        <div className="link"><Link href="/index-4"><i className="flaticon-right-arrow"></i></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="offers-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                                        <h5>01</h5>
                                        <div className="icon-box"><img src="assets/images/icons/icon-47.png" alt=""/></div>
                                        <h3><Link href="/index-4">Trading Accounts</Link></h3>
                                        <p>Packages & web page editors now use lorem ipsum as their default.</p>
                                        <div className="link"><Link href="/index-4"><i className="flaticon-right-arrow"></i></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="offers-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                                        <h5>02</h5>
                                        <div className="icon-box"><img src="assets/images/icons/icon-48.png" alt=""/></div>
                                        <h3><Link href="/index-4">Trading Platforms</Link></h3>
                                        <p>Business will frequently occurs that pleasures that too repudiate & annoyances.</p>
                                        <div className="link"><Link href="/index-4"><i className="flaticon-right-arrow"></i></Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="dots-style-one">
                            <div className="swiper-pagination"></div>
                        </div>

                        <div className="nav-style-one">
                            <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                            <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
