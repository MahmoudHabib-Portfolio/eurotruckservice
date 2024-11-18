import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { footerLocation, whatsapp, footerLogo, facebook, instagram } from "../../assets";

const Footer = () => {

  const {t} = useTranslation();

  return (
    <footer className={Styles.footBlock}>
      {/* footer Block */}
      <div className={Styles.footBody}>
        {/* footer Logo */}
        <div>
          <Link to={"/"} aria-label="truck-service">
          <img src={footerLogo} width={200} height={40} alt="eurotruckservice-location" />
          </Link>
        </div>
        {/* footer_siteMap */}
        <div className={Styles.siteMap}>
            {/* Col1 */}
            <div className={Styles.footCol}>
              {/* colHead */}
              <div>
                  {t('FooterHeadOne')}
              </div>
              {/* colBody */}
              <div>
                <ul>
                  <li>
                    <Link to={"/"} aria-label="learn more about truck-service">
                      {t('NavListOne')}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} aria-label="truck-services we provide">
                      {t('NavListFive')}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} aria-label="best truck-service commission">
                      {t('NavListTwo')}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} aria-label="ask more about truck-services">
                      {t('NavListSix')}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} aria-label="we always reach to your site on time">
                      {t('NavListFour')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Col2 */}
            <div className={Styles.footCol}>
              {/* colHead */}
              <div>
                {t('FooterHeadTwo')}
              </div>
              {/* colBody */}
              <div>
                <ul>
                  <li>
                    +7 (708) 802 88 88
                  </li>
                  <li>
                    +7 (708) 803 88 88
                  </li>
                  <li>
                    +7 (708) 51 51 518
                  </li>
                  <li>
                    +7 (700) 51 51 518                 
                  </li>
                  <li>
                    <div className={Styles.whatts}>
                        <div>
                        <img src={whatsapp} width={18} height={18} alt="eurotruckservice-location" />
                        </div>
                        <div>
                        +7 (708) 802 88 88
                        </div>
                    </div>
                  </li>
                  <li>
                    <div className={Styles.whatts}>
                        <div>
                        <img src={footerLocation} width={12} height={18} alt="eurotruckservice-location" />
                        </div>
                        <div>
                        {t('LocationSubhead')}
                        </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          {/* Col3 */}
          <div className={Styles.footCol}>
              {/* colHead */}
              <div>
                {t('FooterHeadThree')}
              </div>
              {/* colBody */}
              <div>
                <ul>
                  <li>
                    <div className={Styles.whatts}>
                        <div>
                        <img src={facebook} width={24} height={24} alt="eurotruckservice-location" />
                        </div>
                        <div>
                        TRUSK_SERVICE_OFFICIAL
                        </div>
                    </div>
                  </li>
                  <li>
                    <div className={Styles.whatts}>
                        <div>
                        <img src={instagram} width={24} height={24} alt="eurotruckservice-location" />
                        </div>
                        <div>
                        TRUSK_SERVICE_OFFICIAL
                        </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      {/* CopyRight */}
      <div className={Styles.footCopy}>
          <p>Copyright © Truck Services 2022. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer