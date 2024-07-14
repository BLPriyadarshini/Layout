import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>Services</h1>
        </div>
      </header>

      <main className="main">
        <section className="hero-section">
          <h2>AWS Cloud Services with ANS</h2>
          <p>Our unique approach to automation, redeployment, and pre-configuration gives SMBs greater agility and lower costs. As an AWS Advanced Consulting Partner, our customers gain access to the most advanced processes, best practices, and know-how ANS offers.</p>
        </section>

        <section className="service-offerings">
          <div className="service-card">
            <h3>AWS Managed Services</h3>
            <p>Description of AWS Managed Services.</p>
          </div>
          <div className="service-card">
            <h3>Migrate to AWS</h3>
            <p>Description of Migrate to AWS.</p>
          </div>
          <div className="service-card">
            <h3>Security Built In</h3>
            <p>Description of Security Built In.</p>
          </div>
        </section>

        <section className="choose-ans">
          <h2>Why choose ANS for AWS cloud services?</h2>
          <div className="choose-ans-content">
            <div className="choose-ans-text">
              <p>Reasons to choose ANS for AWS cloud services.</p>
              <button>Read More</button>
            </div>
            <div className="choose-ans-list">
              <ul>
                <li>AWS Well Architected Framework</li>
                <li>Flexible AWS management</li>
                <li>AWS cost and performance optimization</li>
                <li>Strategic Partnership</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="accreditations">
          <h2>Our AWS Accreditations</h2>
          <div className="accreditation-logos">
            <img src="aws-partner-1.png" alt="AWS Partner 1" />
            <img src="aws-partner-2.png" alt="AWS Partner 2" />
            <img src="aws-partner-3.png" alt="AWS Partner 3" />
            <img src="aws-partner-4.png" alt="AWS Partner 4" />
            <img src="aws-partner-5.png" alt="AWS Partner 5" />
          </div>
        </section>

        <section className="how-we-work">
          <h2>How we work with you</h2>
          <div className="steps">
            <div className="step">
              <h3>Navigate</h3>
              <p>Detail about Navigate.</p>
            </div>
            <div className="step">
              <h3>Launch</h3>
              <p>Detail about Launch.</p>
            </div>
            <div className="step">
              <h3>Evolve</h3>
              <p>Detail about Evolve.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Speak to an AWS expert</h2>
          <p>Call to action for speaking to an AWS expert.</p>
          <button>Get in Touch</button>
        </section>
      </main>
    </div>
  );
}

export default App;