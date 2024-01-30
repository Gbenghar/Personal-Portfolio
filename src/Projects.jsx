import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import colorSharp2 from "../src/assets/img/color-sharp2.png";
import { ProjectCard } from "../src/components/ProjectCard";
import BankApp from "../src/assets/img/Bank-App.png"
import FoodOrder from "../src/assets/img/Food_Order_App.png"
import Gpt3 from "../src/assets/img/GPT3.png"
import NetflixClone from "../src/assets/img/Netflix-Clone.png"
import Calculator from "../src/assets/img/Investment-Calculator.png"
import RestCountries from "../src/assets/img/Rest-countries.png"
import BankWebsite from "../src/assets/img/Simple Responsive_website.jpg"


const Projects = () => {
    const projects = [
        {
            title:"Bank App",
            description: "A modern Bank web app created with react that has the modern feel and responsiveness to different devices.",
            imgUrl: BankApp,
            link: "https://hoobank-app-five.vercel.app/",
        },
        {
            title:"Netflix Clone",
            description: "A cloned app of netflix with movies fetched from an API",
            imgUrl: NetflixClone,
            link:"https://netflix-clone-ten-psi.vercel.app/",
        },
        {
            title:"Food Order App",
            description: "An app built to get orders from customers as inputs with their peferable location for these meals to be delivered comfortably to them without stepping out.",
            imgUrl: FoodOrder,
            link:"https://food-order-app-dusky-tau.vercel.app/",
        },
        {
            title:"GPT3 AI",
            description: "A modern and responsive website with an appealing interface.",
            imgUrl:Gpt3,
            link:"https://gpt-3-website-six.vercel.app/",
        },
        {
            title:"Investment Calculator",
            description: "This app was built to calculate and derive the possible return that might be expexted on a certain invested sum over a particular period of time with the prevailing rate.",
            imgUrl:Calculator,
            link:"https://w8v49y-3000.csb.app/",
        },
        {
            title:"Rest Countries",
            description: "A responsive website optimized to provide details about countries which is fetched from a rest-country API and countries can also be searched based on different filters.",
            imgUrl: RestCountries,
            link:"https://rest-api-countries-wine.vercel.app/",
        },
        {
            title:"Bank Landing Page",
            description: "This is a simple landing page built with the use of SASS and Javascript to create a modern and responsive website.",
            imgUrl: BankWebsite
        }
    ]

    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Latest Projects</h2>
                    <p>Highlighted below are some of my latest projects which includes ReactJs Projects, NextJs Projects, and a host of otherss where I incorporated the use of wide range of tools and libraries in creating functional, modern, sleek and responsive website and webapps  </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>Forex.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Real Estate.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt="colorSharp2"/>
        </section>
      )
    }
export default Projects
