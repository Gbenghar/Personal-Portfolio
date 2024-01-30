import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a Junior Frontend Developer, I have gained valuable
                experience and skills in the use of various Javascript libraries
                and frameworks. I build smooth and interactive web applications
                as well as mobile applications (Android/IOS). I implement te use
                of complementing frameworks and libraries to build simple and
                complex applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="meterImg" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meterImg" />
                  <h5>Mobile App Development (Android/ IOS)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meterImg" />
                  <h5>Forex Trading</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meterImg" />
                  <h5>Realtor</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section>
  );
};

export default Skills;
