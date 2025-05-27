import { useState } from "react";
import "./ShortenForm.css";

const API_URL = import.meta.env.VITE_API_URL;

function ShortenForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setCopied(false);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ originalUrl: longUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to shorten URL.");
        return;
      }

      setShortUrl(data.shortUrl || `${window.location.origin}/s/${data.shortCode}`);
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="shorten-container">
      <form onSubmit={handleSubmit} className="shorten-form">
        <input
          type="url"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <button type="submit" className="shorten-btn">
          Shorten
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {shortUrl && (
        <div className="result">
          <p>Your shortened URL:</p>
          <div className="short-link-container">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <button className="copy-button" onClick={handleCopy}>
              Copy
            </button>
          </div>
          {copied && <p className="copied-message">✅ Copied!</p>}
        </div>
      )}
    </div>
  );
}

export default ShortenForm;
