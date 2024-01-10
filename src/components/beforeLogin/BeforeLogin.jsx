import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const BeforeLogin = () => {

    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate("/login");
      };
    
      const handleRegisterClick = () => {
        navigate("/register");
      };
    
    return(
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic"> Vartotojo Zona</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLoginClick}>Prisijungti</Dropdown.Item>
            <Dropdown.Item onClick={handleRegisterClick}>Registruotis</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    )
}

export default BeforeLogin