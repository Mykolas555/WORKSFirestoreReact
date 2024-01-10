import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices";
import { Container, Row, Col } from "react-bootstrap";

const Register = () => {
    const navigate = useNavigate();
    //saugom data is inputu
    const [formData, setFormData] = useState({
        name: "",
        email: "", 
        password: ""
    });
    //importuojam useri
    const [user, loading, error] = useAuthState(auth);
    //stebim formos pasikeitimus
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    //dedam i state ir siuciam i baze
    const submitHandle = (e) =>{
        e.preventDefault()
        console.log(formData)
        registerWithEmailAndPassword(formData.name, formData.email, formData.password)
        navigate('/')
        alert(`Sėkmingai užsiregistravote ${formData.name}`);
    }

    useEffect(() => {
        if(loading) return;
        if(user) navigate("/works")
    }, [user, loading])
    
    return(
        <Container>
            <Row>
                <Col xl={12} className="d-flex flex-column align-items-center justify-content-center">
                    <h2>Register</h2>
                </Col>
                <Col xl={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
                    <form className="form" onSubmit={submitHandle}>
                        <div className="mb-3">
                            <input type="text"className="form-control" placeholder="Įveskite vartotojo vardą" id="name" name="name" onChange={handleChange} value={formData.name}/>
                        </div>
                        <div className="mb-3">
                            <input type="email"className="form-control" placeholder="Įveskite savo el.paštą" id="email" name="email" onChange={handleChange} value={formData.email}/>
                        </div>
                        <div className="mb-3">
                            <input type="password"className="form-control" placeholder="Įveskite slaptažodį" id="password" name="password" onChange={handleChange} value={formData.password}/>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <button className="btn btn-primary" type="submit">Registruotis</button>
                        </div>
                        <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
                            <p>Turite paskyrą? <Link to={"/login"}>Prisijunkite</Link></p>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register