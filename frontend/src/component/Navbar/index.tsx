import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showDrawer } from "../../ReduxStore/DrawerSlice";
import { lineLeave, lineOver } from "../../functions/animate";
import { useTranslation } from "react-i18next";
import { lazy, useRef } from "react";
import { pinLocation, alarm, phone, headerLogo } from "../../assets";
const Language = lazy(() => import("../LanguageSelector"));

const Navebar = () => {

    const dispatch = useDispatch();

    const elem1 = useRef(null);
    const elem2 = useRef(null);
    const elem3 = useRef(null);
    const elem4 = useRef(null);

    const showLineOver = (ref:any) => {
      lineOver(ref.current);
    }

    const remvLineOver = (ref:any) => {
      lineLeave(ref.current);
    }

    const { t } = useTranslation();

  return (
    <header>
      <div className={Styles.topHeader}>
          <div className={Styles.localSite}>
            {/* siteLocation */}
            <div>
              <div>
               <img src={pinLocation} width={12} height={18} alt="eurotruckservice-location" />
              </div>
              <div className={Styles.locSite}>
              <div>
                {t('LocationHead')}
              </div>
              <div>
                {t('LocationSubhead')}
              </div>
              </div>
            </div>
            {/* workingHours */}
            <div>
            <div>
            <img src={alarm} width={18} height={18} alt="eurotruckservice-location" />
              </div>
              <div className={Styles.locSite}>
              <div>
                {t('WorkingHoursHead')}
              </div>
              <div>
                {t('WorkingHoursSubHead')}
              </div>
              </div>
            </div>
          </div>
          <div className={Styles.phoneSite}>
            {/* Phone */}
            <div>
              <div>
              <img src={phone} width={19} height={19} alt="eurotruckservice-location" />
              </div>
              <div className={Styles.locSite}>
              <div>
              +7 (708) 51 51 518
              </div>
              <div>
              +7 (700) 51 51 518
              </div>
              </div>
            </div>
          </div>
      </div>
      <nav className={Styles.mainNav}>
        {/* Logo */}
        <div className={Styles.maniLogo}>
          <Link to={"/"} aria-label="truck-service">
          <img src={headerLogo} width={207} height={41} alt="eurotruckservice-location" />
          </Link>
        </div>
        {/* NavLink */}
        <div className={Styles.navLink}>
          <ul>
            <li>
              <Link to={"/"} onMouseEnter={() => showLineOver(elem1)} onMouseLeave={() => remvLineOver(elem1)} aria-label="learn more about truck-service">
              <div ref={elem1} className={Styles.overLine}></div>
                {t('NavListOne')}
              </Link>
            </li>
            <li>
              <Link to={"/"} onMouseEnter={() => showLineOver(elem2)} onMouseLeave={() => remvLineOver(elem2)} aria-label="Best truck-services we provide">
              <div ref={elem2} className={Styles.overLine}></div>
                {t('NavListTwo')}
              </Link>
            </li>
            <li>
              <Link to={"/"} onMouseEnter={() => showLineOver(elem3)} onMouseLeave={() => remvLineOver(elem3)} aria-label="Best Comissions for truck-service">
              <div ref={elem3} className={Styles.overLine}></div>
                {t('NavListThree')}
              </Link>
            </li>
            <li>
              <Link to={"/"} onMouseEnter={() => showLineOver(elem4)} onMouseLeave={() => remvLineOver(elem4)} aria-label="Get in touch with us">
              <div ref={elem4} className={Styles.overLine}></div>
                {t('NavListFour')}
              </Link>
            </li>
          </ul>
        </div>
        {/* ReqCall */}
        <div className={Styles.navEnd}>
          <div>
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
          aria-label="Call for a service"
          >
            {t('RequsetButton')}
          </Button>
          </div>
          {/* Language Selector */}
          <div className={Styles.langBar}>
            <Language />
          </div>
          {/* navBar-Icon */}
        <div className={Styles.navBar}>
          <IconButton
          disableRipple={true}
          onClick={() => dispatch(showDrawer())}
          aria-label="Navbar">
          <FaBars style={{fontSize:"1em"}}/>
          </IconButton>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Navebar;