import "./App.css";

function ResponsiveTable() {
  const row1_values = [
    " 25AP1IG ",
    " 25AP2IG ",
    " 50AP1IG ",
    " 50AP2IG ",
    " OMA1IG ",
    " OMA2IG ",
    " OMA3IG ",
    " OMA4IG ",
    " OKUN1IG ",
    " OKUN2IG ",
    " OKUN3IG ",
    " OKUN4IG ",
    " AE1IG ",
    " AE2IG ",
    " AE3IG ",
    " AE4IG ",
    " HP1IG ",
    " HP2IG ",
  ];
  const row2_value = <td> Bilgisayar Aktif </td>;
  const row3_value = <td> Ağ Aktif </td>;
  const row4_value = <td> Aç </td>;
  const row5_value = <td> Kapat </td>;
  const row6_value = <td> Yeniden Başlat </td>;
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
              <th colSpan={2}> 50m ATIŞ POLİGONU </th>
              <th colSpan={4}> OMA </th>
              <th colSpan={4}> OKUN </th>
              <th colSpan={4}> ATIŞ EVİ </th>
              <th colSpan={2}> HP </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {row1_values.map((val, key) => {
                return <td key={key}>{val}</td>;
              })}
            </tr>
            <tr>
              {row1_values.map(() => {
                return row2_value;
              })}
            </tr>
            <tr>
              {row1_values.map(() => {
                return row3_value;
              })}
            </tr>
            <tr>
              {row1_values.map(() => {
                return row4_value;
              })}
            </tr>
            <tr>
              {row1_values.map(() => {
                return row5_value;
              })}
            </tr>
            <tr>
              {row1_values.map(() => {
                return row6_value;
              })}
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ResponsiveTable;
