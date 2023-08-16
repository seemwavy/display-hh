import React from "react";
//import { Button } from "react-bootstrap";
import CarouselVets from "./CarouselVets";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/utop/blogstyle.js";

const useStyles = makeStyles(styles);

export default function VetGrantPost() {
    const classes = useStyles();
  return (
        <div className={classes.top}>
            <div className={classes.header}>
                <h1>Utopos Homeless Veterans Helping Hand</h1>
                
            </div>
            <div className={classes.date}>
                <h4>09/25/2023</h4>
            </div>
            <div className={classes.imageContainer}>
                <img
                src="/img/utop/vet.jpg"
                alt="utop"
                className={classes.image}
                />
            </div>
            <p className={classes.content}>
                The Utopos team is proud to announce the launch of the first initiative undertaken by the Humanities Hub. A grant for the United States' homeless veterans.
                This initiative aligns with Utopos' value of giving back, specifically to men and women who have selflessly put their lives on the line for their country. 
                Unfortunately, many brave veterans find themselves without proper care and support after their service.
            </p><br />
            <p className={classes.content}>
                Shockingly, 
                <a href="https://news.va.gov/press-room/va-announces-goal-to-house-38000-veterans-experiencing-homelessness-in-2023/#:~:text=VA%20announces%20goal%20to%20house%2038%2C000%2B%20Veterans%20experiencing%20homelessness%20in%202023,-For%20immediate%20release&text=WASHINGTON%20%E2%80%94%20Today%2C%20the%20Department%20of,experiencing%20homelessness%20into%20permanent%20housing.">
                    over 38,000 military veterans are homeless
                </a> , 
                potentially grappling with PTSD, substance abuse, depression, and other service-related disabilities. 
                These challenges not only make it harder for them to lead normal lives, but also hinder their ability to learn and participate in emerging technologies that are changing our lives every day. 
                The Utopos Helping Hand plans to assist veterans not only with funds via airdrops of tokens, but also with free training on how to utilize emerging technologies like Web3, ensuring they are not left behind in the revolutionary advancements it brings.
            </p>
        </div>
    );
}