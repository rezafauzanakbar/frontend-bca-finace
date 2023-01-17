import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getDataProduct();
  }, []);

  const [saldo, setSaldo] = useState([]);
  const getDataProduct = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/saldo`)
      .then((res) => {
        console.log(res.data);
        setSaldo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    await axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/saldo/${id}`)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = async () => {
    localStorage.clear();
    return navigate("/");
  };
  return (
    // <>{JSON.stringify(product)}</>
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <div className="row">
                <div className="col-auto">
                  <Button
                    as={Link}
                    to="/Tambah"
                    variant="success"
                    className="mb-3"
                  >
                    TAMBAH USER
                  </Button>
                </div>
              </div>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr className="text-center">
                    <th>NO.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {saldo.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.nama}</td>
                      <td>{data.saldo}</td>
                      <td className="text-center">
                        <Button
                          as={Link}
                          to={`/Transaksi/${data.id}`}
                          variant="primary"
                          size="sm"
                          className="me-2"
                        >
                          Transaksi
                        </Button>
                        <Button
                          onClick={() => deleteProduct(data.id)}
                          variant="danger"
                          size="sm"
                          className="me-2"
                        >
                          DELETE
                        </Button>
                        <Button
                          onClick={() => deleteProduct(data.id)}
                          variant="primary"
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
