import React, { useState, useCallback } from "react";
import { savePerson } from "../../api";
import { Link } from "react-router-dom";
import listStore from "../../store/list";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export const AddContainer = props => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState(false);
  const [msg,setMsg] = useState('')


  const onSave = useCallback(async () => {
    try {
      await savePerson(name, phone);
      setMsg("Save Success!")
      setAlert(true);
      listStore.clearList();
      setTimeout(()=> props.history.replace("/"),1000)
    } catch (err) {
      setMsg("Something wrong with your input, please check your phone and username")
      setAlert(true);
      setTimeout(() => setAlert(false), 2500);
    }
  }, [name, phone]);
  return (
    <Container>
      {alert && (
        <Alert variant={msg[1] === 'a'?'success':'danger'}>
          {msg}
        </Alert>
      )}
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter username"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="password"
            placeholder="Pure phone without area code"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Row>
        <Col lg={8} md={8} sm={10}>
          <Link onClick={onSave}>
            <Button variant="success">Save</Button>
          </Link>
          <Link to="/">
            <Button typvariante="warning">Back</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
