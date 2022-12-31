import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload,faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "./css/Presentation.css"
import { Routes } from "../routes";

import Navbars from "../components-travel/Navbar";

import './css/style.css'
import football from './assets/Football_Player.png'

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to="/" className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

              
          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };
  console.log("presentation")

  return (
    <>
    <div className="fullwidth">


       
        <div   >
      
           
      <Navbars />


<div id="container">
        <div id="logo">SPORTS</div>


        <div id="image">
            <img src={football} alt="football player png"/>
        </div>

        <div id="content">
            <h2>SPORTS</h2>
        
            <Button as={HashLink} to={Routes.Signup.path} variant="primary" className="ls-3 loginbton"><FontAwesomeIcon icon={faSignInAlt} className="me-1" /> JOIN NOW</Button>
            <h4>APP</h4>
            
        </div>

 
    </div>
         
        </div>
      
    
     
      </div>
    </>
  );
};
