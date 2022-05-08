import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aeroclub from "../../Assets/aeroclubMendoza.jpg";
import comingSoon from "../../Assets/comingSoon.jpg";
import checkList from "../../Assets/check List.jpg";
import cocktail from "../../Assets/cocktail.jpg";
import quiz from "../../Assets/quiz.jpg";
import redux from "../../Assets/redux.jpg";
import instaAero from "../../Assets/instaAero.jpg";
import excel from "../../Assets/excel.jpg";
import nature from "../../Assets/nature.png";
import fly from "../../Assets/fly.jpg";
import sidebarAndModal from "../../Assets/sidebarAndModal.jpg";


function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <br/>
        <br/>
        <h3 style={{ color: "white" }}>
          PROGRAMMING PROJECTS 
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aeroclub}
              isBlog={false}
              title="Aeroclub Mendoza"
              description="Web page of a flying club, where you can calculate the cost of the course as a pilot in addition to having information about all the activities you can do."
              link="https://www.aeroclubmendoza.com.ar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={checkList}
              isBlog={false}
              title="My Check List"
              description="Check list for daily use. You can  add and delete items, modify them and put a mark when they are done"
              link="https://tincholobos.github.io/My-check-List/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sidebarAndModal}
              isBlog={false}
              title="Sidebar & Modal"
              description="Sidebar and Modal build with useContext hook."
              link="https://tincholobos.github.io/sidebarAndModal/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cocktail}
              isBlog={false}
              title="Cocktails API"
              description="Search your favourite cocktail and check all the ingredients you need to do it."
              link="https://tincholobos.github.io/cocktailAPI/"
            />
          </Col>
              
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Game API"
              description="Question game where you can choose the amount of questions and the category that you  would like to play"
              link="https://tincholobos.github.io/quiz/"
            />
          </Col>
              
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redux}
              isBlog={false}
              title="Cart "
              description="Simple cart build with Redux library"
              link="https://tincholobos.github.io/reduxcart/"
            />
          </Col>
          <br/>
        <br/>
        <h3 style={{ color: "white" }}>

          MARKETING PROJECTS
        </h3>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaAero}
              isBlog={true}
              title="Instagram Aeroclub Mendoza"
              description="Instagram of Aeroclub Mendoza,the eldest flying school of all Argentina "
              link="https://www.instagram.com/aeromendoza/?hl=es-la"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excel}
              isBlog={true}
              title="Excel DataBase for AirClub"
              description="Data base  build in Google Sheets (Excel) with all the memberships of the Air club. Here you manage payments, add members, check flights,  check list of airplanes maintenance and much more"
              link="https://docs.google.com/spreadsheets/d/1LEyqwa0kDuojFOFEb6U-2a_myWc2OoR_Rai5NubX8To/edit?usp=sharing"
            />
          </Col>

          
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fly}
              isBlog={true}
              title="Fly Excursion Advertising"
              description="Video to promote paragliding flight of FlyExcursion company"
              link="https://youtu.be/NZCjh_zSlsw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nature}
              isBlog={true}
              title="Mountain Trip Record"
              description="Video Recorded in Portillo Argentino, Mendoza with the use of a  Gimbal and edited in Davinci Resolve"
              link="https://youtu.be/ptG657mnXo4"
            />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
