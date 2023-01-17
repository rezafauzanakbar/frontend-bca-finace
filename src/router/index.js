import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import swal from "sweetalert";
import Home from "../pages/home/home";
import Tambah from "../pages/saldo/tambah";
import Transaksi from "../pages/transaksi/transaksi";
import TambahTransaksi from "../pages/transaksi/tambah";
import UpdateTransaksi from "../pages/transaksi/update";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/transaksi/:id" element={<Transaksi />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/tambahtransaksi" element={<TambahTransaksi />} />
          <Route path="/update/:id" element={<UpdateTransaksi />} />
          {/* <Route
            path="/home"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          /> */}
          {/* <Route
            path="/Detail/:id"
            element={
              <Auth>
                <Detail />
              </Auth>
            }
          />
          <Route
            path="/Tambah"
            element={
              <Auth>
                <Tambah />
              </Auth>
            }
          />
          <Route
            path="/Update/:id"
            element={
              <Auth>
                <Update />
              </Auth>
            }
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
