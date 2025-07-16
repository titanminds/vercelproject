import Link from "next/link"

export default function News() {
  return (
    <>
        <section className="news-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>News & Updates</h6>
                    <h2>Latest Updates & Headlines</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""/></Link></figure>
                                <div className="lower-content">
                                    <h3><Link href="/blog-details">How Much do you Need to Start Forex Trading?</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Dustin Langer</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 14, 2023</li>
                                    </ul>
                                    <div className="lower-box">
                                        <h6>Trading Tips</h6>
                                        <Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""/></Link></figure>
                                <div className="lower-content">
                                    <h3><Link href="/blog-details">How to Make $1.5k+ Profits with $20k Funded a/c</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Raana Irave</a></li>
                                        <li><i className="flaticon-calendar"></i>Sep 05, 2023</li>
                                    </ul>
                                    <div className="lower-box">
                                        <h6>Trading Markets</h6>
                                        <Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-3.jpg" alt=""/></Link></figure>
                                <div className="lower-content">
                                    <h3><Link href="/blog-details">How a Long Forex Position Paid off Incredibly Twice</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="flaticon-edit"></i><a href="blog-details.html">Brendan Duke</a></li>
                                        <li><i className="flaticon-calendar"></i>Aug 28, 2023</li>
                                    </ul>
                                    <div className="lower-box">
                                        <h6>Updates</h6>
                                        <Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                    </div>
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
