import React from 'react';

const EducationalResources = () => {
  const resources = [
    {
      id: 1,
      title: "The Complete Guide to Recycling",
      type: "PDF Guide",
      description: "Comprehensive guide covering all aspects of recycling and waste management.",
      duration: "15 min read",
      level: "Beginner",
      icon: "📚"
    },
    {
      id: 2,
      title: "Plastic Pollution Solutions",
      type: "Video Series",
      description: "Learn about innovative solutions to combat plastic pollution worldwide.",
      duration: "45 min",
      level: "Intermediate",
      icon: "🎥"
    },
    {
      id: 3,
      title: "Composting at Home",
      type: "Interactive Tutorial",
      description: "Step-by-step guide to starting your own compost system at home.",
      duration: "20 min",
      level: "Beginner",
      icon: "🌱"
    },
    {
      id: 4,
      title: "Circular Economy Principles",
      type: "E-book",
      description: "Understanding how circular economy can transform waste management.",
      duration: "30 min read",
      level: "Advanced",
      icon: "🔄"
    },
    {
      id: 5,
      title: "Zero Waste Lifestyle",
      type: "Video Course",
      description: "Practical tips and strategies for adopting a zero-waste lifestyle.",
      duration: "2 hours",
      level: "Intermediate",
      icon: "⚡"
    },
    {
      id: 6,
      title: "Sustainable Packaging",
      type: "Case Studies",
      description: "Real-world examples of sustainable packaging solutions.",
      duration: "25 min read",
      level: "Intermediate",
      icon: "📦"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "How Recycling Saves Energy",
      excerpt: "Discover the significant energy savings achieved through proper recycling practices.",
      readTime: "5 min",
      category: "Energy"
    },
    {
      id: 2,
      title: "The Future of Smart Bins",
      excerpt: "How IoT technology is revolutionizing waste collection and management.",
      readTime: "7 min",
      category: "Technology"
    },
    {
      id: 3,
      title: "Community Recycling Success Stories",
      excerpt: "Inspiring stories from communities that transformed their waste management.",
      readTime: "6 min",
      category: "Community"
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Educational Resources</h1>
      
      {/* Featured Resources */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Featured Learning Materials</h2>
        <div className="card-grid">
          {resources.map(resource => (
            <div key={resource.id} className="card" style={{ textAlign: 'left' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{resource.icon}</span>
                <div>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: '#e1f5fe',
                    color: '#0288d1',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {resource.type}
                  </span>
                  <span style={{
                    marginLeft: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    background: '#f3e5f5',
                    color: '#7b1fa2',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {resource.level}
                  </span>
                </div>
              </div>
              
              <h3 style={{ marginBottom: '0.5rem' }}>{resource.title}</h3>
              <p style={{ 
                color: 'var(--text-light)', 
                marginBottom: '1rem',
                lineHeight: '1.5'
              }}>
                {resource.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto'
              }}>
                <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  ⏱️ {resource.duration}
                </span>
                <button style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Latest Articles</h2>
        <div className="card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {articles.map(article => (
              <div
                key={article.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e9ecef';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{article.title}</h4>
                  <p style={{ 
                    margin: 0, 
                    color: 'var(--text-light)',
                    lineHeight: '1.5'
                  }}>
                    {article.excerpt}
                  </p>
                  <span style={{
                    marginTop: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    background: 'white',
                    color: 'var(--primary-color)',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    display: 'inline-block'
                  }}>
                    {article.category}
                  </span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-light)'
                }}>
                  <span style={{ fontSize: '0.9rem' }}>{article.readTime}</span>
                  <button style={{
                    marginTop: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'transparent',
                    border: '1px solid var(--primary-color)',
                    color: 'var(--primary-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}>
                    Read
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <h2 style={{ marginBottom: '1.5rem' }}>Environmental Impact Facts</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💧</div>
            <h3>700 Gallons</h3>
            <p>Water saved by recycling 1 ton of paper</p>
          </div>
          
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
            <h3>95% Less Energy</h3>
            <p>Required to make aluminum from recycled materials</p>
          </div>
          
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌳</div>
            <h3>17 Trees</h3>
            <p>Saved by recycling 1 ton of paper</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalResources;