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
} from "reactstrap";
import avatar1 from "../Images/selflearn1.png";
import avatar2 from "../Images/selflearn2.png";
import avatar3 from "../Images/selflearn3.png";
import avatar4 from "../Images/selflearn4.png";
import { NavItem, NavLink } from "react-bootstrap";
import classnames from "classnames";

const Services = () => {
  const [animationNavTab, setAnimationNavTab] = useState("1");
  const animationNavToggle = (tab) => {
    if (animationNavTab !== tab) {
      setAnimationNavTab(tab);
    }
  };

  return (
    <Fragment>
      <section id="services" style={{ background: "#FFFFFF" }}>
        <Container>
          <Row>
            <Col className="col-12 mb-5">
              <div className="justify-content-between d-flex align-items-center mt-3 mb-4"></div>
              <Row className="justify-content-center mt-3">
                <Col lg={8}>
                  <div className="text-center pt-5 text-dark mb-5">
                    <h1 className="fw-bold">Making Self-Learning Easy</h1>
                    <p className="mb-4 text-muted ff-secondary">
                      Empower Your Self-Learning Journey with a Wealth of
                      Resources and Personalized Tools. Making Self-Learning
                      Easy.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col xxl={11}>
                  <div className="nav-container">
                    <Nav pills className="nav nav-pills animation-nav nav-justified gap-2 mb-3">
                      {["Curate Learning Path", "Learning Library", "AI Mentor", "Integrated IDE"].map((text, index) => (
                        <NavItem className="nav-item" key={index}>
                          <NavLink
                            className={classnames({
                              active: animationNavTab === (index + 1).toString(),
                              "nav-link": true
                            })}
                            onClick={() => {
                              animationNavToggle((index + 1).toString());
                            }}
                            style={{
                              cursor: "pointer",
                              borderRadius: "50px",
                              backgroundColor: animationNavTab === (index + 1).toString() ? "#FF7223" : "transparent",
                              color: animationNavTab === (index + 1).toString() ? "white" : "#333333",
                              padding: "10px 20px",
                              transition: "all 0.3s ease",
                              border: animationNavTab === (index + 1).toString() ? "none" : "1px solid #333333",
                            }}
                          >
                            {text}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </div>

                  <TabContent activeTab={animationNavTab} className="text-muted">
                    <TabPane tabId="1" id="animation-home">
                      <Col className="col-xxl col-12">
                        <Card className="h-100 rounded-5">
                          <CardBody>
                            <h4 className="card-title w- mb-0">
                              01 Create your Learning Space on any topic
                            </h4>
                          </CardBody>
                          <img className="img-fluid" src={avatar1} alt="Card cap" />
                        </Card>
                      </Col>
                    </TabPane>

                    <TabPane tabId="2" id="animation-profile">
                      <Col className="col-xxl col-12">
                        <Card className="h-100 rounded-5">
                          <CardBody>
                            <h4 className="card-title w- mb-0">
                              02 A Library of Videos, Image and PDF files would be curated for you
                            </h4>
                          </CardBody>
                          <img className="img-fluid" src={avatar2} alt="Card cap" />
                        </Card>
                      </Col>
                    </TabPane>

                    <TabPane tabId="3" id="animation-messages">
                      <Col className="col-xxl col-12">
                        <Card className="h-100 rounded-5">
                          <CardBody>
                            <h4 className="card-title w- mb-0">
                              03 Create learning space on any topic you want
                            </h4>
                          </CardBody>
                          <img className="img-fluid" src={avatar3} alt="Card cap" />
                        </Card>
                      </Col>
                    </TabPane>

                    <TabPane tabId="4" id="animation-settings">
                      <Col className="col-xxl col-12">
                        <Card className="h-100 rounded-5">
                          <CardBody>
                            <h4 className="card-title w- mb-0">
                              04 Create learning space on any topic you want
                            </h4>
                          </CardBody>
                          <img className="img-fluid" src={avatar4} alt="Card cap" />
                        </Card>
                      </Col>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        .nav-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .nav-container .nav-item {
          flex: 1 1 auto;
          min-width: 150px;
          margin-bottom: 10px;
        }

        .nav-container .nav-link {
          width: 100%;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 768px) {
          .nav-container .nav-item {
            flex-basis: calc(50% - 5px);
            min-width: 0;
          }
        }

        @media (max-width: 480px) {
          .nav-container .nav-item {
            flex-basis: 100%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Services;