import Styles from "./style.module.scss";
import TruckMap from "../Map";
import { useEffect, useRef } from "react";
import { onShowLocation } from "../../functions/animate";
import { useTranslation } from "react-i18next";

const SiteLocation = () => {

    const lockCont = useRef(null);
    const lockHead = useRef(null);
    const {t} = useTranslation();
    useEffect(() => {
        const lockLines = document.querySelectorAll(".lines");
        onShowLocation(lockCont.current, lockHead.current, lockLines);
    }, []);

  return (
    <div className={Styles.siteContainer} ref={lockCont}>
        <div>
            <h2 className={Styles.textHead} ref={lockHead}>{t('MapLocationHead')}</h2>
            <p className="lines">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
            </p>
            <p className="lines">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
            </p>
            <p className="lines">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
            </p>
        </div>
        <div>
            <TruckMap />
        </div>
    </div>
  )
}

export default SiteLocation;