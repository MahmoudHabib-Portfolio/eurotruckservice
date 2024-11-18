import Styles from "./style.module.scss";
import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { fadeButton, subHead, wordFlip } from "../../functions/animate";
import { useTranslation } from "react-i18next";
import { DeliveryVehicles } from "../../assets";

const TruckService = () => {

  const mainHead = useRef(null);
  const subbHead = useRef(null);
  const getButton = useRef(null);
  const {t} = useTranslation();
  useEffect(() => {

    wordFlip(mainHead.current);
    subHead(subbHead.current);
    fadeButton(getButton.current);

  }, []);

  return (
    <div className={Styles.truckServ} style={{backgroundImage:`url(${DeliveryVehicles})`}}>
      <div className={Styles.breadCrumb}>
          <div ref={mainHead}>
            {t('SectionOneHead')}
          </div>
          <div ref={subbHead}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          </div>
          <div ref={getButton}>
          <Button
          className={Styles.Btn}
          sx={{
            color:"#fff",
            textTransform:"none",
            letterSpacing:"1px",
            backgroundColor:"#4762FF",
            fontSize:"14px",
            fontWeight:"700",
            padding:"0.5em 2em",
            ":hover":{
              backgroundColor:"#4762FF"
            }
          }}
          aria-label="Euro-truck do more than a service"
          >
            {t('SectionOneButton')}
          </Button>
          </div>
      </div>
    </div>
  )
}

export default TruckService;