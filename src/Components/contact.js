import React, { useState, Fragment } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  TabPane,
  Nav,
  CardBody,
  TabContent,
  Form,
} from "reactstrap";
import avatar1 from "../Images/selflearn1.png";
import avatar2 from "../Images/selflearn2.png";
import avatar3 from "../Images/selflearn3.png";
import avatar4 from "../Images/selflearn4.png";
import { NavItem, NavLink } from "react-bootstrap";
import classnames from "classnames";

const Contact = () => {
  const [animationNavTab, setAnimationNavTab] = useState("1");
  const animationNavToggle = (tab) => {
    if (animationNavTab !== tab) {
      setAnimationNavTab(tab);
    }
  };

  return (
    <Fragment>
      <section className="section" id="contact">
        <Container className="mt-5 mb-5">
          <Row className="gy-4">
            <Col lg={5}>
              <div>
                <div className="">
                  <h2 className="fs-13 mt-4 mb-0 text-bold ">
                  Join other self-learners to stay informed and be the first to experience CurateLearn.
                  </h2>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div>
                <Form>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-4">
                        <label htmlFor="name" className="form-label fs-13">
                          Name
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control bg-light border-light"
                          placeholder="Enter name*"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-4">
                        <label htmlFor="email" className="form-label fs-13">
                          Email
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control bg-light border-light"
                          placeholder="Enter email*"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}   className="text-end rounded-pill">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn btn-primary"
                        value="Join waitlist"
                        style={{ background: "#FF7223", border: "none" }}
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact;
