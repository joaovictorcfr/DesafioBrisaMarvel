import "./index.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";

export function Comics() {
  const navigate = useNavigate();
  const comprarpage = (e) => {
    navigate("/comprar");
  };
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api
      .get("/comics")
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body">
      <h1>Quadrinhos digitais</h1>
      <div className="container">
        <div className="quadrinhos">
          <ul>
            {comics.map((comics) => {
              return (
                <li key={comics.id}>
                  <div className="capcomics">
                    <img
                      className="imgs"
                      width="200"
                      src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                      alt={`Foto do + ${comics.title}`}
                    />
                    <div className="name">{comics.title}</div>
                    <Link to={`/comprar?id=${comics.id}`} className="button" onClick={comprarpage}>Comprar</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
