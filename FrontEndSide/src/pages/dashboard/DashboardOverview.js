
import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { AuthContext } from "../../ContextApi/AuthContext";
import { useState } from "react";
import '../css/Dashboard.css'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


export default () => {
const {authState}=useContext(AuthContext);
  console.log(authState);

const [response, setResponse] = useState([]);
const [search, setSearch] = useState('');
const [pathsearch, setPathsearch] = useState('');


console.log(pathsearch)


  const getData=async()=>{
    if(pathsearch=="Choose an option" || pathsearch.length<=1){
window.alert("please choose an option !!");
setResponse([{id:null,item:""}])
    }else{
    axios.get(`http://localhost:8080/${pathsearch}`).then((response)=>{

      setResponse(response.data);
      
    
    console.log(response.data)
    })
  }
  };


  return (
    
<div className="dashboard">
  <Container className="selectbar">
<label>Personnes</label>
    <select onClick={(e)=>setPathsearch(e.target.value)}className='my-3' class="form-select" aria-label="Default select example">
  {/* <option selected>Open this select menu</option> */}
  <option selected>Choose an option </option>

  <option  value="getAllInstancesPersonne">Tous les personnes</option>
  <option value="getCommentateur">Les Commentateurs </option>
  <option value="getArbitre">Les Arbitres</option>
  <option value="getJournaliste">Les Journalistes</option>
  <option value="getEntraineur">Les Entraineurs</option>
  <option value="getSpectateur">Les Spectateurs</option>
  <option value="getAthlete">Les Athletes</option>

</select>
<br/>
<label>Competitions</label>
<select onClick={(e)=>setPathsearch(e.target.value)}className='my-3' class="form-select" aria-label="Default select example">
<option selected>Choose an option </option>
  <option  value="getAllInstancesCompetition">Tous les competitions </option>
  <option value="getInternationale">Competitions internationales</option>
  <option value="getNationale">Competitions nationales</option>
</select>
<br/>

<label>Parties</label>
<select onClick={(e)=>setPathsearch(e.target.value)}className='my-3' class="form-select" aria-label="Default select example">
<option selected>Choose an option </option>
  <option value="getPartie">Les Parties </option>
</select>
<br/>
<label>Medias</label>
<select onClick={(e)=>setPathsearch(e.target.value)}className='my-3' class="form-select" aria-label="Default select example">
<option selected>Choose an option </option>
  <option value="getMedia">Tous les medias</option>
  <option value="getTelevision">Televisions </option>
  <option value="getwebsite">Websites</option>
 
</select>
<br/>


    <Button onClick={getData}>Fetch Data</Button>

  </Container>

      <Container className="fontcolor">
        <h1 className='text-center mt-4 color'>Searched Data</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search data'
            />
          </InputGroup>
        </Form>
        <Table  bordered hover>
          <thead>
            <tr className="fontcolor">
              <th>ID</th>
              <th>ITEM NAME</th>
           
            </tr>
          </thead>
          <tbody className="fontcolor">
            {response
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.item.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.item}</td>
                  
                </tr>
              ))}
          </tbody>
        </Table>

      </Container>
    </div>
   
  
  );
};
