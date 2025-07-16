import Link from "next/link"

export default function News() {
  return (
    <>
        <section className="news-style-three">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>News & Updates</h6>
                    <h2>Latest Updates & Headlines</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <h6>Trading Tips</h6>
                                <h3><Link href="/blog-details">How Much do you Need to Start Forex Trading?</Link></h3>
                                <ul className="post-info">
                                    <li><i className="flaticon-edit"></i><Link href="/blog-details">Dustin Langer</Link></li>
                                    <li><i className="flaticon-calendar"></i>Sep 14, 2023</li>
                                </ul>
                                <p>Reader will be distracted the readable all content page when looking...</p>
                                <div className="lower-box">
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                    <ul className="post-info">
                                        <li><i className="flaticon-heart"></i>48</li>
                                        <li><i className="flaticon-comment"></i>10</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <h6>Trading Markets</h6>
                                <h3><Link href="/blog-details">How to Make $1.5k+ Profits with $20k Funded a/c</Link></h3>
                                <ul className="post-info">
                                    <li><i className="flaticon-edit"></i><Link href="/blog-details">Raana Irave</Link></li>
                                    <li><i className="flaticon-calendar"></i>Sep 05, 2023</li>
                                </ul>
                                <p>Undertakes laborious physical exercise, to obtain some advantage...</p>
                                <div className="lower-box">
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                    <ul className="post-info">
                                        <li><i className="flaticon-heart"></i>25</li>
                                        <li><i className="flaticon-comment"></i>04</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <h6>Updates</h6>
                                <h3><Link href="/blog-details">How a Long Forex Position Paid off Incredibly Twice</Link></h3>
                                <ul className="post-info">
                                    <li><i className="flaticon-edit"></i><Link href="/blog-details">Brendan Duke</Link></li>
                                    <li><i className="flaticon-calendar"></i>Aug 28, 2023</li>
                                </ul>
                                <p>Again is there anyone who loves or pursue or desires to obtain pain of...</p>
                                <div className="lower-box">
                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                    <ul className="post-info">
                                        <li><i className="flaticon-heart"></i>74</li>
                                        <li><i className="flaticon-comment"></i>16</li>
                                    </ul>
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
