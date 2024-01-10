import React from "react";
import User from "../user/User";
import { Container, Col, Row } from "react-bootstrap";
import firebaseLogo from "../../images/firebase-ar21.svg";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import BeforeLogin from "../beforeLogin/BeforeLogin";

const Header = () => {
  const navigate = useNavigate();
  //isikeliam useri
  const [user] = useAuthState(auth);

  const handleLogoClick = () => {
    navigate("/");
  };

  //tikrinam ar user prisijunges ir tada rodom arba viena arba kita
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col>
            <img src={firebaseLogo} onClick={handleLogoClick} alt="firebase logo"/>
          </Col>
          <Col className="d-flex flex-column align-items-end justify-content-center">
              {user ? <User /> : <BeforeLogin />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
