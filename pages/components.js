import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import AAgrantPost from "/pages-sections/humanitiesContent/GrantAA.jsx";
import VetGrantPost from "/pages-sections/humanitiesContent/GrantVets.jsx";
import ContactUtopForm from "../pages-sections/humanitiesContent/contactForm";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Utopos Humanities Hub"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Utopos Humanities Hub</h1>
                <h3 className={classes.subtitle}>
                Welcome to the Utopos Humanities Hub! This department is responsible for managing all Utopos approved humanitarian and charitable efforts from within the ecosystem that matches
                our values of altruism, helpfulness, giving back, providing equity and fairness. Below is a list of ongoing and past efforts. 
                For information on how you can help out, <a href="#contactForm" 
                onClick={(e) => {
                    e.preventDefault();
                    document
                    .getElementById("contactForm")
                    .scrollIntoView({ behavior: "smooth",});
                }}>click here.</a>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <AAgrantPost />
        <VetGrantPost />
        <ContactUtopForm />
      </div>
      <Footer />
    </div>
  );
}