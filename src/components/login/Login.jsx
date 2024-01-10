import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);
  // Dedam is inputu koks vartotojas nori prisijungt
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  // Reagavimas i inputo pasikeitimus
  const handleChange = (e) => {
    const value = e.target.value;
    setCredentials({
      ...credentials,
      [e.target.name]: value
    });
  };
  // Vartotojas spaudzia prisijungti, ziurim ar yra toks user db
  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(credentials.email, credentials.password);
      navigate("/works");
      alert(`Sveiki ${credentials.email}`)
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/works");
  }, [user, loading]);
  
  return (
    <Container className="mt-5">
      <Row>
        <Col xl={12} className="d-flex flex-column align-items-center justify-content-center">
          <h2>Login</h2>
        </Col>
        <Col xl={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
          <form className="form" onSubmit={submitHandle}>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Įveskite vartotojo el.paštą" id="email" 
              name="email" onChange={handleChange} value={credentials.email} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Įveskite vartotojo slaptažodį" id="password" 
              name="password" onChange={handleChange} value={credentials.password} />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <button className="btn btn-primary" type="submit">Prisijungti</button>
            </div>
            <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
              <p>Neturite paskyros? <Link to={"/register"}>Registruotis</Link></p>
              <p>Nepavyksta prisijungti? <Link to="/password-reset">Atstatyti slaptažodį</Link></p>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
