import "./App.css";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import io from "socket.io-client";
import {
  egitim_alani_degerleri,
  egitmen_konsolu_degerleri,
  projeksiyon_degerleri,
  button_style,
  egitim_alani_button_texts,
  egitmen_brifing_button_texts,
} from "./Consts";

function ResponsiveTable() {
  const socket = io.connect("http://localhost:3001");

  const sendMessage = () => {
    socket.emit("send_message", { message: "Hello" });
  };

  const row2_value = <td> Bilgisayar Aktif </td>;
  const row3_value = <td> Ağ Aktif </td>;
  const row4_value = (
    <td>
      <button
        onClick={() => {
          sendMessage();
        }}
        style={button_style}
      >
        Aç
      </button>
    </td>
  );
  const row5_value = (
    <td>
      <button style={button_style}> Kapat </button>
    </td>
  );
  const row6_value = (
    <td>
      <button style={button_style}>Yeniden Başlat</button>
    </td>
  );

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
    // document.getElementById("poe").remove();
    // document.getElementById("poeHeader").remove();
  };

  return (
    <>
      <main className="table">
        <section className="tabs">
          <section
            onClick={() => toggleTab(1)}
            className={toggleState === 1 ? "tab_active" : "tab"}
          >
            <div>
              <h1>EĞİTİM ALANI BİLGİSAYARLARI</h1>
            </div>
          </section>
          <section
            onClick={() => toggleTab(2)}
            className={toggleState === 2 ? "tab_active" : "tab"}
          >
            <div>
              <h1>EĞİTMEN /BRİFİNG /TAKTİK PLAN BİLGİSAYARLARI</h1>
            </div>
          </section>
          <section
            onClick={() => toggleTab(3)}
            className={toggleState === 3 ? "tab_active" : "tab"}
          >
            <div>
              <h1>PROJEKSİYON KONTROLÜ</h1>
            </div>
          </section>
          <section
            id="poeHeader"
            onClick={() => toggleTab(4)}
            className={toggleState === 4 ? "tab_active" : "tab"}
          >
            <div>
              <h1>POE SWİTCH</h1>
            </div>
          </section>
        </section>

        <section
          className={toggleState === 1 ? "table__body__active" : "table__body"}
        >
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
                {egitim_alani_degerleri.map((val, key) => {
                  return <td key={key}>{val}</td>;
                })}
              </tr>
              <tr>
                {egitim_alani_degerleri.map(() => {
                  return row2_value;
                })}
              </tr>
              <tr>
                {egitim_alani_degerleri.map(() => {
                  return row3_value;
                })}
              </tr>
              <tr>
                {egitim_alani_degerleri.map(() => {
                  return row4_value;
                })}
              </tr>
              <tr>
                {egitim_alani_degerleri.map(() => {
                  return row5_value;
                })}
              </tr>
              <tr>
                {egitim_alani_degerleri.map(() => {
                  return row6_value;
                })}
              </tr>
            </tbody>
          </table>
        </section>
        <section
          className={toggleState === 2 ? "table__body__active" : "table__body"}
        >
          <table>
            <thead>
              <tr>
                <th colSpan={4}> EĞİTMEN KONSOLU </th>
                <th colSpan={3}> BRİFİNG ALANI </th>
                <th colSpan={1}> TAKTİK PLAN BİLGİSAYARLARI </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {egitmen_konsolu_degerleri.map((val, key) => {
                  return <td key={key}>{val}</td>;
                })}
              </tr>
              <tr>
                {egitmen_konsolu_degerleri.map(() => {
                  return row2_value;
                })}
              </tr>
              <tr>
                {egitmen_konsolu_degerleri.map(() => {
                  return row3_value;
                })}
              </tr>
              <tr>
                {egitmen_konsolu_degerleri.map(() => {
                  return row4_value;
                })}
              </tr>
              <tr>
                {egitmen_konsolu_degerleri.map(() => {
                  return row5_value;
                })}
              </tr>
              <tr>
                {egitmen_konsolu_degerleri.map(() => {
                  return row6_value;
                })}
              </tr>
            </tbody>
          </table>
        </section>
        <section
          className={toggleState === 3 ? "table__body__active" : "table__body"}
        >
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
                {egitim_alani_degerleri.map((val, key) => {
                  return <td key={key}>{val}</td>;
                })}
              </tr>
              <tr>
                {egitim_alani_degerleri.map((val, key) => {
                  return (
                    <td>
                      <button style={button_style}> Göster</button>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </section>
        <section
          className={toggleState === 4 ? "table__body__active" : "table__body"}
        >
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
                {Object.values(projeksiyon_degerleri).map((val, key) => {
                  return (
                    <>
                      <td key={key}>
                        <button
                          onClick={() => {
                            console.log(val);
                          }}
                          style={button_style}
                        >
                          {val.name}
                        </button>
                      </td>
                    </>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <Grid
        rowGap={2}
        columnGap={2.2}
        className={toggleState === 1 ? "grid__active" : "grid"}
        container
        spacing={2}
        columns={12}
      >
        {egitim_alani_button_texts.map((val, key) => {
          return (
            <Grid>
              <button
                style={toggleState !== 1 ? { display: "none" } : {}}
                className="grid__buttons"
                key={key}
              >
                {val}
              </button>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        rowGap={2}
        columnGap={2.2}
        className={toggleState === 2 ? "grid__active" : "grid"}
        container
        spacing={1}
        columns={6}
      >
        {egitmen_brifing_button_texts.map((val, key) => {
          return (
            <Grid paddingLeft={"300px"} md={1.5}>
              <button
                style={toggleState !== 2 ? { display: "none" } : {}}
                key={key}
              >
                {val}
              </button>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default ResponsiveTable;
