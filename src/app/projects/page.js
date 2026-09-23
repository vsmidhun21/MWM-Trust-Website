'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'animate.css';

export default function Projects() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  
  const activities = [
    {
      title: 'Free Clothing Distribution',
      img: '/projects/cloth_distri.jpg', 
      desc: 'Distributed free clothes to underprivileged families during Thai Pongal festival.',
    },
    {
      title: 'Pongal Celebration',
      img: '/projects/pongal_cele.jpg',
      desc: 'Celebrated Thai Pongal with cultural events and free food for villagers.',
    },
    {
      title: 'Sports & Games Events',
      img: '/projects/sports_equip.jpg',
      desc: 'Organized competitions like kabaddi, chess, and sack jump to engage youth.',
    },
    {
      title: 'Health Checkup',
      img: '/projects/medicine.jpg',
      desc: 'Arranged free medical consultation and blood pressure check-ups.',
    },
    {
      title: 'Medicine Distribution',
      img: '/projects/medicine distribution.jpg',
      desc: 'Provided free medicines for villagers after health consultation.',
    },
    {
      title: 'Cultural Celebrations',
      img: '/projects/cultural_events.jpg',
      desc: 'Held traditional dance, music, and song competitions to promote culture.',
    },
    {
      title: 'Adult Literacy Programs',
      img: '/projects/adult_legacy.jpg',
      desc: 'Taught adults to lead life, humanity and kindness, and vote responsibly.',
    },
    {
    title: 'Feed Food',   
    img: '/projects/feedfood.jpg',
    desc: 'Organized free meal distribution for underprivileged families.',
    },
    {
      title: 'Community Service & Thanks',
      img: '/projects/cultural_service.jpg',
      desc: 'Thanked auditors, pastors, and volunteers who support our vision.',
    },
  ];

 
  const galleryImages = [
    '/projects/adult_legacy.jpg',
    '/projects/cloth_distri.jpg',
    '/projects/cultural_events.jpg',
    '/projects/cultural_service.jpg',
    '/projects/education.jpg',
    '/projects/education-2.jpg',
    '/projects/feedfood.jpg',
    '/projects/IMG-20250929-WA0026.jpg',
    '/projects/IMG-20250929-WA0030.jpg',
    '/projects/IMG-20250929-WA0031.jpg',
    '/projects/IMG-20250929-WA0034.jpg',
    '/projects/IMG-20250929-WA0035.jpg',
    '/projects/IMG-20250929-WA0037.jpg',
    '/projects/IMG-20250929-WA0038.jpg',
    '/projects/IMG-20250929-WA00352.jpg',
    '/projects/IMG-20250929-WA00372.jpg',
    '/projects/medicine distribution.jpg',
    '/projects/medicine.jpg',
    '/projects/pongal_cele.jpg',
    '/projects/sports_equip.jpg',
    '/projects/Trust_img_1.png',
    '/projects/Trust_img_2.png',
    '/projects/Trust_img_3.png',
    '/projects/Trust_img_4.png',
    '/projects/Trust_img_5.png',
    '/projects/Trust_img_6.png',
    '/projects/Trust_img_7.png',
    '/projects/Trust_img_8.png'
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="display-5 fw-bold">Our Projects</h1>
        <p className="text-muted">
          From empowerment to compassion — here’s how MWM Trust is uplifting lives.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="row g-4">
        {activities.map((act, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card shadow-sm border-0 h-100 transition-hover animate__animated animate__fadeInUp">
              <img
                src={act.img}
                alt={act.title}
                className="card-img-top"
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{act.title}</h5>
                <p className="card-text">{act.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="mt-5">
        <div className="text-center mb-4 animate__animated animate__fadeInDown">
          <h2 className="fw-bold">Gallery</h2>
          <p className="text-muted">Memories captured during our community service and celebrations.</p>
        </div>

        <div className="row g-4">
          {galleryImages.map((img, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <div 
                className="card border-0 shadow-sm overflow-hidden animate__animated animate__zoomIn h-100"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
                }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="card-img-top h-100 w-100"
                  style={{ objectFit: 'cover', minHeight: '250px', maxHeight: '250px' }}
                />
              </div>
            </div>
          ))}
        </div>
          
      </div>

    </div>
   
  );
}
