"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "./index.css";
import { useTranslations } from "next-intl";

interface Testimonial {
  id: number;
  contentKey: string;
  authorKey: string;
  roleKey: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    contentKey: "testimonial1.content",
    authorKey: "testimonial1.author",
    roleKey: "testimonial1.role",
    rating: 5,
  },
  {
    id: 2,
    contentKey: "testimonial2.content",
    authorKey: "testimonial2.author",
    roleKey: "testimonial2.role",
    rating: 5,
  },
  {
    id: 3,
    contentKey: "testimonial3.content",
    authorKey: "testimonial3.author",
    roleKey: "testimonial3.role",
    rating: 5,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false);
  const t = useTranslations("reviewsSection");

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        <div className="content-section">
          <div className="cases__title">
            <h2 className="section-title section-title_509">{t("title")}</h2>
          </div>

          <div className="carousel-container">
            <div
              className={`carousel-content ${
                isAnimating
                  ? direction > 0
                    ? "slide-right"
                    : "slide-left"
                  : ""
              }`}
            >
              <div className="testimonial-content">
                <div className="testimonial-text-container custom-scrollbar">
                  <p className="testimonial-text">
                    {t(testimonials[currentIndex].contentKey)}
                  </p>
                </div>
                <div className="reviews-starslist">
                  <div className="stars-container animate-bounce-in">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="star-icon"
                          style={{
                            animationDelay: `${i * 100}ms`,
                            animation: "starPop 0.5s ease-out forwards",
                          }}
                        />
                      )
                    )}
                  </div>

                  <div className="author-info">
                    <p className="author-name">
                      {t(testimonials[currentIndex].authorKey)}
                    </p>
                    <p className="author-role">
                      {t(testimonials[currentIndex].roleKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-buttons">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="nav-button"
                aria-label={t("previous")}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="nav-button"
                aria-label={t("next")}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt={t("title")}
            className="testimonial-image"
          />
        </div>
      </div>
    </div>
  );
}
