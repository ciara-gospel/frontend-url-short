import { useEffect, useState } from "react";
import Header from "../components/Header";
import UrlStatsTable from "../components/UrlStatsTable";

const API_URL = import.meta.env.VITE_API_URL;

function StatisticsPage() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_URL}/api/my-urls`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log("URLs récupérées :", data.urls);
        setUrls(data.urls || []);

        if (!response.ok) {
          setError(data.message || "Failed to fetch stats.");
        } else {
          setUrls(data.urls || []);
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
