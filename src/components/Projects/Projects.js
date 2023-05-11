import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dapp_token_ico from "../../Assets/Projects/dapp-token-ico.png";
import web3uikit from "../../Assets/Projects/web3uikit.svg";
import Decentralized_eCom from "../../Assets/Projects/Decentralized_eCom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dapp_token_ico}
              isBlog={false}
              title="dapp-token-ico"
              description="Opinionated Dapp Starter Template. In this project, there are a 2 versions of contract: Box and BoxV2 which is improvement of Box."
              ghLink="https://github.com/shuqinng08/dapp-token-ico"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3uikit}
              isBlog={false}
              title="web3uikit"
              description="Beautiful and lightweight UI components for web3 developers. This UI library will speed up your dapp development no matter which chain you build on."
              ghLink="https://github.com/shuqinng08/web3uikit"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Decentralized_eCom}
              isBlog={false}
              title="Decentralized_eCom"
              description="ETHEReact is a full stack DApp; demonstrating e-commerce capabilities without any database powering the backend but the EVM standing tall!"
              ghLink="https://github.com/shuqinng08/Decentralized_eCom"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
