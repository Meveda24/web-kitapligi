import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, favoriler, onFavoriDegistir }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>📖 Kitap Listesi</h2>

      {kitaplar.length === 0 ? (
        <p>Hiç kitap bulunamadı.</p>
      ) : (
        kitaplar.map((kitap) => (
          <KitapKarti
            key={kitap.id}
            id={kitap.id}
            baslik={kitap.baslik}
            yazar={kitap.yazar}
            kategori={kitap.kategori}
            favorideMi={favoriler.includes(kitap.id)}
            onFavoriDegistir={onFavoriDegistir}
          />
        ))
      )}
    </div>
  );
}

export default KitapListe;

