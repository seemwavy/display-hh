import React, { useState, useEffect } from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function CarouselVets() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    interval: 4000,
    animation: "fade"
   
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/img/utop/vet.jpg"
                    alt="First slide"
                    className="slick-image"
                    width={800}
                    height={400}
                  />
                </div>
                <div>
                  <img
                    src="/img/utop/vet2.jpg"
                    alt="Second slide"
                    className="slick-image"
                    width={800}
                    height={400}
                  />
                </div>
                <div>
                  <img
                    src="/img/utop/vet3.jpg"
                    alt="Third slide"
                    className="slick-image"
                    width={800}
                    height={400}
                  />
                </div>
                <div>
                  <img
                    src="/img/utop/vet4.jpg"
                    alt="Fourth slide"
                    className="slick-image"
                    width={800}
                    height={400}
                  />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}