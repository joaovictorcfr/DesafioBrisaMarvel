import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import "./layout.css";

export function Layout() {
  return (
    <div className="layoutPage">
      <div className="layoutMenu">
        <div className="icon">
          <MdSearch />
          <input type="text" placeholder="Buscar" />
        </div>
        <ul>
          <li>
            <Link to="/">Quadrinhos</Link>
          </li>
          <li>
            <Link to="/comprar">Comprar</Link>
          </li>
        </ul>
        <img
          className="imgMenu"
          src="http://www.cinetcetera.com.br/wp-content/uploads/2020/09/marvelcomics.jpg"
          alt=""
        />
      </div>
      <div className="layoutContent">
        <Outlet />
      </div>
    </div>
  );
}
