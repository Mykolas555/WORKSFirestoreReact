import { useEffect, useState } from "react";
import * as service from "../../services/TimesCrudServices";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "../../services/AuthServices"
import { Container, Row, Col } from "react-bootstrap";

const AddWork = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //vartotojau auth service
  const[user, loading, error] = useAuthState(auth)

  //surinkam info is inputu
  const [items, setItems] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    timeFrom: "",
    timeTo: "",
    uid: ""
  });

  //reaguoja i inputo pasikeitimus
  const handleChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };

  //uzpildom forma su duomenimis is duomenu baziu, kad galima butu ne viska koreguot nuo 0
  useEffect(() => {
    id && service.showById((item) => setItems(item), id);
  }, [id]);

  //jei upadatinam tai updatina, jei ne tai siuncia i duombaze
  const submitHandle = (event) => {
    event.preventDefault();
    if (id) {
      service.updateWork(id, items);
    } else {
      service.addWork({
        ...items,
      uid:user.uid
    });
    }
    navigate("/works");
  };

  console.log(user);

  return (
    <Container className="mt-3 d-flex justify-content-center">
      <Row>
        <Col>
          <div className="card" style={{ width: "40rem" }}>
            <div className="card-header">
              <h2>Pridėti darbą</h2>
            </div>
            <div className="card-body">
            <form className="form" onSubmit={submitHandle}>
              <div className="mb-3">
                <label htmlFor="date">Pasirinkti data</label>
                <input className="form-control" id="date" required
                  type="date" name="date"
                  onChange={handleChange} value={items.date}/>
              </div>
              <div className="mb-3">
                <select name="company" id="company" required className="form-control"
                  onChange={handleChange} value={items.company}>
                  <option value="kb">Kilobaitas</option>
                  <option value="it">IT sfera</option>
                  <option value="sn">Senukai</option>
                  <option value="tp">Topo Centras</option>
                </select>
              </div>
              <div className="mb-3">
                <select name="service" id="service" required className="form-control"
                  onChange={handleChange} value={items.service}>
                  <option value="dev">Development</option>
                  <option value="ux">UX design</option>
                  <option value="bug">Debug</option>
                  <option value="cf">Coffe break</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea name="description" id="description" required className="form-control" placeholder="Darbo aprašymas"
                  onChange={handleChange} value={items.description}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="from">Nuo</label>
                <input type="time" id="from" name="timeFrom" required
                  onChange={handleChange} value={items.timeFrom}/>
              </div>
              <div className="mb-3">
                <label htmlFor="to">Iki</label>
                <input type="time" id="to" name="timeTo" required
                  onChange={handleChange} value={items.timeTo}/>
              </div>
              <div className="mb-3">
                {id ? (
                  <button type="submit" className="btn btn-success">Atnaujinti</button>
                ) : (
                  <button type="submit" className="btn btn-success">Saugoti</button>
                )}
              </div>
            </form>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddWork;