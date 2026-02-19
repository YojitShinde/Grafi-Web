import React, { useState } from 'react'
import './App.css'

function App() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: 'Record Seamlessly',
      description: 'Capture desktop audio and microphone input during Google Meet, Teams, Zoom, or any meeting platform.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="22"/>
          <line x1="8" y1="22" x2="16" y2="22"/>
        </svg>
      )
    },
    {
      title: 'AI-Powered Transcription',
      description: 'Advanced transcription with speaker diarization to identify who said what during your meetings.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      )
    },
    {
      title: 'Smart Meeting Minutes',
      description: 'Automatically generate structured, professional meeting minutes using a powerful Small Language Model.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4"/>
          <line x1="8" y1="16" x2="8" y2="16"/>
          <line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      )
    },
    {
      title: 'Complete Privacy',
      description: 'Everything runs locally on your Windows machine. No internet required, your data never leaves your computer.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={`${import.meta.env.BASE_URL}Grafi-Icon.png`} alt="Grafi" className="logo-icon" />
            <span className="logo-text">Grafi</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#download" className="nav-download">Download</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Meetings Into
              <span className="gradient-text"> Professional Minutes</span>
            </h1>
            <p className="hero-subtitle">
              AI-powered meeting minutes generator that works completely offline. 
              Record, transcribe, and generate structured meeting notes with complete privacy.
            </p>
            <div className="hero-buttons">
              <a href="#download" className="btn btn-primary">
                <span>Download for Windows</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 12L6 8H14L10 12Z" fill="currentColor"/>
                  <path d="M4 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="hero-badges">
              <span className="badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14A6 6 0 108 2a6 6 0 000 12z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 11V8M8 5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                100% Offline
              </span>
              <span className="badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 7v4a2 2 0 01-2 2H6a2 2 0 01-2-2V7m8 0V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2m8 0H4" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Windows 10/11
              </span>
              <span className="badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l2 5h5l-4 3 2 5-5-4-5 4 2-5-4-3h5l2-5z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Freeware
              </span>
            </div>
          </div>
          <div className="hero-image">
            <div className="mockup-window">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="mockup-title">Grafi Desktop</span>
              </div>
              <div className="mockup-content">
                <div className="mockup-recording">
                  <div className="recording-indicator">
                    <span className="pulse"></span>
                    <span>Recording in progress...</span>
                  </div>
                  <div className="waveform">
                    <span style={{height: '40%'}}></span>
                    <span style={{height: '70%'}}></span>
                    <span style={{height: '50%'}}></span>
                    <span style={{height: '80%'}}></span>
                    <span style={{height: '60%'}}></span>
                    <span style={{height: '90%'}}></span>
                    <span style={{height: '45%'}}></span>
                    <span style={{height: '75%'}}></span>
                  </div>
                  <div className="transcript-preview">
                    <div className="transcript-line">
                      <span className="speaker">Speaker 1:</span>
                      <span className="text">Let's discuss the quarterly results...</span>
                    </div>
                    <div className="transcript-line">
                      <span className="speaker">Speaker 2:</span>
                      <span className="text">The numbers look promising this quarter...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Powerful Features for Effortless Documentation</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Start Recording</h3>
                <p>Launch Grafi and start recording before your meeting begins. It captures both your microphone and desktop audio.</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>AI Processing</h3>
                <p>After the meeting, Grafi transcribes the audio and identifies different speakers automatically using AI.</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Get Your Minutes</h3>
                <p>Receive professionally formatted meeting minutes with key points, action items, and decisions documented.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <div className="download-card">
            <div className="download-content">
              <h2>Ready to Transform Your Meetings?</h2>
              <p>Download Grafi for Windows and start generating professional meeting minutes today.</p>
              <ul className="download-features">
                <li>✓ Free to use</li>
                <li>✓ No registration required</li>
                <li>✓ Complete offline functionality</li>
                <li>✓ Regular updates and support</li>
              </ul>
            </div>
            <div className="download-action">
              <button 
                className="btn btn-download"
                onClick={() => {
                  window.location.href = 'https://github.com/YojitShinde/Grafi-Web/releases/download/v1.0.0/Grafi_Setup_v1.0.0.exe';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span className="download-label">Download Grafi</span>
                  <span className="download-info">Version 1.0.0 • Windows 10/11 • 1.42 GB</span>
                </div>
              </button>
              {/* <p className="download-note">
                By downloading, you agree to our Terms of Service
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src={`${import.meta.env.BASE_URL}Grafi-Icon.png`} alt="Grafi" className="logo-icon" />
                <span className="logo-text">Grafi</span>
              </div>
              <p>AI-powered meeting minutes generator for Windows</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#download">Download</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                {/* <a href="#">Documentation</a>
                <a href="#">FAQ</a> */}
                <a href="mailto:yojitshinde@outlook.com">Contact</a>
              </div>
              {/* <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">License</a>
              </div> */}
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Grafi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
