import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to My Website</h1>
        <p style={styles.subtitle}>
          Learn, Explore, and Build Amazing React Projects 🚀
        </p>
        <button style={styles.button}>Get Started</button>
      </section>

      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>🔥 React Tutorials</h3>
            <p>Step-by-step React lessons from beginner to advanced.</p>
          </div>

          <div style={styles.card}>
            <h3>⚙️ Live Projects</h3>
            <p>Work on real-world projects to build your portfolio.</p>
          </div>

          <div style={styles.card}>
            <h3>📚 Free Resources</h3>
            <p>Guides, notes, and tools to speed up your learning.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    textAlign: "center",
    padding: "50px 20px",
    background: "linear-gradient(135deg, #5b9dff, #6ecbff)",
    borderRadius: "12px",
    color: "white",
    marginBottom: "40px",
  },

  title: {
    fontSize: "3rem",
    margin: "0",
  },

  subtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: "0.9",
  },

  button: {
    marginTop: "20px",
    padding: "12px 25px",
    fontSize: "1rem",
    background: "white",
    color: "#0f4fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  features: {
    marginTop: "40px",
  },

  sectionTitle: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "20px",
  },

  cards: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "250px",
    textAlign: "center",
    background: "#fff",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
};
