import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="section-header bottom-padding-0 about-hero"
        style={{
          background: "white",
        }}
      >
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical">
              <div className="header_top-wrapper">
                <div>
                  <div className="margin-bottom margin-xxsmall">
                    <h1>Why Choose Us</h1>
                  </div>
                  <div className="text-size-large text-style-muted">
                    Advocates Dedicated To Achieving Our Clients Justice
                  </div>
                </div>
                <a
                  href="#approach"
                  // className="page-button tablet-mt-24 w-inline-block local"
                  className="new-btn new-btn_transparent new-btn_top w-button local"
                  style={{
                    borderRadius: "16px",
                    border: "3px solid #2461E2",
                  }}
                >
                  <div>Learn About Us</div>
                </a>
              </div>
              <img
                src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008b35c19003a_Why-Choose-Us.webp"
                loading="lazy"
                alt="Jacob D. Fuchsberg lawyers and paralegals at New York City office"
                sizes="(max-width: 1439px) 90vw, 1280px"
                srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008b35c19003a_Why-Choose-Us-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008b35c19003a_Why-Choose-Us.webp 1460w"
                className="header-image"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
