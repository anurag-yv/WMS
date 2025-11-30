import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Waste Management Solutions</h1>
          <p>Join thousands of eco-conscious individuals and communities in transforming waste management through technology, education, and sustainable practices.</p>
          {user ? (
            <Link to="/dashboard" className="btn btn-primary">
              Go to Dashboard
            </Link>
          ) : (
            <Link to="/register" className="btn btn-primary">
              Start Your Eco Journey
            </Link>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>Waste Tracking</h3>
            <p>Monitor your waste production patterns and get insights to reduce your environmental footprint.</p>
          </div>
          
          <div className="card">
            <div className="card-icon">♻️</div>
            <h3>Smart Recycling</h3>
            <p>Learn proper recycling techniques and find the best ways to dispose of different materials.</p>
          </div>
          
          <div className="card">
            <div className="card-icon">📅</div>
            <h3>Collection Schedule</h3>
            <p>Never miss collection days with smart notifications and optimized pickup schedules.</p>
          </div>
          
          <div className="card">
            <div className="card-icon">🌍</div>
            <h3>Community Impact</h3>
            <p>Join a growing community committed to sustainable waste management practices.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3>120T</h3>
            <p>Waste Recycled</p>
          </div>
          <div className="stat-item">
            <h3>45%</h3>
            <p>Reduction in Landfill</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Communities</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-4">
        <div className="container">
          <div className="text-center">
            <h2 className="page-title">Ready to Make a Difference?</h2>
            <p className="mb-3">
              Start your journey towards sustainable waste management today. Together, we can create a cleaner, greener planet.
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {user ? (
                <>
                  <Link to="/tracker" className="btn btn-primary">
                    Track Your Waste
                  </Link>
                  <Link to="/education" className="btn" style={{ background: 'var(--secondary-color)', color: 'white' }}>
                    Learn More
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/register" className="btn btn-primary">
                    Get Started Free
                  </Link>
                  <Link to="/login" className="btn" style={{ background: 'var(--secondary-color)', color: 'white' }}>
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;