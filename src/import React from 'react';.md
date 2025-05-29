import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Add spray dots background effect */}
      <div className="spray-dots">
        {Array.from({length: 20}, (_, i) => (
          <div 
            key={i} 
            className="spray-dot" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="nav-container">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#whitepaper" className="nav-link">Whitepaper</a>
        <a href="#tokenomics" className="nav-link">Token Economics</a>
        <a href="#roadmap" className="nav-link">Roadmap</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Hero Section with enhanced liquid drip logo */}
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
            <p className="subtitle">Redefining Community Value Through Chaos and Connection</p>
            <p className="lead-text">Join the rebellion against traditional finance</p>
            
            <div className="cta-group">
              <a href="#whitepaper" className="cta-primary">Read Whitepaper</a>
              <a href="#tokenomics" className="cta-secondary">View Token Economics</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with clear hierarchy */}
      <section id="about" className="content-section">
        <div className="content-container">
          <div className="section-container">
            <h2>About BHABIT</h2>
            <p className="lead-text">More than just a cryptocurrency—it's a movement that challenges the traditional financial system.</p>
            <p>BHABIT (BBIT) embraces individual freedom, rebellion, and community-driven growth. Our platform combines decentralized governance, gamified engagement, and creator-centric tools to create an inclusive ecosystem where users are rewarded for their active participation.</p>
            
            <div className="cta-group">
              <a href="#roadmap" className="cta-secondary">View Roadmap</a>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Whitepaper Section */}
      <section id="whitepaper" className="whitepaper-section">
        <div className="content-container">
          <h2>BHABIT (BBIT): Redefining Community Value Through Chaos and Connection</h2>
          
          <div className="whitepaper-toc">
            <h3>Table of Contents</h3>
            <ul className="whitepaper-toc-list">
              <li><a href="#abstract">Abstract</a></li>
              <li><a href="#introduction">1. Introduction</a></li>
              <li><a href="#ecosystems">2. BHABIT vs. Existing Ecosystems</a></li>
              <li><a href="#components">3. Key Components of BHABIT</a></li>
              <li><a href="#tokenomics-wp">4. Token Economics</a></li>
              <li><a href="#use-cases">5. Use Cases</a></li>
              <li><a href="#roadmap-wp">6. Roadmap</a></li>
              <li><a href="#team">7. The BHABIT Team</a></li>
              <li><a href="#risks">8. Risk Assessment</a></li>
              <li><a href="#legal">9. Legal Considerations</a></li>
              <li><a href="#conclusion">10. Conclusion</a></li>
            </ul>
          </div>

          <div className="wp-content">
            <h3 id="abstract">Abstract</h3>
            <p>BHABIT (BBIT) is more than just a cryptocurrency—it's a movement that challenges the traditional financial system by embracing individual freedom, rebellion, and community-driven growth. BHABIT combines decentralized governance, gamified engagement, and creator-centric tools to create an inclusive ecosystem where users are rewarded for their active participation.</p>
            
            <p>Built on the philosophy that financial innovation thrives in environments that embrace chaos and bold decision-making, BHABIT offers a unique economic model with <span className="token-number">13 trillion tokens</span>, reinforcing themes of abundance and rebelliousness. The ecosystem includes a decentralized autonomous organization (DAO), creator-centric tools, gamified challenges, and a comprehensive DeFi platform designed to empower users to take control of their financial futures.</p>

            <h3 id="introduction">1. Introduction</h3>
            <h4>1.1 Background</h4>
            <p>The rise of decentralized finance (DeFi) and social tokens has fundamentally transformed how value is created, shared, and governed in the digital economy. Traditional financial systems, with their rigid structures and gatekeeping mechanisms, are being challenged by innovative blockchain-based solutions that prioritize community ownership, transparency, and individual empowerment.</p>
            
            <p>BHABIT emerges from this paradigm shift, but takes a distinctly different approach. Rather than following the conventional path of structured, institutional-grade DeFi platforms, BHABIT embraces the chaotic, rebellious spirit that drives true innovation. We believe that the most transformative financial solutions come from environments that celebrate risk-taking, creativity, and the willingness to challenge established norms.</p>
            
            <h4>1.2 Vision</h4>
            <p>Our vision is to create a decentralized ecosystem where participants have complete control over their financial choices, unencumbered by traditional barriers or conventional thinking. Through innovative token economics, accessible governance mechanisms, and creator-driven tools, BHABIT enables users to shape their financial futures while breaking free from the limitations of existing systems.</p>
            
            <p>BHABIT is designed for the rebels, the creators, the risk-takers, and the visionaries who understand that true financial freedom requires the courage to embrace uncertainty and the wisdom to build community-driven solutions.</p>

            <h3 id="ecosystems">2. BHABIT vs. Existing Ecosystems</h3>
            <h4>2.1 Differentiators</h4>
            <ol>
              <li><strong>Philosophy: Freedom and Rebellion Over Perfection</strong><br />
                While traditional ecosystems focus on structured, institutional-grade approaches, BHABIT thrives on the freedom to make bold and sometimes chaotic financial decisions. We celebrate the messy, unpredictable nature of true innovation.</li>
              
              <li><strong>Gamified Community Engagement</strong><br />
                BHABIT introduces the <strong>'13 Habits Challenge'</strong>, a dynamic system where users engage in decentralized, community-driven tasks that reward participation, creativity, and risk-taking.</li>
              
              <li><strong>Revolutionary Token Economics</strong><br />
                Our total supply of <span className="token-number">13 trillion tokens</span> deliberately challenges conventional scarcity-based models, instead embracing abundance as a core principle.</li>
              
              <li><strong>Accessible Governance</strong><br />
                Our DAO offers simplified, low-barrier access to governance, encouraging participation from all token holders regardless of their technical expertise or holdings size.</li>
              
              <li><strong>Creator-Centric Ecosystem</strong><br />
                BHABIT provides creators with comprehensive tools including personalized Creator Tokens, exclusive Bad Habit NFTs, and monetization mechanisms.</li>
            </ol>

            <h3 id="components">3. Key Components of BHABIT</h3>
            <h4>3.1 BHABIT DAO</h4>
            <p>The BHABIT DAO serves as the decentralized governing body of the ecosystem, empowering community members to make critical decisions about the platform's future. Key features include proposal systems, democratic voting, treasury management, and protocol upgrades.</p>
            
            <h4>3.2 Creator Tokens</h4>
            <p>Creator Tokens represent a revolutionary approach to content monetization and community building. Creators can launch tokens without technical expertise using our no-code platform, with customizable economics and built-in community rewards.</p>
            
            <h4>3.3 Bad Habit NFTs</h4>
            <p>Bad Habit NFTs are exclusive digital collectibles that represent membership in the BHABIT rebellion. These NFTs provide exclusive access, reward multipliers, community status, and utility functions within the ecosystem.</p>
            
            <h4>3.4 The 13 Habits Challenge</h4>
            <p>A gamified engagement system that rewards users for participating in various ecosystem activities including daily challenges, community quests, creator missions, and rebel raids.</p>
            
            <h4>3.5 Ecosystem Tools</h4>
            <ul>
              <li><strong>BHABIT Launchpad:</strong> No-code platform for tokenizing communities and projects</li>
              <li><strong>BHABIT DEX:</strong> User-friendly decentralized exchange optimized for ecosystem tokens</li>
              <li><strong>BHABIT Wallet:</strong> Secure, intuitive wallet designed specifically for ecosystem interactions</li>
              <li><strong>BHABIT Analytics:</strong> Comprehensive dashboard for tracking performance and rewards</li>
            </ul>

            <h3 id="tokenomics-wp">4. Token Economics</h3>
            <h4>4.1 Token Overview</h4>
            <p><strong>Token Name:</strong> BHABIT<br />
            <strong>Token Symbol:</strong> BBIT<br />
            <strong>Total Supply:</strong> <span className="number-13">13,000,000,000,000</span> BBIT<br />
            <strong>Blockchain:</strong> Ethereum (with multi-chain expansion planned)</p>
            
            <h4>4.2 Distribution Model</h4>
            <ul>
              <li><strong>Community Growth & Rewards (30%):</strong> 3.9T BBIT for user incentives and community initiatives</li>
              <li><strong>Creator Ecosystem Fund (25%):</strong> 3.25T BBIT for supporting creators and partnerships</li>
              <li><strong>Liquidity Pool (20%):</strong> 2.6T BBIT for exchange liquidity</li>
              <li><strong>Development Fund (15%):</strong> 1.95T BBIT for ongoing development</li>
              <li><strong>Founders & Team (10%):</strong> 1.3T BBIT with extended vesting schedules</li>
            </ul>
            
            <h4>4.3 Transaction Mechanics</h4>
            <p>BHABIT implements a unique <span className="number-13">13%</span> transaction fee structure:</p>
            <ul>
              <li><strong>6.5% Burn:</strong> Permanently removes tokens from circulation</li>
              <li><strong>6.5% Redistribution:</strong> Automatically distributed to all BBIT holders</li>
            </ul>

            <h3 id="use-cases">5. Use Cases</h3>
            <h4>5.1 For Individual Users</h4>
            <ul>
              <li><strong>Portfolio Diversification:</strong> Exposure to creator economy growth</li>
              <li><strong>Passive Income:</strong> Rewards through staking and holding</li>
              <li><strong>Community Participation:</strong> Governance and platform development</li>
              <li><strong>Gamified Earning:</strong> 13 Habits Challenges for additional rewards</li>
            </ul>
            
            <h4>5.2 For Content Creators</h4>
            <ul>
              <li><strong>Monetization:</strong> Launch creator tokens for sustainable income</li>
              <li><strong>Community Building:</strong> Reward loyal followers and build engagement</li>
              <li><strong>Exclusive Content:</strong> Gate premium content behind token ownership</li>
              <li><strong>Collaboration:</strong> Cross-promotional opportunities with other creators</li>
            </ul>

            <h3 id="roadmap-wp">6. Roadmap</h3>
            <h4>Phase 1: Q2 2025 – Q4 2025: Foundation & Launch</h4>
            <ul>
              <li>Complete smart contract development and security audits</li>
              <li>Launch BHABIT token on Ethereum mainnet</li>
              <li>Establish initial liquidity pools on major DEXs</li>
              <li>Launch the 13 Habits Challenge platform</li>
              <li>Begin creator onboarding program</li>
            </ul>
            
            <h4>Phase 2: Q1 2026 – Q4 2026: Ecosystem Expansion</h4>
            <ul>
              <li>Launch BHABIT DEX with advanced features</li>
              <li>Expand to Binance Smart Chain and Polygon</li>
              <li>Implement cross-chain bridge functionality</li>
              <li>Launch gaming integrations and partnerships</li>
              <li>Release DeFi lending and borrowing protocols</li>
            </ul>
            
            <h4>Phase 3: Q1 2027 & Beyond: Global Adoption</h4>
            <ul>
              <li>Layer 2 solutions integration</li>
              <li>Global expansion with localized versions</li>
              <li>Enterprise solutions development</li>
              <li>AI integration and metaverse presence</li>
              <li>Traditional finance bridge creation</li>
            </ul>

            <h3 id="team">7. The BHABIT Team</h3>
            <h4>7.1 Founder & CEO</h4>
            <p><strong>Tom Petrie</strong> – Visionary, Rebel, and Creator</p>
            <p>As the sole founder and driving force behind BHABIT, Tom Petrie brings a unique combination of technical expertise, creative vision, and rebellious spirit to the project. With a background in blockchain development, community building, and digital marketing, Tom has identified the gaps in current DeFi ecosystems and designed BHABIT to address these limitations.</p>

            <h3 id="risks">8. Risk Assessment</h3>
            <h4>8.1 Technical Risks</h4>
            <ul>
              <li><strong>Smart Contract Vulnerabilities:</strong> Risk of bugs or exploits in code</li>
              <li><strong>Scalability Challenges:</strong> Potential network congestion and high fees</li>
              <li><strong>Technology Obsolescence:</strong> Risk of underlying technology becoming outdated</li>
            </ul>
            
            <h4>8.2 Market Risks</h4>
            <ul>
              <li><strong>Cryptocurrency Volatility:</strong> High volatility affecting token value</li>
              <li><strong>Competition:</strong> Risk from established and emerging DeFi platforms</li>
              <li><strong>Market Adoption:</strong> Risk of slow adoption by target audiences</li>
            </ul>

            <h3 id="legal">9. Legal Considerations</h3>
            <p>BHABIT tokens are designed as utility tokens that provide access to platform features, governance rights, and ecosystem rewards. The tokens are not intended as investment contracts or securities, but rather as functional elements of a decentralized ecosystem.</p>

            <h3 id="conclusion">10. Conclusion</h3>
            <p>BHABIT represents a paradigm shift in how we think about decentralized finance, community building, and creative empowerment. By embracing chaos, celebrating rebellion, and prioritizing community-driven growth, BHABIT creates an ecosystem where users are not just participants, but active architects of their financial futures.</p>
            
            <p>The revolution starts now. The chaos is beautiful. Welcome to BHABIT.</p>
            
            <div className="cta-group">
              <a href="#tokenomics" className="cta-primary">Explore Token Economics</a>
              <a href="#contact" className="cta-secondary">Join the Community</a>
            </div>
          </div>
        </div>
      </section>

      {/* Token Economics Section */}
      <section id="tokenomics" className="content-section">
        <div className="content-container">
          <div className="section-container">
            <h2>Token Economics Overview</h2>
            <div className="tokenomics-grid">
              <div className="tokenomics-card">
                <h3>Total Supply</h3>
                <p className="big-number"><span className="number-13">13</span> Trillion BBIT</p>
              </div>
              
              <div className="tokenomics-card">
                <h3>Transaction Fee</h3>
                <p className="big-number"><span className="number-13">13%</span></p>
                <p>6.5% Burned • 6.5% Redistributed</p>
              </div>
            </div>
            
            <h3>Token Distribution</h3>
            <ul className="distribution-list">
              <li><strong>Community Growth & Rewards:</strong> 30% (3.9T BBIT)</li>
              <li><strong>Creator Ecosystem Fund:</strong> 25% (3.25T BBIT)</li>
              <li><strong>Liquidity Pool:</strong> 20% (2.6T BBIT)</li>
              <li><strong>Development Fund:</strong> 15% (1.95T BBIT)</li>
              <li><strong>Founders & Team:</strong> 10% (1.3T BBIT)</li>
            </ul>
            
            <h3>Staking Rewards</h3>
            <ul>
              <li><strong>Basic Staking:</strong> 8-12% APY</li>
              <li><strong>LP Staking:</strong> 15-25% APY</li>
              <li><strong>Creator Staking:</strong> Enhanced rewards for creators</li>
              <li><strong>DAO Staking:</strong> Additional rewards for governance participation</li>
            </ul>
            
            <div className="cta-group">
              <a href="#roadmap" className="cta-primary">View Roadmap</a>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="content-section">
        <div className="content-container">
          <div className="section-container">
            <h2>Development Roadmap</h2>
            
            <div className="roadmap-phase">
              <h3>Phase 1: Foundation (Q2-Q4 2025)</h3>
              <ul>
                <li>Launch BHABIT token on decentralized exchanges</li>
                <li>Roll out the <strong>13 Habits Challenge</strong> platform</li>
                <li>Start creator partnerships and onboarding</li>
                <li>Release Bad Habit NFT collection</li>
                <li>Launch BHABIT Wallet and basic DAO features</li>
              </ul>
            </div>
            
            <div className="roadmap-phase">
              <h3>Phase 2: Expansion (Q1-Q4 2026)</h3>
              <ul>
                <li>Launch the <strong>BHABIT DEX</strong> with advanced features</li>
                <li>Expand to multiple blockchains (BSC, Polygon)</li>
                <li>Strengthen gaming and DeFi partnerships</li>
                <li>Develop Creator Tokens and monetization tools</li>
                <li>Implement yield farming and lending protocols</li>
              </ul>
            </div>
            
            <div className="roadmap-phase">
              <h3>Phase 3: Global Adoption (Q1 2027+)</h3>
              <ul>
                <li>Layer 2 solutions integration (Optimism, Arbitrum)</li>
                <li>Cross-chain compatibility and bridges</li>
                <li>Global adoption through brand partnerships</li>
                <li>Enterprise solutions and traditional finance bridges</li>
                <li>AI integration and metaverse presence</li>
              </ul>
            </div>
            
            <div className="cta-group">
              <a href="#contact" className="cta-primary">Join the Journey</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                  <a href="mailto:contact@bhabit.com" className="footer-link">contact@bhabit.com</a>
                </div>
                
                <div className="contact-item">
                  <h4>Website</h4>
                  <a href="https://bhabit.com" target="_blank" rel="noopener noreferrer" className="footer-link">bhabit.com</a>
                </div>
                
                <div className="contact-item">
                  <h4>Social Media</h4>
                  <a href="https://twitter.com/bhabit" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                  <a href="https://t.me/bhabit" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram</a>
                </div>
              </div>
              
              <div className="cta-group">
                <a href="mailto:contact@bhabit.com" className="cta-primary">Get In Touch</a>
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

