import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * Main App component for EvoGit Web Demo
 * Demonstrates autonomous repository improvement tracking
 */
function App() {
  const [improvements, setImprovements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading improvement history
    const mockImprovements = [
      {
        id: 1,
        date: new Date().toISOString(),
        type: 'Documentation',
        description: 'Enhanced README with comprehensive setup instructions',
        status: 'completed'
      },
      {
        id: 2,
        date: new Date().toISOString(),
        type: 'Code Quality',
        description: 'Added proper React component structure',
        status: 'completed'
      },
      {
        id: 3,
        date: new Date().toISOString(),
        type: 'Testing',
        description: 'Added unit tests for core components',
        status: 'in_progress'
      }
    ];

    setTimeout(() => {
      setImprovements(mockImprovements);
      setLoading(false);
    }, 500);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#4caf50';
      case 'in_progress':
        return '#ff9800';
      case 'pending':
        return '#9e9e9e';
      default:
        return '#2196f3';
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🤖 EvoGit Web Demo</h1>
        <p className="subtitle">AI-Powered Autonomous Repository Improvements</p>
      </header>

      <main className="App-main">
        <section className="info-section">
          <h2>What is This?</h2>
          <p>
            This project demonstrates autonomous code improvements using Claude Code.
            The AI agent automatically identifies issues, implements fixes, and creates
            pull requests—all without manual intervention.
          </p>
        </section>

        <section className="improvements-section">
          <h2>Recent Improvements</h2>
          {loading ? (
            <div className="loading">Loading improvement history...</div>
          ) : (
            <div className="improvements-list">
              {improvements.map((improvement) => (
                <div key={improvement.id} className="improvement-card">
                  <div className="improvement-header">
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(improvement.status) }}
                    >
                      {improvement.status.replace('_', ' ')}
                    </span>
                    <span className="improvement-type">{improvement.type}</span>
                  </div>
                  <p className="improvement-description">{improvement.description}</p>
                  <time className="improvement-date">
                    {new Date(improvement.date).toLocaleString()}
                  </time>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🔄</span>
              <h3>Automated Improvements</h3>
              <p>Runs twice daily to identify and fix issues</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>Safe Guardrails</h3>
              <p>Follows strict guidelines to prevent breaking changes</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Code Review</h3>
              <p>Automatic PR reviews with detailed feedback</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Zero Maintenance</h3>
              <p>Continuous improvements with no manual work</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>
          Powered by{' '}
          <a
            href="https://www.anthropic.com/claude"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claude Code
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
