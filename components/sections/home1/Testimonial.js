'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
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
            slidesPerView: 2,
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
export default function Testimonial() {
    return (
        <>
        <section className="testimonial-section sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>Testimonials</h6>
                    <h2>Hear what traders think</h2>
                </div>
                <div className="upper-box">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <h3><img src="assets/images/icons/icon-14.png" alt=""/>Trustpilot</h3>
                                <h6>Best-rated <br />4.9/5 <span>(Reviewed by 1.5 million traders.)</span></h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div className="right-content">
                                <h5><img src="assets/images/icons/icon-15.png" alt=""/>Share your thoughts about TM9FX</h5>
                                <div className="link"><Link href="/"><i className="flaticon-right-arrow"></i></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                    <h3>Nathan Felix</h3>
                                    <span className="designation">Director @ Naxly Info Tech</span>
                                </div>
                                <div className="text-box">
                                    <h5>Experience like never before<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms of pleasure of the moment.</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                    <h3>Eloise Juniper</h3>
                                    <span className="designation">Founder, Thinkquest Technologies</span>
                                </div>
                                <div className="text-box">
                                    <h5>made simple and efficient!<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                    <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                    <h3>Nathan Felix</h3>
                                    <span className="designation">Director @ Naxly Info Tech</span>
                                </div>
                                <div className="text-box">
                                    <h5>Experience like never before<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms of pleasure of the moment.</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                    <h3>Eloise Juniper</h3>
                                    <span className="designation">Founder, Thinkquest Technologies</span>
                                </div>
                                <div className="text-box">
                                    <h5>made simple and efficient!<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                    <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                    <h3>Nathan Felix</h3>
                                    <span className="designation">Director @ Naxly Info Tech</span>
                                </div>
                                <div className="text-box">
                                    <h5>Experience like never before<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms of pleasure of the moment.</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                    <h3>Nathan Felix</h3>
                                    <span className="designation">Director @ Naxly Info Tech</span>
                                </div>
                                <div className="text-box">
                                    <h5>Experience like never before<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms of pleasure of the moment.</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                    <h3>Eloise Juniper</h3>
                                    <span className="designation">Founder, Thinkquest Technologies</span>
                                </div>
                                <div className="text-box">
                                    <h5>made simple and efficient!<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                    <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
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
        </section>
        </>
    )
}


