

export default function Subscribe() {
  return (
    <>
        <section className="subscribe-section bg-color-9">
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/subscribe-bg.jpg)" }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <div className="sec-title light">
                        <h6>Newsletter</h6>
                        <h2>Subscribe us</h2>
                        <p>Subscribe us to recieve insights, trading tips, offers in your inbox.</p>
                    </div>
                    <div className="form-inner">
                        <form method="post" action="contact.html">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your email address..." required/>
                                <div className="check-box">
                                    <input className="check" type="checkbox" id="checkbox1"/>
                                    <label for="checkbox1">Agree to our private policies &amp; Conditions.</label>
                                </div>
                                <button type="submit" className="theme-btn btn-one"><span>Subscribe</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
