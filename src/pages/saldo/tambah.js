import React, { useState } from "react";
import axios from "axios";
import { Link, navigate, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Tambah = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    saldo: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.nama == "" || form.saldo == "") {
      alert("Please input all field");
    } else {
      const body = {
        nama: form.nama,
        saldo: form.saldo,
      };
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/saldo`, body)
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
              type="text"
              className="form-control"
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              placeholder="Nama"
            />
          </div>
          <div className="form-group m-1">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setForm({ ...form, saldo: e.target.value })}
              placeholder="Saldo"
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
