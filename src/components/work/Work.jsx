import { Link } from "react-router-dom";
import * as service from "../../services/TimesCrudServices";
import { useNavigate } from "react-router-dom";

const Work = (props) => {

  const navigate = useNavigate();
  //paspaudis trinam irasa pagal iraso id
  const deleteHandler = () => {
    service.deleteWork(props.id);
    navigate("/works");
  };

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.company}</td>
      <td>{props.service}</td>
      <td>{props.description}</td>
      <td>{props.timeFrom}</td>
      <td>{props.timeTo}</td>
      <td><Link className="btn btn-success" to={`/update-work/${props.id}`}>Atnaujinti</Link></td>
      <td><a className="btn btn-danger" href="#" onClick={deleteHandler}>Šalinti</a></td>
    </tr>
  );
};
export default Work;