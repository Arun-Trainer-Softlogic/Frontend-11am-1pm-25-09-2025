import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // remove error for this field as user types
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  function validate() {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = "Enter a valid email";
    }
    if (!form.message.trim()) err.message = "Message cannot be empty";
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("sending");

    // Demo: simulate async submit (replace with real API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 900)); // fake delay
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  }

  return (
    <div style={styles.container}>
      <section style={styles.banner}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have a question or want to collaborate? Send us a message — we’ll reply shortly.
        </p>
      </section>

      <section style={styles.section}>
        <div style={styles.content}>
          <form onSubmit={handleSubmit} style={styles.form} noValidate>
            <label style={styles.label}>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="Your full name"
              />
              {errors.name && <div style={styles.error}>{errors.name}</div>}
            </label>

            <label style={styles.label}>
              Email
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="you@domain.com"
              />
              {errors.email && <div style={styles.error}>{errors.email}</div>}
            </label>

            <label style={styles.label}>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                style={{ ...styles.input, minHeight: 120, resize: "vertical" }}
                placeholder="Tell us about your question or project..."
              />
              {errors.message && <div style={styles.error}>{errors.message}</div>}
            </label>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                type="submit"
                style={{
                  ...styles.button,
                  opacity: status === "sending" ? 0.8 : 1,
                  cursor: status === "sending" ? "wait" : "pointer"
                }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && <div style={styles.success}>Message sent — thank you!</div>}
            </div>
          </form>

          <aside style={styles.card}>
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> hello@example.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> Bengaluru, India</p>

            <div style={{ marginTop: 12 }}>
              <h4 style={{ margin: "8px 0" }}>Follow</h4>
              <div style={{ display: "flex", gap: 10 }}>
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },

  banner: {
    textAlign: "center",
    padding: "36px 20px",
    background: "linear-gradient(135deg,#7de2ff,#a5ffd6)",
    borderRadius: 12,
    color: "#073b3a",
    marginBottom: 28
  },

  title: {
    fontSize: "2.2rem",
    margin: 0
  },

  subtitle: {
    marginTop: 8,
    opacity: 0.95
  },

  section: {
    marginTop: 12
  },

  content: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
    flexWrap: "wrap"
  },

  form: {
    flex: "1 1 420px",
    display: "flex",
    flexDirection: "column",
    gap: 12
  },

  label: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: 14
  },

  input: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box"
  },

  button: {
    padding: "10px 18px",
    borderRadius: 8,
    border: "none",
    background: "#073b3a",
    color: "white",
    fontWeight: "600"
  },

  card: {
    width: 260,
    padding: 16,
    borderRadius: 8,
    border: "1px solid #eee",
    background: "#fff",
    boxShadow: "0 6px 18px rgba(10,10,10,0.04)"
  },

  error: {
    color: "#b00020",
    fontSize: 13,
    marginTop: 6
  },

  success: {
    color: "#0a8a3a",
    fontWeight: 600
  }
};
