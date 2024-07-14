import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Services</h1>
      </header>

      <main className="main">
        <section className="service-section">
          <h2>AWS Cloud Services with ANS</h2>
          <p>Our unique approach to automation, redeployment, and pre-configuration gives SMBs greater agility and lower costs. As an AWS Advanced Consulting Partner, our customers gain access to the most advanced processes, best practices, and know-how ANS offers.</p>
        </section>

        <section className="service-offerings">
          <div>
            <h3>AWS Managed Services</h3>
            <p>Simplify and accelerate the adoption of managed AWS infrastructure for increased efficiency and reduced operational costs.</p>
          </div>
          <div>
            <h3>Migrate to AWS</h3>
            <p>Seamlessly transition business agility by migrating workloads to AWS with minimal disruption.</p>
          </div>
          <div>
            <h3>Security Built In</h3>
            <p>Benefit from our 24/7 cloud security services, including managed detection and response, and certified experts to ensure your data's protection.</p>
          </div>
        </section>

        <section className="choose-ans">
          <h2>Why choose ANS for AWS cloud services?</h2>
          <p>Rapid deployment, lower cost of ownership, and unmatched expertise make ANS the preferred partner for AWS cloud services. Leverage our AWS Well-Architected Framework, flexible management, cost optimization, and strategic partnerships.</p>
          <button>Read More</button>
        </section>

        <section className="accreditations">
          <h2>Our AWS Accreditations</h2>
          {/* Add images of accreditations as needed */}
          <img src="aws-partner-1.png" alt="AWS Partner 1" />
          <img src="aws-partner-2.png" alt="AWS Partner 2" />
          <img src="aws-partner-3.png" alt="AWS Partner 3" />
          <img src="aws-partner-4.png" alt="AWS Partner 4" />
          <img src="aws-partner-5.png" alt="AWS Partner 5" />
        </section>

        <section className="how-we-work">
          <h2>How we work with you.</h2>
          <p>With ANS's 3-step process, you get it for your needs. We build a tailored solution to migrate, modernize, and manage your workloads. This includes ongoing support from our dedicated team of AWS experts.</p>
          <div>
            <h3>Navigate</h3>
            <p>Our experts will guide you through your AWS journey.</p>
          </div>
          <div>
            <h3>Launch</h3>
            <p>We handle the migration and setup of your AWS infrastructure.</p>
          </div>
          <div>
            <h3>Evolve</h3>
            <p>We provide ongoing support to ensure your AWS environment evolves with your business needs.</p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Speak to an AWS expert.</h2>
          <p>Speak to one of our AWS engineers and get a free cloud consultation.</p>
          <button>Get in Touch</button>
        </section>
      </main>
    </div>
  );
}

export default App;