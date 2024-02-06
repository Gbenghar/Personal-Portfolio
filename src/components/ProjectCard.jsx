/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgurl" />

        <div className="proj-txtx">
          <h4>
            <span>{title} <a href={link} target="_blank"></a></span>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
