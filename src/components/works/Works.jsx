import WorksTable from "../worksTable/WorksTable";
import { useState, useEffect } from "react";
import * as service from "../../services/TimesCrudServices"
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "../../services/AuthServices"
import { Container } from "react-bootstrap";

const Works = () => {

  const [works, setWorks] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  //grazinam data is db ir susidedam i state
  useEffect(() => {
    if(loading) return;
    if(user){
      service.getAllWorks(works=>
        setWorks(works), user)
    }
  }, [user, loading])  

  return (
    <Container className="mt-4">
      <h2>Darbai</h2>
      <WorksTable works={works}></WorksTable>
    </Container>
      
  );
};
export default Works;