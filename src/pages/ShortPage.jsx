// src/pages/ShortPage.jsx
import Header from "../components/Header";
import ShortenForm from "../components/ShortenForm";
import { fetchWithAuth } from "../utils/auth";

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setShortUrl("");

  try {
    const res = await fetchWithAuth("http://localhost:4000/api/shorten", {
      method: "POST",
      body: JSON.stringify({ longUrl }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Failed to shorten URL");
    } else {
      setShortUrl(`${window.location.origin}/s/${data.shortCode}`);
    }
  } catch (err) {
    setError("Server error");
  }
};

function ShortPage() {
  return (
    <>
      <Header showLoginButton={false} showNavbar={true} />
      <ShortenForm />
    </>
  );
}

export default ShortPage;
