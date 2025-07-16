

export default function Profit() {
    return (
      <>
          <section className="profit-calculator home-5">
              <div className="auto-container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12 col-sm-12 profit-column">
                          <div className="profit-inner">
                              <div className="bg-layer"></div>
                              <span className="big-text">calculator</span>
                              <div className="inner-box">
                                  <h5>Select Account Size</h5>
                                  <button className="w-125"><span id="accountSizeLabel">$1,000</span></button><br/>
                                    <div className="single-item">
                                        <input type="range" id="accountSizeRange" min="1000" max="100000" step="10"/>
                                        <div className="currency-list">
                                            <span>$1,000</span>
                                          <span>$100,000</span>
                                        </div>
                                    </div>
                                    
  
                                    <h5>Profit Rate</h5>
                                    <button className="w-125"><span id="profitRateLabel">0.5%</span></button><br/>
                                    <div className="single-item">
                                        <input type="range" id="profitRateRange" min="0.005" max="0.1" step="0.0001"/>
                                        <div className="currency-list">
                                            <span>0.5%</span>
                                          <span>10%</span>
                                        </div>
                                    </div>
                                    
  
                                    <br/>
  
                                    <div className="btn-box">
                                        <h3>$20<span>/Month</span></h3>
                                        <button className="theme-btn btn-two"><span>START TRADING</span></button>
                                    </div>
  
                                    <h4 id="result"></h4>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="content-box">
                              <div className="sec-title">
                                  <h6>Profit Calculator</h6>
                                  <h2>Estimate the earnings for a full time trader</h2>
                              </div>
                              <div className="text-box">
                                  <p>Trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                                  <ul className="list-style-two clearfix">
                                      <li>Accurate Profit Calculation</li>
                                      <li>Risk Management</li>
                                      <li>Improved Decision Making</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  