function Hero() {
    return (
      <>
        <div>
          <header className="site-header">
            <div className="logo">
              <img src="./src/assets/images/civiclink-logo.png" alt="CivicLink Logo" />
            </div>
            <nav className="main-nav">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Representatives</a></li>
                <li><a href="#">Map</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </nav>
            <div className="auth-links">
              <a href="#" className="login">Sign in</a>
              <a href="#" className="register">Sign up</a>
            </div>
          </header>
  
          <section className="hero-section">
            <div className="hero-content">
              <h1>Bridge The Gap Today Between You And Your Government.</h1>
              <p>Find who is responsible for what, and how to reach them.</p>
              <div className="search-bar">
                <input type="text" placeholder="Enter your zip code or address..." />
                <button type="submit" aria-label="Search">
                  <img src="./src/assets/images/search-icon.png" alt="Search Icon" />
                </button>
              </div>
            </div>
          </section>
  
          <section className="quick-links">
            <div className="category-links">
              <a href="#" className="category-link">
                <div className="icon">🏥</div>
                <span>Healthcare</span>
              </a>
              <a href="#" className="category-link">
                <div className="icon">⚡</div>
                <span>Electricity</span>
              </a>
              <a href="#" className="category-link">
                <div className="icon">🎓</div>
                <span>Education</span>
              </a>
              <a href="#" className="category-link">
                <div className="icon">🔒</div>
                <span>Security</span>
              </a>
            </div>
          </section>
  
          {/* Other sections omitted for brevity */}
  
          <footer>
            <div className="footer-container">
              <div className="footer-logo">
                <img src="./src/assets/images/civiclink-logo.png" alt="CivicLink Logo" />
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Map</a></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Support</h3>
                  <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Legals</a></li>
                    <li><a href="#">Terms of Service</a></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Connect with us</h3>
                  <div className="social-links">
                    <a href="#">
                      <img src="./src/assets/images/facebook-icon.png" alt="Facebook" />
                      Facebook
                    </a>
                    <a href="#">
                      <img src="./src/assets/images/twitter-icon.png" alt="Twitter" />
                      Twitter
                    </a>
                    <a href="#">
                      <img src="./src/assets/images/youtube-icon.png" alt="YouTube" />
                      YouTube
                    </a>
                    <a href="#">
                      <img src="./src/assets/images/instagram-icon.png" alt="Instagram" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
  
  export default Hero;