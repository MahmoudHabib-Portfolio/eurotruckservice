import Styles from "./style.module.scss";
import { useEffect, useRef } from "react";
import { onShowFQS } from "../../functions/animate";
import { useTranslation } from "react-i18next";
import { DAF, Scania, Volvo, peccypic, RenaultVector } from "../../assets";

const Brands = () => {

    const fqsRow = useRef(null);
    const fqsHead = useRef(null);

    const {t} = useTranslation();
    /* const line = useRef(null); */

    useEffect(() => {
        const brands = document.querySelectorAll('.brands');
        const lines = document.querySelectorAll('.lines')
        onShowFQS(fqsRow.current, fqsHead.current, brands, lines);
    }, []);

  return (
    <div className={Styles.brandBlock} ref={fqsRow}>
        <div>
            <section>
                <h2 ref={fqsHead}>
                {t('BrandsHead')}
                </h2>
                <p className="lines">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                </p>
                <p className="lines">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                </p>
                <p className="lines">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                </p>
            </section>
        </div>
        {/* Brands */}
        <div className={Styles.brandCollection}>
            <div>
                <div className="brands">
                    <img src={Scania} width={176} height={102} alt="Scania" />
                </div>
                <div className="brands">
                <img src={Volvo} width={129} height={127} alt="Volvo" />
                </div>
            </div>
            <div className="brands">
            <img src={peccypic} width={131} height={74} alt="MAN" />
            </div>
            <div>
            <div className="brands">
            <img src={DAF} width={176} height={48} alt="DAF" />
            </div>
            <div className="brands">
            <img src={RenaultVector} width={141} height={161} alt="Renault" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Brands;