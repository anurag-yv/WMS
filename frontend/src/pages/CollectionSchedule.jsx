import React, { useState } from 'react';

const CollectionSchedule = () => {
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      type: 'Recycling',
      date: '2024-01-15',
      status: 'scheduled',
      items: ['Plastic', 'Paper', 'Glass', 'Metal']
    },
    {
      id: 2,
      type: 'Organic Waste',
      date: '2024-01-16',
      status: 'scheduled',
      items: ['Food Scraps', 'Yard Waste']
    },
    {
      id: 3,
      type: 'General Waste',
      date: '2024-01-17',
      status: 'scheduled',
      items: ['Non-recyclables']
    },
    {
      id: 4,
      type: 'E-waste',
      date: '2024-01-20',
      status: 'scheduled',
      items: ['Electronics', 'Batteries']
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#2ecc71';
      case 'scheduled': return '#3498db';
      case 'cancelled': return '#e74c3c';
      case 'pending': return '#f39c12';
      default: return '#95a5a6';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Recycling': return '♻️';
      case 'Organic Waste': return '🌱';
      case 'General Waste': return '🗑️';
      case 'E-waste': return '📱';
      default: return '📅';
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Collection Schedule</h1>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3>This Week</h3>
            <p style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>3</p>
            <p style={{ color: 'var(--text-light)' }}>Collections</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3>Next Pickup</h3>
            <p style={{ fontSize: '2rem', color: 'var(--secondary-color)', fontWeight: 'bold' }}>2</p>
            <p style={{ color: 'var(--text-light)' }}>Days</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3>Recycling Rate</h3>
            <p style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>72%</p>
            <p style={{ color: 'var(--text-light)' }}>This Month</p>
          </div>
        </div>

        {/* Schedule List */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Upcoming Collections</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {schedule.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '1rem',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${getStatusColor(item.status)}`
                }}
              >
                <div style={{ fontSize: '2rem' }}>
                  {getTypeIcon(item.type)}
                </div>
                
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.type}</h4>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {item.items.map((itemType, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '0.25rem 0.5rem',
                          background: 'white',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          color: 'var(--text-light)',
                          border: '1px solid #e1e8ed'
                        }}
                      >
                        {itemType}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ textAlign: 'right' }}>
                  <span
                    style={{
                      padding: '0.5rem 1rem',
                      background: getStatusColor(item.status),
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                  <button
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: 'transparent',
                      border: '1px solid var(--primary-color)',
                      color: 'var(--primary-color)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    Remind Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Guidelines */}
        <div className="card">
          <h3>Collection Guidelines</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ padding: '1rem', background: '#e8f5e8', borderRadius: '8px' }}>
              <h4 style={{ color: '#2ecc71' }}>✅ Do</h4>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-light)' }}>
                <li>Rinse containers before recycling</li>
                <li>Flatten cardboard boxes</li>
                <li>Separate waste types</li>
                <li>Use approved bins</li>
              </ul>
            </div>
            
            <div style={{ padding: '1rem', background: '#ffe8e8', borderRadius: '8px' }}>
              <h4 style={{ color: '#e74c3c' }}>❌ Don't</h4>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-light)' }}>
                <li>Mix recyclables with general waste</li>
                <li>Include plastic bags</li>
                <li>Put hazardous waste in bins</li>
                <li>Overfill containers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSchedule;