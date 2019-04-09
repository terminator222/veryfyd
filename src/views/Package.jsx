import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Package extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Health</h5>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <p>Basic Full Body Checkup<br></br>
                          10 Vitamins<br></br>
                          Sugar<br></br>
                          Protein<br></br>
                          Cholestrol<br></br>
                          1200/-
                        </p>
                      </div>
                    </Col>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <p>Advanced Full Body Checkup<br></br>
                          10 Vitamins<br></br>
                          Sugar<br></br>
                          Protein<br></br>
                          Cholestrol<br></br>
                          2000/-
                        </p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <hr></hr>
              <Card>
                <CardHeader>
                  <h5 className="title">Employement</h5>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        {/* <i className="tim-icons icon-alert-circle-exc" /> */}
                        <p>Current Employment Check<br></br>
                          100/-</p>
                      </div>
                    </Col>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <p>Three Employment Check<br></br>
                          500/-
                        </p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Package;
