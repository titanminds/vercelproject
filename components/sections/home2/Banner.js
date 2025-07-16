import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section
        className="banner-style-two bg-color-3"
        style={{
          backgroundImage: "url(assets/images/shape/shape-7.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center vertically
          alignItems: "center",
          textAlign: "center",
          color: "#ffffff",
          padding: "0 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ transform: "translateY(40px)" }}>
          <h6 style={{ fontSize: "1rem", marginBottom: "10px", color: "#e0e0e0" }}>
            Welcome to ZYNTRAFX
          </h6>

          <p style={{ fontSize: "1rem", marginBottom: "10px", color: "#e0e0e0" }}>
            Trusted by over <strong>15 Million Traders</strong>
          </p>

          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              margin: 0,
              lineHeight: "1.2",
              color: "#ffffff",
            }}
          >
            The Most Awarded Broker <br />
            <span style={{ color: "#dddddd" }}>for a Reason</span>
          </h1>

          <p
  style={{
    fontSize: "1.2rem",
    color: "#cccccc",
    marginTop: "20px",
    maxWidth: "600px",
    marginLeft: "100px", // Shift slightly to the right
  }}
>
  We offer a superior trading environment that puts traders in the best
  position to profit.
</p>


          <button
            style={{
              marginTop: "30px",
              backgroundColor: "#d12d2d",
              color: "#fff",
              padding: "12px 30px",
              fontSize: "1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Get a 100% Bonus up to $100
          </button>

          {/* Commented out download section */}
          {/*
          <ul
            className="download-list"
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <li>
              <Link href="/index-2">
                <i className="flaticon-apple" style={{ fontSize: "2rem", color: "#fff" }}></i>
              </Link>
            </li>
            <li>
              <Link href="/index-2">
                <img src="assets/images/icons/icon-18.png" alt="" style={{ height: "30px" }} />
              </Link>
            </li>
          </ul>
          */}

          
        </div>
      </section>
    </>
  );
}
