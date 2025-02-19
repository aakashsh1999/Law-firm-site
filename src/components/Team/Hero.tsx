import React from "react";

function Hero() {
  return (
    <div className="contact-wrapper">
      <div
        className="section-header bottom-padding-0 contact-hero"
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
                    <h1>Our Team</h1>
                  </div>
                  <div className="text-size-large text-style-muted">
                    Committed to justice, driven by results.
                  </div>
                </div>
                <a
                  href="#information"
                  className="new-btn new-btn_transparent new-btn_top w-button local"
                  style={{
                    borderRadius: "16px",
                    border: "3px solid #2461E2",
                  }}
                >
                  <div> Learn About Us</div>
                </a>
              </div>
              <img
                src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%20(1).webp"
                loading="lazy"
                alt=""
                sizes="(max-width: 1439px) 90vw, 1280px"
                srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%2520(1)-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%20(1).webp 1460w"
                className="header-image"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom-spacer"></div>
    </div>
  );
}

export default Hero;
