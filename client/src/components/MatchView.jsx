function MatchView({ matches, subscriptions }) {
  const filteredMatches = matches.filter(match => subscriptions[match.product_id]);

  return (
    <div className="match-view">
      <h2>Match View</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Product</th>
            <th>Trade Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredMatches.slice(-20).map((match, index) => (
            <tr key={index}>
              <td>{new Date(match.time).toLocaleString()}</td>
              <td>{match.product_id}</td>
              <td>{match.size}</td>
              <td style={{ color: match.side === "buy" ? "green" : "red" }}>
                {match.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchView;
