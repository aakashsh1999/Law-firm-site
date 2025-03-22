import React from "react";
import "./index.css";
import { useTranslations } from "next-intl"; // Or your chosen i18n library

function Why() {
  const t = useTranslations("why"); // Use the "why" namespace

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="cases__title ">
        <h2 className="section-title section-title_818">{t("title")}</h2>
      </div>
      <div
        data-w-id="c00903e3-9cc2-c76e-aec5-e7476749a3af"
        className="why__content"
      >
        <div
          className="why__item"
          style={{
            backgroundColor: "#0B284C",
          }}
        >
          <div className="why__item-block">
            <img
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6449363d9d52ab1276ea04ef_Group%2038.svg"
              loading="lazy"
              alt={t("item1.title")} // Translate alt text as well
              className="why__item-icon"
            />
          </div>
          <h3 className="card-title">{t("item1.title")}</h3>
          <p className="why__info">{t("item1.info1")}</p>
          <p className="why__info why__info_hide">{t("item1.info2")}</p>
          <div className="why__expand">
            <p className="why__expand-text why__expand-text_expand">
              {t("item1.expand")}
            </p>
          </div>
        </div>
        <div className="why__item">
          <div className="why__item-block">
            <img
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6449363e9d52ab2c5aea04f0_Vector%20(3).svg"
              loading="lazy"
              alt={t("item2.title")} // Translate alt text
              className="why__item-icon why__item-icon_width"
            />
          </div>
          <h3 className="card-title">{t("item2.title")}</h3>
          <p className="why__info">
            {t("item2.info1", { victims: t("common.victims") })}
          </p>{" "}
          {/* Example of passing a variable */}
          <p className="why__info why__info_hide">{t("item2.info2")}</p>
          <div className="why__expand">
            <p className="why__expand-text why__expand-text_expand">
              {t("item2.expand")}
            </p>
          </div>
        </div>
        <div className="why__item">
          <div className="why__item-block">
            <img
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6449363ef8cb4f0e3b7a7955_Group%2039.svg"
              loading="lazy"
              alt={t("item3.title")} // Translate alt text
              className="why__item-icon why__item-icon_size"
            />
          </div>
          <h3 className="card-title">{t("item3.title")}</h3>
          <p className="why__info">{t("item3.info1")}</p>
          <p className="why__info why__info_hide">{t("item3.info2")}</p>
          <div className="why__expand">
            <p className="why__expand-text why__expand-text_expand">
              {t("item3.expand")}
            </p>
          </div>
        </div>
        <div className="why__content-back">
          <img
            src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6449396ecbe38f6e43bf24b7_Mask%20group%20(4)%20(1).webp"
            loading="lazy"
            sizes="(max-width: 1279px) 100vw, 648px"
            srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6449396ecbe38f6e43bf24b7_Mask%20group%20(4)%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6449396ecbe38f6e43bf24b7_Mask%20group%20(4)%20(1).webp 621w"
            alt={t("title")} // Or a more specific alt text
            className="picture-item w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Why;
