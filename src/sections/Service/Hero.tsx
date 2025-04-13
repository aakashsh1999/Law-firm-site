import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="section-home-hero">
      <div className="section-container w-container">
        <div className="hero">
          <div className="hero__table md:w-2/3">
            <div className="hero__info ">
              <h1 className="hero__title">
                India Personal Injury & Civil Rights Lawyers Who Help When the
                Unimaginable Happens
              </h1>
              <p className="hero__intro hero__intro_dark">
                The BP Law Law Firm team fights for the rights of victims of
                civil rights violations, medical malpractice, or those injured
                in a catastrophic accident. Our India personal injury attorneys
                are on your side to seek justice and help you get the
                compensation you deserve.
              </p>
              <div className="section-button">
                <a
                  href="/contact"
                  className="new-btn new-btn_blue button-font w-button local"
                >
                  Get a Free Case Review
                </a>
              </div>
              <div className="hero__links hero__links_desktop">
                <a
                  rel="nofollow noopener noreferrer"
                  className="hero__link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1bae3ce3a5b12d6db1_martindale-logo.webp"
                    loading="lazy"
                    alt="Martindale"
                    className="hero__link-icon"
                  />
                  <div className="hero__stars">
                    <img
                      src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b72a5dfb9d42130fc_Frame%202.svg"
                      loading="lazy"
                      alt="Stars"
                      className="hero__stars-icon"
                    />
                    <p className="hero__stars-text">5.0</p>
                  </div>
                  <p className="hero__stars-text">11 reviews</p>
                </a>
                <a
                  rel="nofollow noopener noreferrer"
                  className="hero__link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b45e771cc06aca39a_Group%201%20(4).svg"
                    loading="lazy"
                    alt="Google"
                    className="hero__link-google"
                  />
                  <div className="hero__stars">
                    <img
                      src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cbb1d1b57df734457a9b_Frame%202%20(1).svg"
                      loading="lazy"
                      alt="Stars"
                      className="hero__stars-icon"
                    />
                    <p className="hero__stars-text">4.8</p>
                  </div>
                  <p className="hero__stars-text">34 reviews</p>
                </a>
              </div>
            </div>
          </div>
          <div className="hero__pictures md:absolute top-40 right-0 ">
            <div className="hero__pictures-top">
              <img
                src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/648050192e801cea6a02f6d3_1partners%2C%20edited.webp"
                loading="eager"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 61vw, (max-width: 1279px) 400px, 526px"
                srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/648050192e801cea6a02f6d3_1partners%2C%20edited-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/648050192e801cea6a02f6d3_1partners%2C%20edited.webp 800w"
                alt="The BP Law Law Firm team"
                className="picture-item"
              />
            </div>
            <div className="hero__pictures-block">
              <div className="hero__pictures-item">
                <img
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008bb5c190030_Rectangle%208.webp"
                  loading="eager"
                  alt="The BP Law Law Firm team"
                  className="picture-item"
                />
              </div>
              <div className="hero__pictures-item">
                <img
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64805065f32d469e9cceb16b_Attorney%20chatter.webp"
                  loading="eager"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 35vw, (max-width: 1279px) 188px, 251px"
                  srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64805065f32d469e9cceb16b_Attorney%20chatter-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64805065f32d469e9cceb16b_Attorney%20chatter.webp 800w"
                  alt="The BP Law Law Firm team"
                  className="picture-item"
                />
              </div>
            </div>
            <div className="hero__links">
              <a
                rel="nofollow noopener noreferrer"
                className="hero__link w-inline-block"
              >
                <img
                  src="https://assets.vakilsearch.com/live-images/home-page-assets/trustpilot.svg"
                  loading="lazy"
                  alt="Martindale"
                  className="hero__link-icon"
                />
                <div className="hero__stars">
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b72a5dfb9d42130fc_Frame%202.svg"
                    loading="lazy"
                    alt="Stars"
                    className="hero__stars-icon"
                  />
                  <p className="hero__stars-text">5.0</p>
                </div>
                <p className="hero__stars-text">11 reviews</p>
              </a>
              <a
                rel="nofollow noopener noreferrer"
                className="hero__link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b45e771cc06aca39a_Group%201%20(4).svg"
                  loading="lazy"
                  alt="Google"
                  className="hero__link-google"
                />
                <div className="hero__stars">
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cbb1d1b57df734457a9b_Frame%202%20(1).svg"
                    loading="lazy"
                    alt="Stars"
                    className="hero__stars-icon"
                  />
                  <p className="hero__stars-text">4.8</p>
                </div>
                <p className="hero__stars-text">29 reviews</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
