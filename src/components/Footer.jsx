import { Container, Row, Col } from "react-bootstrap";

import MailChimpForm  from "../components/MailChimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="footerImg" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/gbenga-olatunji">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/Gbenghar">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://twitter.com/@realgbenghar">
                <img src={navIcon3} alt="twitter" />
              </a>
            </div>
            <p>Copyright &copy; 2024. Gbenga | All Rights Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
