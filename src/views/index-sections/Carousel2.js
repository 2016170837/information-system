import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  NavItem,
  NavLink
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/백보드1.jpg"),
    altText: "Price:Unfixed",
    caption: "Price:Unfixed"
  },
  {
    src: require("assets/img/백보드2.png"),
    altText: "Released in 2017-05-23",
    caption: "Released in 2017-05-23"
  },
  {
    src: require("assets/img/백보드3.png"),
    altText: "The OG",
    caption: "The OG"
  }
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel"
      style={{
        backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "700px",
        color: "white"
      }}>
        <Container>
          <center>
          <div className="title" >
            <h3>Air Jordan 1 RETRO HIGH - Back Board(OG)</h3>
          </div>
          </center>
          <Row className="justify-content-center">
          <Col lg="7" md="14">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
              <center>
              <NavItem>
                <NavLink
                  href="http://localhost:3000/back"
                  target="_blank"
                >
                    <i className="now-ui-icons shopping_cart-simple">&nbsp;&nbsp;</i>
                  
                  <i className="now-ui-icons shopping_credit-card">&nbsp;&nbsp;</i>
                  
                  <i className="now-ui-icons shopping_box"></i>
                  <h5>거래하기</h5>
                </NavLink>
              </NavItem>
              </center>
            </Col>
          
          </Row>
          
        </Container>
        
      </div>
    </>
  );
}

export default CarouselSection;
