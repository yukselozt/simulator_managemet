import "./App.css";

function ResponsiveTable() {
  const states = [
    "Bilgisayar Aktif",
    "Ağ Aktif",
    "Aç",
    "Kapat",
    "Yeniden Başlat",
  ];
  return (
    <main className="table">
      <section className="table__header">
        <h1>SİSTEM DURUM EKRANI</h1>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th colSpan={2}> 25m ATIŞ POLİGONU </th>
              <th colSpan={2}> 50m STIŞ POLİGONU </th>
              <th colSpan={4}> OMA </th>
              <th colSpan={4}> OKUN </th>
              <th colSpan={4}> ATIŞ EVİ </th>
              <th colSpan={2}> HP </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 25AP1IG </td>
              <td> 25AP2IG </td>
              <td> 50AP1IG </td>
              <td> 25AP2IG </td>
              <td> OMA1IG </td>
              <td> OMA2IG </td>
              <td> OMA3IG </td>
              <td> OMA4IG </td>
              <td> OKUN1IG </td>
              <td> OKUN2IG </td>
              <td> OKUN3IG </td>
              <td> OKUN4IG </td>
              <td> AE1IG </td>
              <td> AE2IG </td>
              <td> AE3IG </td>
              <td> AE4IG </td>
              <td> HP1IG </td>
              <td> HP2IG </td>
            </tr>
            <tr>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
              <td>Bilgisayar Aktif</td>
            </tr>
            <tr>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
              <td>Ağ Aktif</td>
            </tr>
            <tr>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
              <td>Aç</td>
            </tr>
            <tr>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
              <td>Kapat</td>
            </tr>
            <tr>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
              <td>Yeniden Başlat</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ResponsiveTable;
