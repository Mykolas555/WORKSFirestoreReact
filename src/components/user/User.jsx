import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../services/AuthServices";
import * as userServices from "../../services/UserServices";
import { Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const User = () => {

  const [userData, setUserData] = useState({});
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) 
    userServices.getUserData(user, setUserData);
  }, [user, loading]);
  console.log(userData)

  return (
        <Col className="d-flex flex-column align-items-end justify-content-center">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {userData.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>{userData.email}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/addWork">Pridėti darbą</Dropdown.Item>
                <Dropdown.Item as={Link} to="/works">Darbai</Dropdown.Item>
                <Dropdown.Item onClick={logout} as={Link} to="/">Atsijungti</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Col>
  );
};

export default User;
