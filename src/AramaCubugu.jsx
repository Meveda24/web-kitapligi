function AramaCubugu({ aramaMetni, onAramaDegisti }) {
  return (
    <input
      type="text"
      value={aramaMetni}
      onChange={(e) => onAramaDegisti(e.target.value)}
      placeholder="Kitap ara..."
      style={{ padding: "8px", marginTop: "10px", width: "250px" }}
    />
  );
}

export default AramaCubugu;
