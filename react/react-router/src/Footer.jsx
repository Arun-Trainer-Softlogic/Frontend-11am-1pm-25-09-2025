import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Column 1 */}
        <div style={styles.column}>
          <h3 style={styles.title}>MyWebsite</h3>
          <p style={styles.text}>
            Building modern React apps with clean code and elegant UI.  
            Learn, build, and grow with us!
          </p>
        </div>

        {/* Column 2 */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a style={styles.link} href="/">Home</a></li>
            <li><a style={styles.link} href="/about">About</a></li>
            <li><a style={styles.link} href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Contact</h4>
          <p style={styles.text}>📧 hello@example.com</p>
          <p style={styles.text}>📞 +91 98765 43210</p>
          <p style={styles.text}>📍 Bengaluru, India</p>
        </div>

        {/* Column 4 */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Follow Us</h4>
          <ul style={styles.socialList}>
            <li><a style={styles.link} href="https://github.com" target="_blank">GitHub</a></li>
            <li><a style={styles.link} href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a style={styles.link} href="https://linkedin.com" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© 2025 MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#1c1c1c",
    color: "white",
    paddingTop: "40px",
    marginTop: "40px",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 40px",
  },

  column: {
    width: "250px",
    marginBottom: "30px",
  },

  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "12px",
  },

  text: {
    fontSize: "0.95rem",
    lineHeight: 1.5,
    opacity: 0.8,
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  socialList: {
    listStyle: "none",
    padding: 0,
  },

  link: {
    color: "#ccc",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    transition: "0.2s",
  },

  bottomBar: {
    textAlign: "center",
    borderTop: "1px solid #333",
    marginTop: "20px",
    padding: "15px 0",
  },

  bottomText: {
    margin: 0,
    fontSize: "0.9rem",
    opacity: 0.7,
  },
};
