'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

export default function Services() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  const peopleGroups = [
    { 
      title: 'Midnight Fortune Tellers', 
      image: 'midnight-fortune-tellers.jpg',
      quote: 'We empower traditional fortune tellers with education and new livelihood opportunities.' 
    },
    { 
      title: 'Gypsies', 
      image: 'gypsies.jpg',
      quote: 'We help nomadic Gypsy families access housing, education, and healthcare support.' 
    },
    { 
      title: 'Bamboo Dancers', 
      image: 'bamboo-dancers.jpg',
      quote: 'We preserve their cultural art while creating platforms for income and dignity.' 
    },
    { 
      title: 'Boom Boom Cow Fortune Tellers', 
      image: 'boom-boom-cow.jpg',
      quote: 'We uplift this traditional community by providing financial aid and vocational training.' 
    },
    { 
      title: 'Rope Performers', 
      image: 'rope-performers.jpg',
      quote: 'We ensure rope performers receive safety, education, and recognition for their skills.' 
    },
    { 
      title: 'Natural Medicine Sellers', 
      image: 'natural-medicine.jpg',
      quote: 'We support herbal medicine sellers by promoting sustainable trade and market access.' 
    },
    { 
      title: 'Hill Tribes (Lambadis)', 
      image: 'lambadis.jpg',
      quote: 'We work with the Lambadi tribes to preserve heritage and improve living standards.' 
    },
    { 
      title: 'Street Actors', 
      image: 'street-actors.jpg',
      quote: 'We empower street artists with opportunities in arts education and livelihood training.' 
    },
    { 
      title: 'Historical Dancers', 
      image: 'historical-dancers.jpg',
      quote: 'We revive traditional dance forms while supporting performers’ education and welfare.' 
    },
    { 
      title: 'Vessel Cleaners with Lids', 
      image: 'vessel-cleaners.jpg',
      quote: 'We help vessel cleaners gain financial independence through vocational programs.' 
    },
    { 
      title: 'Parrot Fortune Tellers', 
      image: 'parrot-tellers.jpg',
      quote: 'We assist parrot fortune tellers in finding alternate sustainable sources of income.' 
    },
    { 
      title: 'Stone Carriers', 
      image: 'stone-carriers.jpg',
      quote: 'We support stone carriers with healthcare, nutrition, and access to fair wages.' 
    },
    { 
      title: 'Basket Makers', 
      image: 'basket-makers.jpg',
      quote: 'We strengthen basket makers’ crafts by connecting them to markets and cooperatives.' 
    },
    { 
      title: 'Doll Dancers', 
      image: 'doll-dancers.jpg',
      quote: 'We provide recognition and financial support to doll dancers preserving folk heritage.' 
    },
    { 
      title: 'Bird Catchers', 
      image: 'bird-catchers.jpg',
      quote: 'We help bird catchers transition to sustainable livelihoods that protect wildlife.' 
    },
    { 
      title: 'Mountain Dwellers (Palliars)', 
      image: 'palliars.jpg',
      quote: 'We bring healthcare, education, and clean water to isolated Palliar mountain tribes.' 
    },
    { 
      title: 'Circus Communities', 
      image: 'circus.jpg',
      quote: 'We rehabilitate circus artists through education, skill training, and safe housing.' 
    },
    { 
      title: 'Doll Makers', 
      image: 'doll-makers.jpg',
      quote: 'We promote local doll makers by supporting fair trade and creative entrepreneurship.' 
    },
    { 
      title: 'Stone Grinder Repairers', 
      image: 'grinder-repair.jpg',
      quote: 'We offer skill enhancement and business training to traditional grinder repairers.' 
    },
    { 
      title: 'Tribal Hunters', 
      image: 'hunters.jpg',
      quote: 'We guide tribal hunters toward sustainable occupations that preserve their environment.' 
    },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="display-5 fw-bold">Our Services</h1>
        <p className="text-muted">
          We serve India's most vulnerable communities by providing access to education, shelter, and dignity.
        </p>
      </div>

      {/* Service Cards */}
      <div className="row g-4">
        {peopleGroups.map((group, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card shadow-sm border-0 h-100 transition-hover animate__animated animate__fadeInUp">
              <img
                src={`/services/${group.image}`}
                className="card-img-top"
                alt={group.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{group.title}</h5>
                <p className="card-text text-muted" style={{ fontStyle: 'italic' }}>
                  "{group.quote}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
