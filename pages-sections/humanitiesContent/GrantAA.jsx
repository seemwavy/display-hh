import React from "react";
//import { Button } from "react-bootstrap";
import CarouselAA from "./CarouselAA.jsx";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/utop/blogstyle.js";

const useStyles = makeStyles(styles);

export default function AAgrantPost() {
    const classes = useStyles();
  return (
        <div className={classes.top}>
            <div className={classes.header}>
                <h1>Introducing the UTOPian Entrepreneur Fund: Pioneering the Path to Utopos' Future </h1>
                
            </div>
            <div className={classes.date}>
                <h4>08/25/2023</h4>
            </div>
            <div className={classes.imageContainer}>
                <img
                src="/img/utop/aa2.jpg"
                alt="utop"
                className={classes.image}
                />
            </div>
            <p className={classes.content}>
            We are thrilled to unveil the groundbreaking initiative, the UTOPian Entrepreneur Fund, poised to revolutionize the way we approach innovation and development across various sectors. Utopos, the visionary blockchain-powered city of the future, has taken a momentous stride by launching this fund aimed at empowering entrepreneurs, architects, farmers, scientists, tech developers, and other professionals integral to the realization of Utopos' vision of it's blockchain smart city. 
            The UTOPian Entrepreneur Fund stands as a testament to Utopos' commitment to nurturing groundbreaking ideas and fostering a thriving ecosystem that will shape the city's destiny.
            </p><br />
            <p className={classes.content}>
            Designed to provide financial support and resources to individuals and teams across diverse industries, the fund is a resounding call to action for those who dare to imagine and create. 
            Entrepreneurs will find a nurturing environment to transform their innovative concepts into reality, architects will have the opportunity to reshape urban landscapes with sustainable and aesthetic designs, farmers will cultivate advanced agricultural practices that will sustain the cities, scientists will unlock breakthroughs that elevate human progress, and tech developers will weave the digital fabric that connects the city's smart infrastructure. This fund encapsulates the very essence of Utopos.
            </p><br />
            <p className={classes.content}>
            The UTOPian Entrepreneur Fund beckons the dreamers, the creators, and the pioneers to step forward and be part of a journey that will shape the future of Utopos and, quite possibly, the world itself. 
            As applications open, the call is clear: Utopos awaits those who seek to turn their aspirations into reality, and in doing so, contribute to the emergence of a city that stands as a testament to human potential.
            </p>
            <p className={classes.content}>
                To apply, click <a 
                href="#contactForm"
                onClick={(e) => {
                    e.preventDefault();
                    document
                    .getElementById("contactForm")
                    .scrollIntoView({ behavior: "smooth",});
                }}>here</a>.
            </p>
        </div>
    );
}