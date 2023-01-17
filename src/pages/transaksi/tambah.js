import React, { useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Tambah = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id_saldo: id,
    nominal: "",
    jenis: "",
    tanggal: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.nominal == "" || form.tanggal == "" || form.tanggal == "") {
      alert("Please input all field");
    } else {
      const body = {
        id_saldo: form.id_saldo,
        nominal: form.nominal,
        jenis: form.nama,
        tanggal: form.tanggal,
      };
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/transaksi`, body)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          return navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="m-5">
        <form>
          <div className="form-group m-1">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setForm({ ...form, nominal: e.target.value })}
              placeholder="Nominal"
            />
          </div>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setForm({ ...form, jenis: e.target.value })}
              placeholder="Jenis"
            />
          </div>
          <div className="form-group m-1">
            <input
              type="date"
              className="form-control"
              onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
              placeholder="Tanggal"
            />
          </div>

          <div className="form-group m-1">
            <button
              type="submit"
              className="btn btn-success"
              onClick={onSubmit}
            >
              Submit
            </button>
            <Button as={Link} to="/" variant="primary" className="m-3">
              KEMBALI
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Tambah;
