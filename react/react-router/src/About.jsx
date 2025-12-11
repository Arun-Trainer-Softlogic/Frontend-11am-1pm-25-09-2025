import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      {/* Top Banner */}
      <section style={styles.banner}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Learn more about who we are, what we do, and why we love teaching React.
        </p>
      </section>

      {/* Mission Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to help students and developers master React and modern web
          development by providing clear explanations, real-world examples, and
          hands-on projects. We believe learning should be simple, enjoyable, and
          practical.
        </p>
      </section>

      {/* Values Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Values</h2>

        <div style={styles.values}>
          <div style={styles.valueCard}>
            <h3>🎓 Education</h3>
            <p>We focus on practical, easy-to-understand learning materials.</p>
          </div>

          <div style={styles.valueCard}>
            <h3>🚀 Growth</h3>
            <p>We help students grow from beginners to confident developers.</p>
          </div>

          <div style={styles.valueCard}>
            <h3>🤝 Community</h3>
            <p>We believe learning is stronger when we support each other.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Team</h2>
        <p style={styles.text}>
          We are a passionate group of developers, mentors, and designers dedicated
          to helping you succeed in your web development journey.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  banner: {
    textAlign: "center",
    padding: "40px 20px",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    borderRadius: "12px",
    color: "white",
    marginBottom: "40px",
  },

  title: {
    fontSize: "3rem",
    margin: 0,
  },

  subtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0.9,
  },

  section: {
    marginBottom: "40px",
  },

  heading: {
    fontSize: "2rem",
    marginBottom: "15px",
    textAlign: "center",
  },

  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
  },

  values: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  valueCard: {
    width: "250px",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    background: "white",
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
};
