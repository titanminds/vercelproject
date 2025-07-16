
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="f" className="letters-loading">
                                f
                            </span>
                            <span data-text-preloader="x" className="letters-loading">
                                x
                            </span>
                            <span data-text-preloader="v" className="letters-loading">
                                v
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="b" className="letters-loading">
                                b
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
