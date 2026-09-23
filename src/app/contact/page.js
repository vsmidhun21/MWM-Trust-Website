'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

export default function Contact() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="display-5 fw-bold">Contact Us</h1>
        <p className="text-muted">We'd love to hear from you! Reach out to us anytime.</p>
      </div>

      {/* Contact Info Cards */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100 transition-hover">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-geo-alt-fill text-primary me-2"></i>Address</h5>
              <p className="card-text">
                P. Kumaralingapuram, Valliyur P.O,<br />
                Amathur (via), Virudhunagar District,<br />
                Tamil Nadu – 626005, India
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100 transition-hover">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-telephone-fill text-success me-2"></i>Contact Info</h5>
              <p className="mb-1"><strong>Phone:</strong> +91 63743 57008</p>
              <p className="mb-1"><strong>WhatsApp/GPay:</strong> +91 95978 94420</p>
              <p className="mb-0"><strong>Email:</strong> mwmtrust2016@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Map */}
      <div className="mt-5">
        <h4 className="mb-3"><i className="bi bi-map text-danger me-2"></i>Our Location</h4>
        <div className="ratio ratio-16x9 rounded shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2467352976183!2d77.61121587569728!3d8.398506596162515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0453a01c5d14b9%3A0xd8cc9f1e3f0f5c2e!2sValliyur%2C%20Tamil%20Nadu%20628005!5e0!3m2!1sen!2sin!4v1693847390577!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
