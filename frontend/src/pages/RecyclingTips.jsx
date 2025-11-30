import React, { useState, useEffect } from 'react';

const RecyclingTips = () => {
  const [activeSection, setActiveSection] = useState('basics');
  const [quizScore, setQuizScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [recycledItems, setRecycledItems] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Enhanced sorting game state
  const [gameState, setGameState] = useState({
    currentItemIndex: 0,
    selectedBin: null,
    showFeedback: false,
    score: 0,
    gameCompleted: false
  });

  // Visual recycling steps - using only icons and colors
  const recyclingSteps = [
    { icon: "🧴", color: "#3B82F6", label: "Find Item", description: "Look for recyclable items in your home" },
    { icon: "🚰", color: "#60A5FA", label: "Clean It", description: "Rinse containers to remove food" },
    { icon: "🗑️", color: "#10B981", label: "Sort Right", description: "Put in correct recycling bin" },
    { icon: "🚛", color: "#F59E0B", label: "Collection", description: "Truck picks up recycling" },
    { icon: "🏭", color: "#8B5CF6", label: "Processing", description: "Materials are sorted and cleaned" },
    { icon: "🔄", color: "#EC4899", label: "New Product", description: "Made into new items you can buy" }
  ];

  // Visual categories with clear icons
  const materialCategories = [
    {
      id: 'plastic',
      name: 'Plastic',
      icon: '🧴',
      color: '#3B82F6',
      examples: ['Water bottles', 'Milk jugs', 'Detergent bottles'],
      dos: ['🧼 Clean containers', '📦 Flatten bottles', '🔍 Check symbols'],
      donts: ['🚫 No food residue', '🚫 No plastic bags', '🚫 No dirty items']
    },
    {
      id: 'paper',
      name: 'Paper',
      icon: '📄',
      color: '#10B981',
      examples: ['Newspapers', 'Cardboard boxes', 'Office paper'],
      dos: ['📦 Flatten boxes', '🗞️ Keep dry', '📰 Bundle newspapers'],
      donts: ['🚫 No food boxes', '🚫 No wet paper', '🚫 No tissues']
    },
    {
      id: 'glass',
      name: 'Glass',
      icon: '🍶',
      color: '#8B5CF6',
      examples: ['Jars', 'Bottles', 'Food containers'],
      dos: ['⚪ Clear glass', '🟢 Green glass', '🟤 Brown glass'],
      donts: ['🚫 No broken glass', '🚫 No windows', '🚫 No light bulbs']
    },
    {
      id: 'metal',
      name: 'Metal',
      icon: '🥫',
      color: '#6B7280',
      examples: ['Soda cans', 'Food cans', 'Aluminum foil'],
      dos: ['🥫 Clean cans', '🧲 Metal lids', '🔗 Separate types'],
      donts: ['🚫 No paint cans', '🚫 No batteries', '🚫 No electronics']
    }
  ];

  // Enhanced sorting game items with detailed feedback
  const sortingGameItems = [
    { 
      id: 1, 
      name: "Water Bottle", 
      icon: "🧴", 
      correctBin: "recycling", 
      description: "Plastic #1 - Recyclable!",
      explanation: "✅ Correct! Plastic bottles are widely recyclable. Rinse and remove caps first!",
      wrongExplanation: "❌ Plastic bottles should go in recycling, not trash! They can become new bottles or clothing."
    },
    { 
      id: 2, 
      name: "Pizza Box", 
      icon: "🍕", 
      correctBin: "trash", 
      description: "Grease contamination - Not recyclable",
      explanation: "✅ Correct! Grease ruins recycling batches. Only clean cardboard can be recycled.",
      wrongExplanation: "❌ Pizza boxes with grease go in trash. Clean parts can be recycled separately."
    },
    { 
      id: 3, 
      name: "Soda Can", 
      icon: "🥤", 
      correctBin: "recycling", 
      description: "Aluminum - Highly recyclable!",
      explanation: "✅ Perfect! Aluminum cans can be recycled infinitely without losing quality!",
      wrongExplanation: "❌ Aluminum cans are very valuable to recycle! They save 95% energy vs new cans."
    },
    { 
      id: 4, 
      name: "Plastic Bag", 
      icon: "🛍️", 
      correctBin: "special", 
      description: "Takes special handling",
      explanation: "✅ Right! Plastic bags tangle machinery. Take them to store collection bins.",
      wrongExplanation: "❌ Plastic bags need special handling. They clog recycling equipment in regular bins."
    },
    { 
      id: 5, 
      name: "Glass Jar", 
      icon: "🫙", 
      correctBin: "recycling", 
      description: "Glass - Rinse and recycle",
      explanation: "✅ Excellent! Glass can be recycled endlessly into new jars and bottles!",
      wrongExplanation: "❌ Glass jars are recyclable! Just rinse them clean first."
    },
    { 
      id: 6, 
      name: "Styrofoam", 
      icon: "🍽️", 
      correctBin: "trash", 
      description: "Not recyclable in most areas",
      explanation: "✅ Correct! Styrofoam is rarely recyclable. Check for special drop-off locations.",
      wrongExplanation: "❌ Styrofoam usually goes in trash. Some communities have special collection points."
    }
  ];

  // Bin configurations
  const bins = [
    { 
      id: "recycling", 
      name: "Recycling", 
      icon: "♻️", 
      color: "#10B981",
      description: "Clean bottles, cans, paper"
    },
    { 
      id: "trash", 
      name: "Trash", 
      icon: "🗑️", 
      color: "#6B7280",
      description: "Non-recyclable items"
    },
    { 
      id: "special", 
      name: "Special", 
      icon: "⭐", 
      color: "#F59E0B",
      description: "Needs special handling"
    }
  ];

  // Recycling quiz
  const quizQuestions = [
    {
      question: "Should you rinse containers before recycling?",
      options: ["Yes, always", "No, it's not necessary", "Only for glass"],
      correct: 0,
      explanation: "Yes! Food residue can contaminate entire batches of recyclables."
    },
    {
      question: "Where should plastic bags go?",
      options: ["Regular recycling", "Special store collection", "Trash"],
      correct: 1,
      explanation: "Plastic bags tangle recycling machinery. Take them to store collection bins."
    },
    {
      question: "Can you recycle pizza boxes?",
      options: ["Yes, always", "No, never", "Only if clean"],
      correct: 2,
      explanation: "Only if they're free of grease and food residue. Otherwise, trash them."
    }
  ];

  // Recycling impact facts
  const impactFacts = [
    { icon: "🌳", stat: "17", label: "Trees Saved", description: "Per ton of paper recycled" },
    { icon: "💧", stat: "50%", label: "Water Saved", description: "Using recycled materials vs new" },
    { icon: "⚡", stat: "75%", label: "Energy Saved", description: "Making products from recycled materials" },
    { icon: "🏭", stat: "90%", label: "Less Pollution", description: "Compared to making new products" }
  ];

  // Recycling transformation examples
  const transformationExamples = [
    { from: "🧴", to: "👕", description: "Plastic bottles become polyester fabric" },
    { from: "🥫", to: "🚲", description: "Aluminum cans become bicycle parts" },
    { from: "📰", to: "📦", description: "Newspapers become egg cartons" },
    { from: "🫙", to: "🪟", description: "Glass jars become new glass products" }
  ];

  // Enhanced Sorting Game Functions
  const handleBinSelect = (binId) => {
    if (gameState.showFeedback) return;
    
    const currentItem = sortingGameItems[gameState.currentItemIndex];
    const isCorrect = binId === currentItem.correctBin;
    
    setGameState(prev => ({
      ...prev,
      selectedBin: binId,
      showFeedback: true,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const nextGameItem = () => {
    if (gameState.currentItemIndex < sortingGameItems.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentItemIndex: prev.currentItemIndex + 1,
        selectedBin: null,
        showFeedback: false
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        gameCompleted: true
      }));
    }
  };

  const resetGame = () => {
    setGameState({
      currentItemIndex: 0,
      selectedBin: null,
      showFeedback: false,
      score: 0,
      gameCompleted: false
    });
  };

  // Interactive recycling challenge
  const startRecyclingChallenge = () => {
    setRecycledItems(0);
    setShowConfetti(false);
  };

  const addRecycledItem = () => {
    const newCount = recycledItems + 1;
    setRecycledItems(newCount);
    
    if (newCount % 5 === 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  // Quiz functionality
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowQuiz(false);
    }
  };

  const currentGameItem = sortingGameItems[gameState.currentItemIndex];
  const progress = ((gameState.currentItemIndex + 1) / sortingGameItems.length) * 100;

  return (
    <>
      <style>{`
        .creative-recycling {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
          background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%);
          min-height: 100vh;
          font-family: 'Segoe UI', system-ui, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* Confetti Animation */
        .confetti {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
        }

        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 20px;
          background: #ffd700;
          top: 0;
          opacity: 0;
        }

        @keyframes confettiFall {
          0% { top: -100px; opacity: 1; transform: rotate(0deg); }
          100% { top: 100vh; opacity: 0; transform: rotate(360deg); }
        }

        /* Enhanced Sorting Game Styles */
        .sorting-game-container {
          background: white;
          margin: 2rem 1.5rem;
          padding: 2rem;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .game-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .game-title {
          font-size: 2.2rem;
          color: #059669;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .game-progress {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          background: #f8fafc;
          padding: 1rem 1.5rem;
          border-radius: 16px;
        }

        .progress-bar {
          flex: 1;
          height: 12px;
          background: #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
          margin: 0 1rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981, #059669);
          border-radius: 6px;
          transition: width 0.5s ease;
        }

        .progress-text {
          font-weight: 600;
          color: #374151;
          white-space: nowrap;
        }

        .score-display {
          background: #1e40af;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 700;
        }

        /* Current Item Display */
        .current-item {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-radius: 20px;
          border: 3px dashed #cbd5e1;
        }

        .item-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
        }

        .item-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .item-description {
          color: #64748b;
          font-size: 1.1rem;
        }

        /* Bin Selection */
        .bins-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .bin-option {
          padding: 2rem 1rem;
          border-radius: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .bin-option::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .bin-option:hover::before {
          left: 100%;
        }

        .bin-option:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .bin-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .bin-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .bin-description {
          font-size: 0.9rem;
          color: #6b7280;
        }

        /* Game Feedback */
        .game-feedback {
          text-align: center;
          padding: 2rem;
          border-radius: 20px;
          margin: 2rem 0;
          animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .feedback-correct {
          background: #f0fdf4;
          border: 3px solid #10b981;
          color: #065f46;
        }

        .feedback-wrong {
          background: #fef2f2;
          border: 3px solid #ef4444;
          color: #991b1b;
        }

        .feedback-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feedback-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .feedback-explanation {
          font-size: 1.1rem;
          line-height: 1.5;
        }

        /* Game Actions */
        .game-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .game-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .button-next {
          background: #059669;
          color: white;
        }

        .button-reset {
          background: #6b7280;
          color: white;
        }

        /* Game Completed */
        .game-completed {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          color: white;
          border-radius: 24px;
        }

        .completed-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .completed-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .completed-score {
          font-size: 3rem;
          font-weight: 800;
          margin: 1rem 0;
          color: #fbbf24;
        }

        /* Bin Selection States */
        .bin-selected-correct {
          border-color: #10b981 !important;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3) !important;
          background: #f0fdf4 !important;
        }

        .bin-selected-wrong {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3) !important;
          background: #fef2f2 !important;
        }

        .bin-correct-answer {
          border-color: #10b981 !important;
          background: #f0fdf4 !important;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Rest of the styles remain the same */
        .recycling-header {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          padding: 2rem 1.5rem;
          text-align: center;
          border-radius: 0 0 30px 30px;
          box-shadow: 0 4px 20px rgba(5, 150, 105, 0.3);
        }

        .header-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .header-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .visual-nav {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .nav-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 1.5rem;
          background: white;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          min-width: 100px;
        }

        .nav-button.active {
          background: #059669;
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(5, 150, 105, 0.3);
        }

        .nav-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .process-section {
          background: white;
          margin: 2rem 1.5rem;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .section-title {
          font-size: 1.8rem;
          color: #059669;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }

        .process-step {
          text-align: center;
          padding: 1.5rem 1rem;
          border-radius: 16px;
          background: #f8fafc;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-5px);
        }

        .step-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .material-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .material-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .material-header {
          padding: 1.5rem;
          text-align: center;
          color: white;
        }

        .material-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .material-name {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .material-content {
          padding: 1.5rem;
        }

        .material-examples {
          background: #f8fafc;
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .dos-donts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .dos {
          background: #f0fdf4;
          border: 2px solid #10b981;
          padding: 1rem;
          border-radius: 12px;
        }

        .donts {
          background: #fef2f2;
          border: 2px solid #ef4444;
          padding: 1rem;
          border-radius: 12px;
        }

        .list-title {
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .transformation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .transformation-item {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .transformation-path {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0;
          font-size: 1.5rem;
        }

        .challenge-section {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          margin: 2rem 1.5rem;
        }

        .challenge-counter {
          font-size: 3rem;
          font-weight: 800;
          margin: 1rem 0;
        }

        .challenge-button {
          background: white;
          color: #1e40af;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          margin: 0.5rem;
        }

        .impact-section {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          margin: 2rem 1.5rem;
          text-align: center;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .impact-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }

        .impact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .impact-number {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .recycling-footer {
          text-align: center;
          padding: 2rem;
          background: #1f2937;
          color: white;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .bins-container {
            grid-template-columns: 1fr;
          }
          
          .game-progress {
            flex-direction: column;
            gap: 1rem;
          }
          
          .progress-bar {
            margin: 0;
            width: 100%;
          }
        }
      `}</style>

      <div className="creative-recycling">
        {/* Confetti Effect */}
        {showConfetti && (
          <div className="confetti">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  animation: `confettiFall ${Math.random() * 3 + 2}s linear forwards`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Header */}
        <header className="recycling-header">
          <h1 className="header-title">
            <span>♻️</span>
            Recycling Adventure
          </h1>
          <p className="header-subtitle">
            Join the mission to save our planet! Learn, play, and track your recycling impact.
          </p>
        </header>

        {/* Visual Navigation */}
        <div className="visual-nav">
          <button 
            className={`nav-button ${activeSection === 'basics' ? 'active' : ''}`}
            onClick={() => setActiveSection('basics')}
          >
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Basics</span>
          </button>
          <button 
            className={`nav-button ${activeSection === 'materials' ? 'active' : ''}`}
            onClick={() => setActiveSection('materials')}
          >
            <span className="nav-icon">📦</span>
            <span className="nav-label">Materials</span>
          </button>
          <button 
            className={`nav-button ${activeSection === 'sorting' ? 'active' : ''}`}
            onClick={() => setActiveSection('sorting')}
          >
            <span className="nav-icon">🎮</span>
            <span className="nav-label">Sorting Game</span>
          </button>
          <button 
            className={`nav-button ${activeSection === 'transform' ? 'active' : ''}`}
            onClick={() => setActiveSection('transform')}
          >
            <span className="nav-icon">🔄</span>
            <span className="nav-label">Transformations</span>
          </button>
          <button 
            className={`nav-button ${activeSection === 'impact' ? 'active' : ''}`}
            onClick={() => setActiveSection('impact')}
          >
            <span className="nav-icon">🌍</span>
            <span className="nav-label">Impact</span>
          </button>
          <button 
            className={`nav-button ${activeSection === 'challenge' ? 'active' : ''}`}
            onClick={() => setActiveSection('challenge')}
          >
            <span className="nav-icon">🏆</span>
            <span className="nav-label">My Impact</span>
          </button>
        </div>

        {/* Enhanced Sorting Game */}
        {activeSection === 'sorting' && (
          <section className="sorting-game-container">
            <div className="game-header">
              <h2 className="game-title">
                <span>🎮</span>
                Recycling Sorting Game
              </h2>
              <p>Test your recycling knowledge! Where should each item go?</p>
            </div>

            {!gameState.gameCompleted ? (
              <>
                {/* Game Progress */}
                <div className="game-progress">
                  <div className="progress-text">
                    Item {gameState.currentItemIndex + 1} of {sortingGameItems.length}
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="score-display">
                    Score: {gameState.score}/{sortingGameItems.length}
                  </div>
                </div>

                {/* Current Item */}
                <div className="current-item">
                  <div className="item-icon">{currentGameItem.icon}</div>
                  <div className="item-name">{currentGameItem.name}</div>
                  <div className="item-description">{currentGameItem.description}</div>
                </div>

                {/* Bin Selection */}
                <div className="bins-container">
                  {bins.map(bin => {
                    let binClass = "bin-option";
                    
                    if (gameState.selectedBin === bin.id) {
                      binClass += gameState.selectedBin === currentGameItem.correctBin 
                        ? " bin-selected-correct" 
                        : " bin-selected-wrong";
                    }
                    
                    if (gameState.showFeedback && bin.id === currentGameItem.correctBin) {
                      binClass += " bin-correct-answer";
                    }

                    return (
                      <div
                        key={bin.id}
                        className={binClass}
                        onClick={() => handleBinSelect(bin.id)}
                        style={{ 
                          borderColor: bin.color,
                          background: `linear-gradient(135deg, ${bin.color}15, ${bin.color}08)`
                        }}
                      >
                        <div className="bin-icon">{bin.icon}</div>
                        <div className="bin-name">{bin.name}</div>
                        <div className="bin-description">{bin.description}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Feedback */}
                {gameState.showFeedback && (
                  <div className={`game-feedback ${
                    gameState.selectedBin === currentGameItem.correctBin ? 'feedback-correct' : 'feedback-wrong'
                  }`}>
                    <div className="feedback-icon">
                      {gameState.selectedBin === currentGameItem.correctBin ? '✅' : '❌'}
                    </div>
                    <div className="feedback-title">
                      {gameState.selectedBin === currentGameItem.correctBin ? 'Correct!' : 'Not Quite Right'}
                    </div>
                    <div className="feedback-explanation">
                      {gameState.selectedBin === currentGameItem.correctBin 
                        ? currentGameItem.explanation 
                        : currentGameItem.wrongExplanation
                      }
                    </div>
                    <div className="game-actions">
                      <button className="game-button button-next" onClick={nextGameItem}>
                        {gameState.currentItemIndex < sortingGameItems.length - 1 ? 'Next Item' : 'See Results'}
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Game Completed */
              <div className="game-completed">
                <div className="completed-icon">🏆</div>
                <div className="completed-title">Game Completed!</div>
                <div className="completed-score">
                  {gameState.score}/{sortingGameItems.length}
                </div>
                <p>
                  {gameState.score === sortingGameItems.length 
                    ? "Perfect! You're a recycling expert! 🌟" 
                    : "Great job! Keep learning about recycling! 👍"
                  }
                </p>
                <div className="game-actions">
                  <button className="game-button button-reset" onClick={resetGame}>
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Other sections remain the same */}
        {/* Recycling Process */}
        {activeSection === 'basics' && (
          <section className="process-section">
            <h2 className="section-title">
              <span>🔄</span>
              The Recycling Journey
            </h2>
            <div className="process-steps">
              {recyclingSteps.map((step, index) => (
                <div 
                  key={index}
                  className="process-step"
                  style={{ borderTop: `4px solid ${step.color}` }}
                >
                  <span className="step-icon">{step.icon}</span>
                  <div className="step-label">{step.label}</div>
                  <div>{step.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Material Guides */}
        {activeSection === 'materials' && (
          <section className="process-section">
            <h2 className="section-title">
              <span>📦</span>
              What Goes Where
            </h2>
            <div className="material-grid">
              {materialCategories.map(material => (
                <div key={material.id} className="material-card">
                  <div 
                    className="material-header"
                    style={{ background: material.color }}
                  >
                    <div className="material-icon">{material.icon}</div>
                    <div className="material-name">{material.name}</div>
                  </div>
                  <div className="material-content">
                    <div className="material-examples">
                      <strong>Examples:</strong> {material.examples.join(', ')}
                    </div>
                    <div className="dos-donts">
                      <div className="dos">
                        <div className="list-title">✅ DO</div>
                        {material.dos.map((item, index) => (
                          <div key={index}>{item}</div>
                        ))}
                      </div>
                      <div className="donts">
                        <div className="list-title">❌ DON'T</div>
                        {material.donts.map((item, index) => (
                          <div key={index}>{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Transformation Examples */}
        {activeSection === 'transform' && (
          <section className="process-section">
            <h2 className="section-title">
              <span>🔄</span>
              Amazing Recycling Transformations
            </h2>
            <div className="transformation-grid">
              {transformationExamples.map((example, index) => (
                <div key={index} className="transformation-item">
                  <div className="transformation-path">
                    <span>{example.from}</span>
                    <span>→</span>
                    <span>{example.to}</span>
                  </div>
                  <div>{example.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impact Section */}
        {activeSection === 'impact' && (
          <section className="impact-section">
            <h2>Your Recycling Makes a Difference!</h2>
            <div className="impact-grid">
              {impactFacts.map((fact, index) => (
                <div key={index} className="impact-item">
                  <div className="impact-icon">{fact.icon}</div>
                  <div className="impact-number">{fact.stat}</div>
                  <div className="impact-label">{fact.label}</div>
                  <div>{fact.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Personal Challenge */}
        {activeSection === 'challenge' && (
          <section className="challenge-section">
            <h2>My Recycling Impact</h2>
            <div className="challenge-counter">
              {recycledItems} ♻️
            </div>
            <p>Items Recycled</p>
            <div>
              <button className="challenge-button" onClick={addRecycledItem}>
                + Add Recycled Item
              </button>
              <button className="challenge-button" onClick={startRecyclingChallenge}>
                🔄 Reset Counter
              </button>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="recycling-footer">
          <div>🌍 Together We Can Make a Difference</div>
          <p>Start your recycling adventure today!</p>
        </footer>
      </div>
    </>
  );
};

export default RecyclingTips;