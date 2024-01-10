import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, sendPaswordReset} from "../../services/AuthServices"
import { Container, Row, Col } from "react-bootstrap";

const Reset = () =>{

    const [email, setEmail] = useState("");

    const [user, loading, error] = useAuthState(auth)
    
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault();
        sendPaswordReset(email);
        navigate("/")
        alert('Operacija sekminga. Pasitikrinkite savo el. paštą');
    }

    return(
        <Container>
            <Row>
                <Col>
                <h2 className="mt-3 text-center">Slaptažodžio atstatymas</h2>
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <input onChange={(e)=>setEmail(e.target.value)} value={email}
                            type="email" id="email" name="email" required
                            className="form-control" placeholder="Jūsų el. paštas"/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">Siųsti</button>
                    </div>
                </form>
                </Col>
            </Row>
        </Container>
    )
}
export default Reset