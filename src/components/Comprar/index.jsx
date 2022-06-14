import { useJsApiLoader } from "@react-google-maps/api";
import { GoogleMap } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";

export function Comprar() {
  const navigate = useNavigate();
  const comicspage = (e) => {
    navigate("/");
  };

  const params = useLocation();

  const [id, setId] = useState(null);

  const position = {
    lat: -6.067176,
    lng: -38.215642,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(position);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (params.search) {
      const query = new URLSearchParams(params.sarch);
      setId(query.get("id"));
    }
  }, []);

  return (
    <div className="bodymaps">
      <h1>Comprar Quadrinho</h1>
      <div className="container">
        <div className="modal">
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/6/f0/629e1d27f36e6/clean.jpg"
            alt="imagem"
          />
          <div className="textos">
            <h2>Informações do quadrinho</h2> <br />
            <p>Nome: Jane Foster e o Poderoso Thor (2022)</p>
            <br />
            <p>Escritor: Torunn Gronbekk</p>
            <br />
            <p>
              Descrição: Quando Mjolnir entra pela janela do apartamento de Jane
              Foster, ela teme que o pior tenha acontecido com Thor. Enquanto os
              maiores inimigos de Asgard - incluindo Hela, Ulik, o Troll e
              Feiticeira - montam um ataque ao Reino Dourado, Jane deve
              encontrar Thor e salvar Asgard - mesmo que isso signifique que ela
              deva mais uma vez arriscar sua vida para se tornar a própria Thor!
            </p>
          </div>
        </div>
        <div className="mapa">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ height: "50%", width: "100%" }}
              center={position}
              zoom={10}
              //onLoad={onLoad}
              //onUnmount={onUnmount}
            ></GoogleMap>
          ) : (
            <>Erro: Não foi possivel carregar o mapa.</>
          )}
          <div className="inputs">
            <p>
              Para realizar a compra do quadrinho selecione a localização que
              deseja receber o seu produto.
            </p>
            <input type="text" placeholder="Nome do quadrinho" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Numero" />
            <input type="text" placeholder="Celular" />
          </div>
          <div className="botoes">
            <button onClick={comicspage}>Comprar</button>
            <button onClick={comicspage}>Voltar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
