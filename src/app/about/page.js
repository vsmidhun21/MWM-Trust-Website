'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="display-5 fw-bold">About Us</h1>
        <p className="lead text-muted">Lighting lives, shaping futures — the mission of MWM Trust</p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 transition-hover">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-bullseye me-2 text-primary"></i>Our Mission</h5>
              <p className="card-text">
                We connect with tribal and nomadic children, offering them education and hostel facilities.
                Every child is born good—the environment shapes them. We aim to transform lives with light, care, and purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 transition-hover">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-eye me-2 text-success"></i>Our Vision & Motto</h5>
              <p className="card-text">
                "Expect great things from God and attempt great things for God."  
                 We envision a generation of young leaders rising from brokenness to purpose.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Belief Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100 text-center transition-hover p-3">
            <i className="bi bi-stars fs-2 text-warning mb-2"></i>
            <div>
              <blockquote className="blockquote">
                <p>“Glory, honour, and peace to every man that worketh good.”</p>
              </blockquote>
              <footer className="blockquote-footer">Romans 2:10</footer>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100 text-center transition-hover p-3">
            <i className="bi bi-book fs-2 text-info mb-2"></i>
            <div>
              <blockquote className="blockquote">
                <p>“The true light that gives light to every man was coming into the world.”</p>
              </blockquote>
              <footer className="blockquote-footer">John 1:9</footer>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100 text-center transition-hover p-3">
            <i className="bi bi-journal-text fs-2 text-danger mb-2"></i>
            <div>
              <blockquote className="blockquote">
                <p>“Lord, and in His word do I hope.”</p>
              </blockquote>
              <footer className="blockquote-footer">Psalms 130:5</footer>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Info */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm border-0 transition-hover">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-person-badge me-2 text-secondary"></i>Trust Information</h5>
              <ul className="list-unstyled mb-0">
                <li><strong>Registration No:</strong> 91/BK4/2016</li>
                <li><strong>Established:</strong> 18-Sep-2016</li>
                <li><strong>Registered Under:</strong> TN Societies Act 27 of 1975</li>
                <li><strong>12A Approval:</strong> AAETM7035P23CH01</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 transition-hover">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-geo-alt me-2 text-secondary"></i>Contact & Location</h5>
              <ul className="list-unstyled mb-0">
                <li><strong>Address:</strong> P. Kumaralingapuram, Valliyur P.O, Tamil Nadu - 626005</li>
                <li><strong>Email:</strong> mwmtrust2016@gmail.com</li>
                <li><strong>Phone:</strong> +91 63743 57008</li>
                <li><strong>WhatsApp/GPay:</strong> +91 95978 94420</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
