// import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row xs={1} md={2} className="g-4">
          {dataportfolio.map((data, i) => (
            <Col key={i}>
              <div className="project-card position-relative overflow-hidden rounded shadow-hover mb-3">
                {/* Project Image with Overlay Buttons */}
                <div className="position-relative">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-100 object-fit-cover"
                    style={{ height: "250px" }}
                  />
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-3">
                    <div className="d-flex gap-3">
                      {/* <a
                        href={data.link}
                        className="btn btn-outline-light btn-sm"
                      >
                        View Project
                      </a> */}
                      <a
                        href={data.github}
                        className="btn btn-outline-light btn-sm"
                        target="_blank"
                      >
                        <i className="fab fa-github me-1"></i> GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Title and Description Below Image */}
                <div className="project-info p-3">
                  <h5 className="fw-bold mb-2">{data.title}</h5>
                  <p className="text-muted mb-0">{data.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
