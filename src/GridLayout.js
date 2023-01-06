import "./App.css";
import Grid from "@mui/material/Grid";

function GridLayout() {
  const button_texts = [
    " 25m Atış Poligonu Açılış Modu ",
    " 50m Atış Poligonu Açılış Modu ",
    " Ortak Muharebe Odaları Açılış Modu ",
    " ÖKUN Odaları Açılış Modu ",
    " Atış Evi Açılış Modu ",
    " Hareketli Platformlar Açılış Modu ",
    " 25m Atış Poligonu Kapanış Modu ",
    " 50m Atış Poligonu Kapanış Modu ",
    " Ortak Muharebe Odaları Kapanış Modu ",
    " ÖKUN Odaları Kapanış Modu ",
    " Atış Evi Kapanış Modu ",
    " Hareketli Platformlar Kapanış Modu ",
    " 25m Atış Poligonu Yeniden Başlat ",
    " 50m Atış Poligonu Yeniden Başlat ",
    " Ortak Muharebe Odaları Yeniden Başlat ",
    " ÖKUN Odaları Yeniden Başlat ",
    " Atış Evi Yeniden Başlat ",
    " Hareketli Platformlar Yeniden Başlat ",
  ];
  return (
    <Grid
      rowGap={2}
      columnGap={2.2}
      className="grid"
      container
      spacing={2}
      columns={12}
    >
      {button_texts.map((val, key) => {
        return (
          <Grid>
            <button key={key}>{val}</button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridLayout;
