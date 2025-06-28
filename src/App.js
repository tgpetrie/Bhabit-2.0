import React from 'react';
import './App.css';
import TokenomicsChart from './components/TokenomicsChart'; // Make sure this path is correct

function App() {
  // Define the data for your tokenomics chart
  const tokenomicsData = {
    title: "BHABIT Token Distribution", // Title for the legend
    totalLabel: "Total Supply",        // Label for the center of the donut
    totalValue: "13T Tokens",          // Value for the center of the donut
    segments: [
      { label: "Presale & Seed", percentage: 20, value: "2.6T", color: "var(--primary-orange)" },
      { label: "Liquidity Pool", percentage: 25, value: "3.25T", color: "var(--primary-blue)" },
      { label: "Team & Advisors", percentage: 15, value: "1.95T", color: "var(--primary-pink)" },
      { label: "Marketing & Partnerships", percentage: 15, value: "1.95T", color: "var(--accent-purple)" },
      { label: "Development Fund", percentage: 15, value: "1.95T", color: "#00FF9F" /* Teal/Green */ },
      { label: "Community & Ecosystem", percentage: 10, value: "1.3T", color: "#FFD700" /* Gold */ },
    ]
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav-container">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#whitepaper" className="nav-link">Whitepaper</a>
        <a href="#tokenomics" className="nav-link">Tokenomics</a>
        <a href="#roadmap" className="nav-link">Roadmap</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Reorganized Hero Section - Compact */}
      <section id="home" className="hero-section">
        <div className="content-container">
          <div className="hero-content">
            <h1 className="liquid-logo">
              BHABIT
              <div className="liquid-drip drip-1"></div>
              <div className="liquid-drip drip-2"></div>
              <div className="liquid-drip drip-3"></div>
              <div className="liquid-drip drip-4"></div>
              <div className="liquid-drip drip-5"></div>
              <div className="splash-effect splash-1"></div>
              <div className="splash-effect splash-2"></div>
              <div className="splash-effect splash-3"></div>
            </h1>
            <p className="subtitle">Redefining Community Value</p>
            <p className="lead-text">Rebellion against traditional finance</p>
            
            <div className="cta-group">
              <a href="#tokenomics" className="cta-primary">Explore Token</a>
              <a href="#whitepaper" className="cta-secondary">Read More</a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Compact About Section */}
      <section id="about" className="content-section">
        <div className="content-container">
          <div className="section-container">
            <h2>About BHABIT</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>BHABIT is a decentralized movement that challenges traditional finance through community-driven growth and creative empowerment.</p>
                <p>Our platform combines DeFi tools, creator monetization, and gamified engagement in one rebellious ecosystem.</p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">13T</span>
                  <span className="stat-label">Total Supply</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">13%</span>
                  <span className="stat-label">Transaction Fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tokenomics Section with Visual Hierarchy */}
      <section id="tokenomics" className="content-section tokenomics-section">
        <div className="content-container">
          <div className="section-container">
            <h2>Tokenomics</h2> {/* Renamed heading */}
            <p className="lead-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Understanding the distribution and utility of BHABIT tokens.
            </p>
            
            {/* Integrate the TokenomicsChart component here */}
            <TokenomicsChart data={tokenomicsData} />

            <div className="tokenomics-summary" style={{marginTop: '4rem'}}>
              <div className="summary-grid">
                <div className="summary-item">
                  <h3>Deflationary Model</h3>
                  <p>A percentage of every transaction is permanently burned, reducing total supply over time.</p>
                </div>
                <div className="summary-item">
                  <h3>Holder Rewards</h3>
                  <p>Passive income through redistribution of transaction fees to token holders.</p>
                </div>
                <div className="summary-item">
                  <h3>Staking APY</h3>
                  <p>Attractive APY for staking tokens, encouraging long-term holding and network participation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Roadmap with Progress */}
      <section id="roadmap" className="content-section">
        <div className="content-container">
          <div className="section-container">
            <h2>Development Roadmap</h2>
            {/* <RoadmapProgress /> */}
            
            <div className="roadmap-timeline">
              <div className="roadmap-phase-enhanced">
                <div className="roadmap-phase-content">
                  <h3>Foundation (Q2-Q4 2025)</h3>
                  <ul className="roadmap-milestones">
                    <li>Launch <strong>BHABIT token</strong> on decentralized exchanges</li>
                    <li>Roll out the <strong>13 Habits Challenge</strong> platform</li>
                    <li>Start creator partnerships and onboarding</li>
                    <li>Release <strong>Bad Habit NFT</strong> collection</li>
                    <li>Launch BHABIT Wallet and basic DAO features</li>
                  </ul>
                </div>
                <div className="roadmap-phase-icon">🚀</div>
                <div></div>
              </div>
              
              <div className="roadmap-phase-enhanced">
                <div></div>
                <div className="roadmap-phase-icon">⚡</div>
                <div className="roadmap-phase-content">
                  <h3>Expansion (Q1-Q4 2026)</h3>
                  <ul className="roadmap-milestones">
                    <li>Launch the <strong>BHABIT DEX</strong> with advanced features</li>
                    <li>Expand to multiple blockchains (BSC, Polygon)</li>
                    <li>Strengthen gaming and DeFi partnerships</li>
                    <li>Develop <strong>Creator Tokens</strong> and monetization tools</li>
                    <li>Implement yield farming and lending protocols</li>
                  </ul>
                </div>
              </div>
              
              <div className="roadmap-phase-enhanced">
                <div className="roadmap-phase-content">
                  <h3>Global Adoption (Q1 2027+)</h3>
                  <ul className="roadmap-milestones">
                    <li>Layer 2 solutions integration (Optimism, Arbitrum)</li>
                    <li>Cross-chain compatibility and bridges</li>
                    <li>Global adoption through brand partnerships</li>
                    <li>Enterprise solutions and traditional finance bridges</li>
                    <li><strong>AI integration</strong> and metaverse presence</li>
                  </ul>
                </div>
                <div className="roadmap-phase-icon">🌍</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Contact Section */}
      <section id="contact" className="content-section">
        <div className="content-container">
          <div className="section-container">
            <h2>Join the BHABIT Revolution</h2>
            <p className="lead-text"><strong>Tom Petrie</strong> – Founder & CEO</p>
            <p>I am the visionary behind BHABIT, driven by a mission to disrupt traditional finance by embracing the chaos and creativity of decentralized systems. BHABIT is more than just a token; it's a rebellion against the limitations imposed by conventional financial structures.</p>
            
            <div className="contact-info">
              <h3>Get Connected</h3>
              <div className="contact-grid">
                <div className="contact-item">
                  <h4>Email</h4>
                  <a href="mailto:accounts@bhabit.net" className="footer-link">accounts@bhabit.net</a>
                </div>
                
                <div className="contact-item">
                  <h4>Website</h4>
                  <a href="https://bhabit.net" target="_blank" rel="noopener noreferrer" className="footer-link">bhabit.net</a>
                </div>
                
                <div className="contact-item">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a href="https://twitter.com/bhabit" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                    <a href="https://t.me/bhabit" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram</a>
                  </div>
                </div>
              </div>
              
              <div className="cta-group">
                <a href="mailto:accounts@bhabit.net" className="cta-primary">Get In Touch</a>
                <a href="#whitepaper" className="cta-secondary">Read Whitepaper</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

