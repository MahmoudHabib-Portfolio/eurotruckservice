import { useTranslation } from "react-i18next";
import { onShowInstruct, onShowServices } from "../../functions/animate";
import Styles from "./style.module.scss";
import { useEffect, useRef } from "react";

const Services = () => {
    
    const getHeadRow = useRef(null);
    const getHead = useRef(null);
    /* const subHead = useRef(null); */
    const servicesRow = useRef(null);

    const {t} = useTranslation();

    useEffect(() => {
        const getServices = document.querySelectorAll('.service');
        onShowInstruct(getHeadRow.current, getHead.current);
        onShowServices(servicesRow.current, getServices);
    }, []);

  return (
    <div className={Styles.servBlock} ref={getHeadRow}>
        {/* main Head */}
        <div className={Styles.servHead}>
            <h2 ref={getHead}>
            {t('ServiceHead')}
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
            </p>
        </div>
        {/* Services */}
        <div className={Styles.multiServ} ref={servicesRow}>
            <div>
                {/* service One */}
                <div className={`${Styles.servDiv01} service`}>
                    <div className={Styles.servBody}>
                        <h3>{t('ServiceOneHead')}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                </div>
                {/* service Two */}
                <div className={`${Styles.servDiv02} service`}>
                <div className={Styles.servBody}>
                        <h3>{t('ServiceTwoHead')}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                </div>
            </div>
            <div>
                {/* service One */}
                <div className={`${Styles.servDiv03} service`}>
                <div className={Styles.servBody}>
                        <h3>{t('ServiceThreeHead')}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                </div>
                {/* service Two */}
                <div className={`${Styles.servDiv04} service`}>
                <div className={Styles.servBody}>
                        <h3>{t('ServiceFourHead')}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;