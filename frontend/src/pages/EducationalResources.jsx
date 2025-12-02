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
      icon: "📚",
      image: "https://via.placeholder.com/300x200/4A90E2/white?text=Recycling+Guide",
      topics: ["Basics", "Sorting", "Benefits"]
    },
    {
      id: 2,
      title: "Plastic Pollution Solutions",
      type: "Video Series",
      description: "Learn about innovative solutions to combat plastic pollution worldwide.",
      duration: "45 min",
      level: "Intermediate",
      icon: "🎥",
      image: "https://via.placeholder.com/300x200/50C878/white?text=Plastic+Solutions",
      topics: ["Oceans", "Innovations", "Policy"]
    },
    {
      id: 3,
      title: "Composting at Home",
      type: "Interactive Tutorial",
      description: "Step-by-step guide to starting your own compost system at home.",
      duration: "20 min",
      level: "Beginner",
      icon: "🌱",
      image: "https://via.placeholder.com/300x200/7ED321/white?text=Composting",
      topics: ["Setup", "Maintenance", "Troubleshooting"]
    },
    {
      id: 4,
      title: "Circular Economy Principles",
      type: "E-book",
      description: "Understanding how circular economy can transform waste management.",
      duration: "30 min read",
      level: "Advanced",
      icon: "🔄",
      image: "https://via.placeholder.com/300x200/BD10E0/white?text=Circular+Economy",
      topics: ["Principles", "Case Studies", "Implementation"]
    },
    {
      id: 5,
      title: "Zero Waste Lifestyle",
      type: "Video Course",
      description: "Practical tips and strategies for adopting a zero-waste lifestyle.",
      duration: "2 hours",
      level: "Intermediate",
      icon: "⚡",
      image: "https://via.placeholder.com/300x200/F5A623/white?text=Zero+Waste",
      topics: ["Daily Habits", "Shopping", "Kitchen"]
    },
    {
      id: 6,
      title: "Sustainable Packaging",
      type: "Case Studies",
      description: "Real-world examples of sustainable packaging solutions.",
      duration: "25 min read",
      level: "Intermediate",
      icon: "📦",
      image: "https://via.placeholder.com/300x200/50E3C2/white?text=Sustainable+Packaging",
      topics: ["Brands", "Materials", "Trends"]
    },
    {
      id: 7,
      title: "Waste Reduction Strategies",
      type: "Infographic Series",
      description: "Visual guides to simple ways to reduce household waste.",
      duration: "10 min",
      level: "Beginner",
      icon: "📊",
      image: "https://via.placeholder.com/300x200/FF6B6B/white?text=Waste+Reduction",
      topics: ["Household", "Visuals", "Quick Wins"]
    },
    {
      id: 8,
      title: "E-Waste Management Basics",
      type: "Podcast Episode",
      description: "Audio discussion on handling electronic waste responsibly.",
      duration: "25 min listen",
      level: "Beginner",
      icon: "🎧",
      image: "https://via.placeholder.com/300x200/4ECDC4/white?text=E-Waste",
      topics: ["Electronics", "Disposal", "Recycling"]
    },
    {
      id: 9,
      title: "Organic Waste Mastery",
      type: "Webinar Recording",
      description: "Expert tips on managing organic waste for better soil health.",
      duration: "40 min",
      level: "Intermediate",
      icon: "🌿",
      image: "https://via.placeholder.com/300x200/45B7D1/white?text=Organic+Waste",
      topics: ["Soil Health", "Composting", "Expert Advice"]
    },
    {
      id: 10,
      title: "Green Business Practices",
      type: "Online Course",
      description: "How businesses can implement sustainable waste practices.",
      duration: "1.5 hours",
      level: "Advanced",
      icon: "🏢",
      image: "https://via.placeholder.com/300x200/96CEB4/white?text=Green+Business",
      topics: ["Corporate", "Strategies", "Sustainability"]
    },
    {
      id: 11,
      title: "Kids' Recycling Fun",
      type: "Animated Videos",
      description: "Fun, colorful videos teaching kids about recycling through stories.",
      duration: "15 min",
      level: "All Ages",
      icon: "👨‍👩‍👧‍👦",
      image: "https://via.placeholder.com/300x200/FECA57/white?text=Kids+Recycling",
      topics: ["Kids", "Stories", "Education"]
    },
    {
      id: 12,
      title: "Hazardous Waste Guide",
      type: "Safety Manual",
      description: "Safe handling and disposal of hazardous household materials.",
      duration: "12 min read",
      level: "Beginner",
      icon: "⚠️",
      image: "https://via.placeholder.com/300x200/FF9FF3/white?text=Hazardous+Waste",
      topics: ["Safety", "Disposal", "Household"]
    }
  ];

  const articles = [
    {
      id: 1,
      title: "How Recycling Saves Energy",
      excerpt: "Discover the significant energy savings achieved through proper recycling practices.",
      readTime: "5 min",
      category: "Energy",
      image: "https://via.placeholder.com/400x250/4A90E2/white?text=Energy+Savings"
    },
    {
      id: 2,
      title: "The Future of Smart Bins",
      excerpt: "How IoT technology is revolutionizing waste collection and management.",
      readTime: "7 min",
      category: "Technology",
      image: "https://via.placeholder.com/400x250/50C878/white?text=Smart+Bins"
    },
    {
      id: 3,
      title: "Community Recycling Success Stories",
      excerpt: "Inspiring stories from communities that transformed their waste management.",
      readTime: "6 min",
      category: "Community",
      image: "https://via.placeholder.com/400x250/7ED321/white?text=Community+Stories"
    },
    {
      id: 4,
      title: "Benefits of Upcycling",
      excerpt: "Explore creative ways to give new life to old materials and reduce landfill waste.",
      readTime: "4 min",
      category: "Creativity",
      image: "https://via.placeholder.com/400x250/BD10E0/white?text=Upcycling"
    },
    {
      id: 5,
      title: "Global Waste Trends",
      excerpt: "Key insights into worldwide waste generation and management challenges.",
      readTime: "8 min",
      category: "Global",
      image: "https://via.placeholder.com/400x250/F5A623/white?text=Global+Trends"
    },
    {
      id: 6,
      title: "Myth Busting: Recycling Facts",
      excerpt: "Common myths about recycling debunked with science-backed evidence.",
      readTime: "5 min",
      category: "Myths",
      image: "https://via.placeholder.com/400x250/50E3C2/white?text=Myths+Busted"
    }
  ];

  const simpleSteps = [
    {
      step: 1,
      icon: "🗑️",
      title: "Sort Waste",
      description: "Separate paper, plastic, glass. Easy bins help."
    },
    {
      step: 2,
      icon: "♻️",
      title: "Clean Items",
      description: "Rinse bottles. No dirt in recycle bin."
    },
    {
      step: 3,
      icon: "🚚",
      title: "Drop Off",
      description: "Take to recycle center. Check local spots."
    },
    {
      step: 4,
      icon: "🌍",
      title: "Repeat Daily",
      description: "Small habit, big change for Earth."
    }
  ];

  const visualGlossary = [
    {
      term: "Compost",
      icon: "🪴",
      simple: "Food scraps to soil. No trash."
    },
    {
      term: "Upcycle",
      icon: "🔧",
      simple: "Old bottle to vase. Reuse smart."
    },
    {
      term: "Biodegradable",
      icon: "🍃",
      simple: "Breaks down natural. Good for Earth."
    },
    {
      term: "Landfill",
      icon: "🏔️",
      simple: "Trash mountain. Avoid it."
    }
  ];

  const handleResourceClick = (resource) => {
    console.log(`Opening ${resource.title}`);
  };

  const handleArticleClick = (article) => {
    console.log(`Reading ${article.title}`);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '1rem',
      fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
      lineHeight: 1.5,
      color: '#333'
    }}>
      <style jsx global>{`
        :root {
          --primary-color: #10b981;
          --secondary-color: #3b82f6;
          --text-light: #6b7280;
          --border-color: #e5e7eb;
          --shadow-light: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
          --shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .resource-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 1rem; 
        }
        .article-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
          gap: 1rem; 
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        .glossary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .card-hover {
          transition: all 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
        }
        .btn-primary {
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.375rem 0.75rem;
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-light);
          align-self: flex-start;
        }
        .btn-primary:hover {
          background: #059669;
          box-shadow: var(--shadow-hover);
        }
        .tag {
          padding: 0.1875rem 0.5rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 500;
          margin: 0 0.125rem 0.125rem 0;
          white-space: nowrap;
        }
        .tag-type { background: linear-gradient(135deg, #e1f5fe, #b3e5fc); color: #0277bd; }
        .tag-level { background: linear-gradient(135deg, #f3e5f5, #e1bee7); color: #7b1fa2; }
        .tag-topic { background: linear-gradient(135deg, #d1fae5, #a7f3d0); color: #065f46; font-size: 0.65rem; }
        .tag-category { background: linear-gradient(135deg, #e0f2fe, #b3e5fc); color: var(--secondary-color); }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 0.4s ease-out forwards; }
        @media (max-width: 768px) { 
          .resource-grid, .article-grid, .steps-grid, .glossary-grid { 
            grid-template-columns: 1fr; 
            gap: 0.75rem; 
          } 
          .container-padding { padding: 0.5rem; }
        }
      `}</style>
      
      {/* Quick Start Guides */}
      <section style={{ marginBottom: '2rem' }} className="fade-in">
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            fontWeight: 600,
            margin: 0,
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Quick Start Guides</h2>
          <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Visual & Audio</span>
        </div>
        <div className="resource-grid">
          {resources.map((resource, index) => (
            <div 
              key={resource.id} 
              className="card-hover"
              style={{ 
                borderRadius: '12px',
                background: 'white',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-light)',
                animationDelay: `${index * 0.03}s`,
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => handleResourceClick(resource)}
            >
              <div style={{ 
                position: 'relative', 
                height: '120px', 
                overflow: 'hidden' 
              }}>
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '0.5rem', 
                  left: '0.5rem', 
                  background: 'rgba(255,255,255,0.9)', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '16px',
                  fontSize: '0.9rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
                }}>
                  {resource.icon}
                </div>
              </div>
              <div style={{ 
                padding: '0.75rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.125rem', marginBottom: '0.5rem' }}>
                  <span className="tag tag-type">{resource.type}</span>
                  <span className="tag tag-level">{resource.level}</span>
                </div>
                <h3 style={{ 
                  margin: '0 0 0.375rem 0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  lineHeight: '1.2'
                }}>{resource.title}</h3>
                <p style={{ 
                  color: 'var(--text-light)', 
                  marginBottom: '0.5rem',
                  fontSize: '0.8rem',
                  lineHeight: '1.3',
                  flex: 1
                }}>
                  {resource.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap',
                  gap: '0.25rem'
                }}>
                  <span style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '0.75rem'
                  }}>
                    ⏱️ {resource.duration}
                  </span>
                  <div style={{ display: 'flex', gap: '0.125rem', flexWrap: 'wrap' }}>
                    {resource.topics.slice(0, 2).map((topic, tIndex) => (
                      <span key={tIndex} className="tag tag-topic">{topic}</span>
                    ))}
                    {resource.topics.length > 2 && <span className="tag tag-topic">+{resource.topics.length - 2}</span>}
                  </div>
                </div>
                <button className="btn-primary">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiring Reads */}
      <section style={{ marginBottom: '2rem' }} className="fade-in">
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            fontWeight: 600,
            margin: 0,
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Inspiring Reads</h2>
          <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Short Stories</span>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="card-hover"
              style={{
                display: 'flex',
                gap: '0.75rem',
                padding: '0.75rem',
                background: 'white',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-light)',
                border: '1px solid var(--border-color)',
                animationDelay: `${index * 0.03}s`
              }}
              onClick={() => handleArticleClick(article)}
            >
              <div style={{ 
                position: 'relative', 
                width: '100px', 
                height: '70px',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
                <span className="tag tag-category" style={{ 
                  position: 'absolute', 
                  bottom: '0.125rem', 
                  right: '0.125rem', 
                  fontSize: '0.65rem',
                  padding: '0.0625rem 0.25rem'
                }}>
                  {article.category}
                </span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ 
                    margin: '0 0 0.375rem 0',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    lineHeight: '1.2'
                  }}>{article.title}</h4>
                  <p style={{ 
                    margin: '0 0 0.5rem 0', 
                    color: 'var(--text-light)',
                    fontSize: '0.8rem',
                    lineHeight: '1.3'
                  }}>
                    {article.excerpt}
                  </p>
                </div>
                <span style={{ 
                  color: 'var(--text-light)', 
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.125rem'
                }}>
                  ⏱️ {article.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Steps to Recycle */}
      <section style={{ marginBottom: '2rem' }} className="fade-in">
        <h2 style={{ 
          fontSize: '1.5rem',
          fontWeight: 600,
          margin: '0 0 1rem 0',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Easy Recycle Steps</h2>
        <div className="steps-grid">
          {simpleSteps.map((step, index) => (
            <div 
              key={index}
              className="card-hover"
              style={{ 
                padding: '0.75rem',
                background: 'white',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-light)',
                animationDelay: `${index * 0.03}s`
              }}
            >
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '0.375rem',
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {step.icon}
              </div>
              <h3 style={{ 
                margin: '0 0 0.375rem 0',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                Step {step.step}: {step.title}
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                margin: 0,
                fontSize: '0.75rem',
                lineHeight: '1.2'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Glossary */}
      <section className="fade-in">
        <h2 style={{ 
          fontSize: '1.5rem',
          fontWeight: 600,
          margin: '0 0 1rem 0',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Word Pictures</h2>
        <div className="glossary-grid">
          {visualGlossary.map((item, index) => (
            <div 
              key={index}
              className="card-hover"
              style={{ 
                padding: '0.75rem',
                background: 'white',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-light)',
                animationDelay: `${index * 0.03}s`
              }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '0.375rem'
              }}>
                {item.icon}
              </div>
              <h3 style={{ 
                margin: '0 0 0.1875rem 0',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                {item.term}
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                margin: 0,
                fontSize: '0.75rem',
                lineHeight: '1.2'
              }}>
                {item.simple}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationalResources;