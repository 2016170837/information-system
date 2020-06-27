import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import {Input, Col, FormGroup, Label}from "reactstrap";

// core components

function Whalefront() {
  return (
    <>
      <div className="section section-examples"
      style={{
        backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "700px",
        color: "white"
      }}>
        <div className="space-100"></div>
        <Container className="text-center">
        <h3>Air Jordan 1 RETRO HIGH - Killer Whale(OG)</h3>
        <div className="space-50"></div>
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/범고래1.jpg")}
                ></img>
              </a>
              
              <h4>거래 유형 선택</h4>
              <p className="category">하나만 선택하시오</p>
              <FormGroup check>
                <Label check>
                  <Input defaultChecked type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  구매
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  판매
                </Label>
              </FormGroup>
              
            </div>
            <div className="col">
              <a href="examples/profile-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/범고래2.jpg")}
                ></img>
              </a>
              
            <h4>사이즈 선택하기</h4>
            <p className="category"></p>
            <center>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="5단위로 입력"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              </center>
            </div>
          </Row>
        </Container>
      </div>
      

      <div className="section section-examples"
      style={{
        backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "700px",
        color: "white"
      }}>
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/범고래1.jpg")}
                ></img>
              </a>
              
              
            </div>
            
          </Row>
          <Button
                className="btn-round"
                color="default"
                to="/landing-page"
                outline
                tag={Link}
              >
                내 가격 확인하기
              </Button>
        </Container>
        <div className="space-100"></div>
      </div>
    </>
  );
}

export default Whalefront;
