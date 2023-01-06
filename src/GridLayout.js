import "./App.css";
import Grid from "@mui/material/Grid";

function GridLayout() {
  return (
    <Grid rowGap={2} className="grid" container spacing={2} columns={12}>
      <Grid xs={2}>
        <button> 25m Atış Poligonu Açılış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> 50m Atış Poligonu Açılış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> Ortak Muharebe Odaları Açılış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> ÖKUN Odaları Açılış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> Atış Evi Açılış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> Hareketli Platformlar Açılış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> 25m Atış Poligonu Kapanış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> 50m Atış Poligonu Kapanış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> Ortak Muharebe Odaları Kapanış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> ÖKUN Odaları Kapanış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> Atış Evi Kapanış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> Hareketli Platformlar Kapanış Modu </button>
      </Grid>
      <Grid xs={2}>
        <button> 25m Atış Poligonu Yeniden Başlat </button>
      </Grid>
      <Grid xs={2}>
        <button> 50m Atış Poligonu Yeniden Başlat </button>
      </Grid>
      <Grid xs={2}>
        <button> Ortak Muharebe Odaları Yeniden Başlat </button>
      </Grid>
      <Grid xs={2}>
        <button> ÖKUN Odaları Yeniden Başlat </button>
      </Grid>
      <Grid xs={2}>
        <button> Atış Evi Yeniden Başlat </button>
      </Grid>
      <Grid xs={2}>
        <button> Hareketli Platformlar Yeniden Başlat </button>
      </Grid>
    </Grid>
  );
}

export default GridLayout;
