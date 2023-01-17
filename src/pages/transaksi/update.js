import React from "react";
//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
} from "react-bootstrap";

import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //state
  const [form, setForm] = useState({
    id: id,
    nominal: "",
    jenis: "",
    tanggal: "",
  });

  //function "updatePost"
  const updatePost = async (e) => {
    e.preventDefault();
    const body = {
      id: form.id,
      nominal: form.nominal,
      jenis: form.jenis,
      tanggal: form.tanggal,
    };
    //send data to server
    await axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/transaksi/${id}`, body)
      .then((response) => {
        alert(response.data.message);
        return navigate("/");
      })
      .catch((error) => {
        //assign validation on state
        console.log(error);
      });
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body>
                <Form onSubmit={(e) => updatePost(e)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nominal</Form.Label>
                    <Form.Control
                      type="number"
                      onChange={(e) =>
                        setForm({ ...form, nominal: e.target.value })
                      }
                      placeholder="nominal"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Jenis</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setForm({ ...form, jenis: e.target.value })
                      }
                      placeholder="jenis"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Tanggal</Form.Label>
                    <Form.Control
                      type="date"
                      onChange={(e) =>
                        setForm({ ...form, tanggal: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    UPDATE
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Update;
