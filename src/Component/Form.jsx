import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
const Inputform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
//   const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const submitHandler = (e) => {
    // dispatch()
    e.preventDefault();
  };
  return (
    <>
        <h1>SIGN IN</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">submit</Button>
        </Form>
        <Table  size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Name :</td> 
                        <td>{name} </td> 
                      </tr>
                      <tr>
                        <td>Email :</td> 
                        <td>{email}</td> 
                      </tr>
                      <tr>
                        <td>Password :</td> 
                        <td>{password}</td> 
                      </tr>
                      <tr>
                        <td>ConfirmPassword :</td>
                        <td>{confirmPassword}</td>
                      </tr>
                    </tbody>
                  </Table>
      {/* </FormContainer> */}
    </>
  );
};

export default Inputform;
