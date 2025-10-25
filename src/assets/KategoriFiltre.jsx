function KategoriFiltre({ kategori, onKategoriDegisti }) {
  return (
    <select
      value={kategori}
      onChange={(e) => onKategoriDegisti(e.target.value)}
      style={{ marginLeft: "10px", padding: "8px" }}
    >
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="Tasarım">Tasarım</option>
      <option value="CS">CS</option>
    </select>
  );
}

export default KategoriFiltre;
