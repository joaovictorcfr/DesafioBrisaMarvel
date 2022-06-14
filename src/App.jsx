import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/layout";
import { ComicsPage } from "./pages/Comics";
import { ComprarPage } from "./pages/Comprar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ComicsPage />} />
          <Route path="/comprar" element={<ComprarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
