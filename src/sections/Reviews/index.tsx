"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "./index.css";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "I cannot rate the firm any higher! we are extremely happy with the service we received from Brad, Chris and the team. We are northern Irish citizens and as such had no experience of the US justice system, Chris and Brad helped us navigate this and made sure we understood every step of the process and we were kept informed of what would",
    author: "LEANNE MONTGOMERY",
    role: "Citizen",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Exceptional service from start to finish. The teams expertise and professionalism made a complex process feel straightforward and manageable. Their attention to detail and constant communication gave us complete peace of mind.",
    author: "MICHAEL ANDERSON",
    role: "Business Owner",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Working with this team has been transformative for our business. Their strategic approach and dedication to client success sets them apart. Theyre not just service providers, they're trusted partners in our growth journey.",
    author: "SARAH JENKINS",
    role: "CEO",
    rating: 5,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false);

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
            <h2 className="section-title section-title_509">
              {`Our Client's Reviews`}
            </h2>
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
                    {testimonials[currentIndex].content}
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
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="author-role">
                      {testimonials[currentIndex].role}
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
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="nav-button"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Modern office workspace"
            className="testimonial-image"
          />
        </div>
      </div>
    </div>
  );
}
