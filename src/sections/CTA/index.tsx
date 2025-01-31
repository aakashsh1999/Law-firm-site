import React from "react";

export default function CTASection() {
  return (
    <div>
      <section className="cta">
        <div className="section-container w-container">
          <div className="cta__table">
            <div
              id="w-node-c00903e3-9cc2-c76e-aec5-e7476749a366-4497f2ef"
              className="cta__photo absolute z-50 top-10 "
            >
              <div
                data-w-id="c00903e3-9cc2-c76e-aec5-e7476749a367"
                className="cta__photo-item "
              >
                <img
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/644914b7649dfb49c40b8070_image%2012%20(1).webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 48vw, (max-width: 1439px) 47vw, 640px"
                  srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/644914b7649dfb49c40b8070_image%2012%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/644914b7649dfb49c40b8070_image%2012%20(1).webp 636w"
                  alt="Schedule a Free Consultation"
                  className="picture-item rounded-xl"
                />
              </div>
            </div>
            <div className="cta__info">
              <h2 className="section-title section-title_white">
                Our Promise to You: No Fee Unless We Win!
              </h2>
              <p className="cta__text">
                We offer an initial consultation with an experienced personal
                injury attorney at no cost to you. Our firm works on a
                contingency basis, which means we only assess legal fees if we
                successfully secure a compensation award for you. Contact our
                New York lawyers today!
              </p>
              <div className="section-button">
                <a
                  href="/contact"
                  className="new-btn new-btn_blue w-button local"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <div className="style w-embed"><style>
  @media screen and (min-width: 768px) {
  .cta__photo-item {
  height: calc(100% + 58px);
  }
  }
  </style></div> */
}
