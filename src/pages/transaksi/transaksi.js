import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Transaksi = () => {
  const { id } = useParams();

  useEffect(() => {
    getDetailProduct();
  }, []);

  const [detail, setDetail] = useState([]);
  const getDetailProduct = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/transaksi/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    await axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/transaksi/${id}`)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body>
                <Button
                  as={Link}
                  to={`/tambahtransaksi`}
                  variant="primary"
                  size="sm"
                  className="me-2"
                >
                  TAMBAH
                </Button>
                <Table striped bordered hover className="mb-1">
                  <thead>
                    <tr className="text-center">
                      <th>Nominal</th>
                      <th>Jenis</th>
                      <th>Tanggal</th>
                      <th>Nama</th>
                      <th>AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {detail.map((data, index) => (
                      <tr key={data.id_saldo}>
                        <td>{data.nominal}</td>
                        <td>{data.jenis}</td>
                        <td>{data.tanggal}</td>
                        <td>{data.nama}</td>
                        <td className="text-center">
                          <Button
                            onClick={() => deleteProduct(data.id)}
                            variant="danger"
                            size="sm"
                            className="me-2"
                          >
                            DELETE
                          </Button>
                          <Button
                            as={Link}
                            to={`/update/${data.id}`}
                            variant="secondary"
                            size="sm"
                            className="me-2"
                          >
                            UPDATE
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button as={Link} to="/" variant="primary" className="m-3">
                  KEMBALI
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Transaksi;
