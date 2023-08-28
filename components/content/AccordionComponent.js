import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { course_content } from "@/constants";
import React, { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { LuDisc } from "react-icons/lu";
import style from "./accordion.module.css";
import { roboto } from "@/font";

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={roboto.className}>
      {course_content.map(({ title, contents }, indx) => (
        <Accordion
          key={indx}
          sx={{
            boxShadow: "none",
            border: "1px solid #eee",
            marginBottom: "20px",
            transition: "all 0.5s linear",
            "&:hover": {
              border: "1px solid rgb(69, 125, 255)",
            },
            "&:active": {
              border: "1px solid rgb(69, 125, 255)",
            },
          }}
          // expanded={expanded === `panel${indx + 1}`}
          // onChange={handleChange(`panel${indx + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${indx + 1}a-content`}
            id={`panel${indx + 1}a-header`}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#333",
                transition: "all 0.5s linear",
                "&:hover": {
                  color: "rgb(69, 125, 255)",
                },
                "&:active": {
                  color: "rgb(69, 125, 255)",
                },
              }}
            >
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"div"}>
              {contents.map((el, i) => (
                <div key={i} className={style.accordion_content}>
                  <div className={style.left_portion}>
                    <div className={style.icon}>
                      <LuDisc
                        style={{ margin: 0, padding: 0, height: "fit-content" }}
                      ></LuDisc>
                    </div>
                    <p>{el}</p>
                  </div>
                  <div className={style.right_portion}>
                    <AiOutlineLock
                      style={{ margin: 0, padding: 0, height: "fit-content" }}
                    ></AiOutlineLock>
                  </div>
                </div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionComponent;
