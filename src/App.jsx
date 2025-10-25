import React, { useState, useEffect } from "react";
import AramaCubugu from "./AramaCubugu";
import KategoriFiltre from "./assets/KategoriFiltre";
import KitapListe from "./assets/KitapListe";
import FavoriPaneli from "./FavoriPaneli.jsx";

function App() {
  // 🟢 1. State tanımları (veriler localStorage’dan okunuyor)
  const [aramaMetni, setAramaMetni] = useState(
    localStorage.getItem("arama") || ""
  );

  const [kategori, setKategori] = useState("Tümü");

  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  // 🟢 2. Kitap verileri
  const kitapVerileri = [
    { id: 1, baslik: "React Öğreniyorum", yazar: "Asım Yüksel", kategori: "Web" },
    { id: 2, baslik: "Python 101", yazar: "Gizem Kaya", kategori: "Programlama" },
    { id: 3, baslik: "Veritabanı Sistemleri", yazar: "H. Demir", kategori: "Veritabanı" },
    { id: 4, baslik: "HTML & CSS", yazar: "Ali Yılmaz", kategori: "Web" },
  ];

  const [kitaplar] = useState(kitapVerileri);

  // 🟢 3. Değişiklikleri localStorage’a kaydet
  useEffect(() => {
    localStorage.setItem("arama", aramaMetni);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  // 🟢 4. Arama + kategori filtreleme
  const filtreliKitaplar = kitaplar.filter((kitap) => {
    const uygunKategori = kategori === "Tümü" || kitap.kategori === kategori;
    const uygunArama = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    return uygunKategori && uygunArama;
  });

  // 🟢 5. Favori ekleme / çıkarma fonksiyonu
  const favoriDegistir = (id) => {
    setFavoriler((eskiFavoriler) =>
      eskiFavoriler.includes(id)
        ? eskiFavoriler.filter((favId) => favId !== id)
        : [...eskiFavoriler, id]
    );
  };

  // 🟢 6. Arayüz (JSX)
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Web Kitaplığı</h1>

      {/* Arama kutusu */}
      <AramaCubugu aramaMetni={aramaMetni} onAramaDegisti={setAramaMetni} />

      {/* Kategori seçici */}
      <KategoriFiltre kategori={kategori} onKategoriDegisti={setKategori} />

      {/* Kitap listesi */}
      <KitapListe
        kitaplar={filtreliKitaplar}
        favoriler={favoriler}
        onFavoriDegistir={favoriDegistir}
      />

      {/* Favori paneli */}
      <FavoriPaneli kitaplar={kitaplar} favoriler={favoriler} />
    </div>
  );
}

export default App;


