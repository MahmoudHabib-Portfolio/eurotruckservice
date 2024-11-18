import Styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { IoPauseOutline } from "react-icons/io5";
import { useState } from "react";

const Language = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  }

  const [enColor, setEnColor] = useState("#4762FF");
  const [russColor, setRussColor] = useState("#333");

  const SelectEn = () => {
    setEnColor("#4762FF");
    setRussColor("#333");
    changeLanguage('en');
  }

  const SelectRuss = () => {
    setEnColor("#333");
    setRussColor("#4762FF");
    changeLanguage('russ');
  }

  return (
    <div className={Styles.LangCont}>
        <div className={Styles.lang} style={{color:enColor}} onClick={SelectEn}>En</div>
        <div>
        <IoPauseOutline style={{fontSize:"24px"}}/>
        </div>
        <div className={Styles.lang} style={{color: russColor}} onClick={SelectRuss}>Russ</div>
    </div>
  )
}

export default Language;