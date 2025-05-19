// src/pages/StatisticsPage.jsx
import { useEffect, useState } from "react";
import Header from "../components/Header";
import UrlStatsTable from "../components/UrlStatsTable";

function StatisticsPage() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/my-urls", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Failed to fetch stats.");
        } else {
          setUrls(data);
        }
      } catch (err) {
        setError("Server error.");
      }
    };

    fetchUrls();
  }, []);

  return (
    <>
      <Header showLoginButton={false} showNavbar={true} />
      {error ? (
        <p style={{ color: "red", padding: "1rem" }}>{error}</p>
      ) : (
        <UrlStatsTable urls={urls} />
      )}
    </>
  );
}

export default StatisticsPage;
