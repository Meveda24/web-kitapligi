function FavoriPaneli({ kitaplar, favoriler }) {
  const favoriKitaplar = kitaplar.filter((k) => favoriler.includes(k.id));

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>⭐ Favoriler ({favoriKitaplar.length})</h2>
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori kitap yok.</p>
      ) : (
        <ul>
          {favoriKitaplar.map((kitap) => (
            <li key={kitap.id}>{kitap.baslik}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriPaneli;
