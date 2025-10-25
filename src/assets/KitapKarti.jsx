function KitapKarti({ id, baslik, yazar, kategori, favorideMi, onFavoriDegistir }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "5px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <h3>{baslik}</h3>
      <p>Yazar: {yazar}</p>
      <p>Kategori: {kategori}</p>
      <button onClick={() => onFavoriDegistir(id)}>
        {favorideMi ? "⭐ Favoriden Çıkar" : "☆ Favoriye Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;

