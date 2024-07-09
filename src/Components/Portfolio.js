import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, CardBody, Button, Fade } from "react-bootstrap";
import NavBar from "./Nav";

import img1 from "../Images/codeide.png";
import img2 from "../Images/aivoiceimg.png";
import img3 from "../Images/appsimage.png";
import img4 from "../Images/notes.png";
import img5 from "../Images/curriculumpic.png"

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const cardStyle = {
    transition: 'all 0.3s ease-in-out'
  };

  const buttonStyle = {
    background: "#FF7223",
    border: "none",
    transition: 'background-color 0.3s ease-in-out'
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? 'translateY(-5px)' : 'translateY(0)';
    e.currentTarget.style.boxShadow = enter ? '0 10px 20px rgba(0, 0, 0, 0.1)' : 'none';
  };

  const handleButtonHover = (e, enter) => {
    e.currentTarget.style.backgroundColor = enter ? '#FF5500' : '#FF7223';
  };

  return (
    <React.Fragment>
      <section
        id="portfolio"
        className="mt-4"
        style={{ background: "#FFEADE" }}
      >
        <Container>
          <Row className="justify-content-center gy-4">
            <Col xs={12}>
              <Fade in={open}>
                <Card className="rounded-5 card-animate mt-5" style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
                  <Row className="g-0">
                    <Col md={7}>
                      <CardBody>
                        <div className="p-3">
                          <Button
                            className="mt-2 rounded-pill"
                            style={buttonStyle}
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                          >
                            AI Mentor
                          </Button>
                          <h5 className="card-title mt-3 fw-bold mb-2">
                            Integrate IDE and Simulator
                          </h5>
                          <p className="card-text mb-3 text-muted">
                            Integrate the IDE and simulator into your workspace,
                            so you don't have to switch between applications while
                            learning. This seamless setup allows you to write,
                            test, and debug your code in a single environment,
                            enhancing your productivity and providing a more
                            efficient learning experience.
                          </p>
                        </div>
                      </CardBody>
                    </Col>
                    <Col md={4}>
                      <img
                        className="rounded-end img-fluid h-100 object-cover"
                        src={img1}
                        alt="Card"
                      />
                    </Col>
                  </Row>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card className="rounded-5 card-animate h-100" style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Personalization
                      </Button>
                      <h5 className="card-title mt-3 fw-bold mb-2">
                        Customise your AI Mentor
                      </h5>
                      <p className="card-text mb-3 text-muted">
                        Customize your AI mentor to tailor your learning
                        experience specifically to your unique needs and
                        preferences. Personalizing your mentorship enhances
                        engagement and ensures relevance throughout your learning
                        journey.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img2}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card className="rounded-5 card-animate h-100" style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Personalization
                      </Button>
                      <h5 className="card-title mt-3 fw-bold mb-2">
                        Personalized Curriculum
                      </h5>
                      <p className="card-text mb-3 text-muted">
                        Customize your AI mentor to tailor your learning
                        experience specifically to your unique needs and
                        preferences. Personalizing your mentorship enhances
                        engagement and ensures relevance throughout your learning
                        journey.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img5}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card className="rounded-5 card-animate h-100" style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Notepad
                      </Button>
                      <h5 className="card-title mt-3 fw-bold mb-2">
                        Take notes while learning
                      </h5>
                      <p className="card-text mb-3 text-muted">
                        This setup lets you jot down important points, ideas, and
                        questions within your space, eliminating the need to
                        switch tools. Keeping everything in one place helps you
                        maintain focus and streamline your learning.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img4}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card className="rounded-5 card-animate h-100" style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Notepad
                      </Button>
                      <h5 className="card-title mt-3 fw-bold mb-2">
                        Take notes while learning
                      </h5>
                      <p className="card-text mb-3 text-muted">
                        This setup lets you jot down important points, ideas, and
                        questions within your space, eliminating the need to
                        switch tools. Keeping everything in one place helps you
                        maintain focus and streamline your learning.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img4}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col xs={12}>
              <Fade in={open}>
                <Card className="rounded-5 card-animate mt-5 mb-4" style={cardStyle} onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)}>
                  <Row className="g-0">
                    <Col md={8}>
                      <CardBody>
                        <div className="p-3">
                          <Button
                            className="mt-2 rounded-pill"
                            style={buttonStyle}
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                          >
                            Integrate App
                          </Button>
                          <h5 className="card-title mt-3 fw-bold mb-2">
                            Integrate Your Personal Library into Your Space
                          </h5>
                          <p className="card-text mb-3 text-muted">
                            Connect your existing library of learning resources to
                            your Space. By centralizing all your study materials,
                            you can easily access and reference them without
                            interrupting your workflow. This integration
                            streamlines your learning process, making it more
                            efficient and organized.
                          </p>
                        </div>
                      </CardBody>
                    </Col>
                    <Col md={4}>
                      <img
                        className="rounded-end img-fluid h-100 object-cover"
                        src={img3}
                        alt="Card"
                      />
                    </Col>
                  </Row>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;