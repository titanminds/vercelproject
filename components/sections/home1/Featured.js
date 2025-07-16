import Link from "next/link"

export default function Featured() {
  return (
    <>
      <section className="featured-section"> 
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/feature-bg.jpg)" }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                        <div className="sec-title light">
                            <h6>We are Featured in</h6>
                            <h2>Featured on Prominent Platforms</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                    <div className="left-content">
                                        <div className="featured-slider">
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-1.png" alt=""/></figure>
                                                    <p>Frequently occur pleasures.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-2.png" alt=""/></figure>
                                                    <p>To take a trivial example.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-3.png" alt=""/></figure>
                                                    <p>Frequently occur pleasures.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-2.png" alt=""/></figure>
                                                    <p>To take a trivial example.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                    <div className="right-content">
                                        <div className="featured-slider">
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-4.png" alt=""/></figure>
                                                    <p>Ever undertakes laborious.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-5.png" alt=""/></figure>
                                                    <p>Chooses to enjoy a pleasure.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-6.png" alt=""/></figure>
                                                    <p>Ever undertakes laborious.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="assets/images/clients/clients-5.png" alt=""/></figure>
                                                    <p>Chooses to enjoy a pleasure.</p>
                                                    <Link href="/"><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                        </div>
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
