import "./UrlStatsTable.css";

function UrlStatsTable({ urls }) {
  return (
    <div className="stats-table-container">
      <h2>Your URL Statistics</h2>
      {urls.length === 0 ? (
        <p>No URLs shortened yet.</p>
      ) : (
        <table className="stats-table">
          <thead>
            <tr>
              <th>Short URL</th>
              <th>Original URL</th>
              <th>Created At</th>
              <th>Expires At</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url.shortCode}>
                <td>
                  <a
                    href={`${window.location.origin}/s/${url.shortCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /s/{url.shortCode}
                  </a>
                </td>
                <td className="long-url">{url.longUrl}</td>
                <td>{new Date(url.createdAt).toLocaleDateString()}</td>
                <td>
                  {url.expiresAt
                    ? new Date(url.expiresAt).toLocaleDateString()
                    : "Never"}
                </td>
                <td>{url.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UrlStatsTable;
