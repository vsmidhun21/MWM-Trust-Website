'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'animate.css';
import './globals.css'; // make sure this imports your CSS

export default function HomePage() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  const slides = [
    {
      image: '/projects/Trust_img_1.png',
      title: 'Together We Serve',
      quote: 'Serving communities with compassion, education, and empowerment.',
    },
    {
      image: '/projects/Trust_img_2.png',
      title: 'Hope in Every Hand',
      quote: 'Building brighter futures by uplifting every life we touch.',
    },
    {
      image: '/projects/Trust_img_3.png',
      title: 'United for Change',
      quote: 'Together, we make a difference — one heart at a time.',
    },
  ];

  return (
    <div
      id="homeCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : 'false'}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              className="d-block w-100"
              alt={slide.title}
              style={{
                maxHeight: '600px',
                objectFit: 'cover',
                filter: 'brightness(0.75)',
              }}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100 px-3">
              <h1 className="display-5 fw-bold mb-3 animate__animated animate__fadeInDown">
                {slide.title}
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeInUp">
                {slide.quote}
              </p>
              <a
                href="/about"
                className="btn btn-primary btn-lg mt-2 animate__animated animate__fadeInUp"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
