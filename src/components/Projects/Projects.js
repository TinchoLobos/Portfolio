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
import sidebarAndModal from "../../Assets/sidebarAndModal.jpg";


function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my projects
        </p>
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
              link="https://tincholobos.github.io/redux/"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Coming soon"
              description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Coming soon"
              description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Coming soon"
              description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
