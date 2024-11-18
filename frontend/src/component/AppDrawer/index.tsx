import Styles from "./style.module.scss";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideDrawer } from "../../ReduxStore/DrawerSlice";
import { IoCloseSharp } from "react-icons/io5";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "../LanguageSelector";

const AppDrawer = () => {

  const open = useSelector((state: any) => state.Open.open);
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const DrawerHeader = () => {
    return(
      <div className={Styles.closeBlock}>
        <div></div>
          <div>
              <IconButton
              disableRipple={true}
              onClick={() => dispatch(hideDrawer())}>
                <IoCloseSharp />
              </IconButton>
          </div>
      </div>
    )
  }

  return (
    <Drawer
        title={<DrawerHeader />}
        placement={"left"}
        closable={false}
        open={open}
        key={"left"}
      >
        <div className={Styles.mobileMenu}>
          <ul>
            <li>
            <div style={{paddingLeft: "1em"}}>
              <Language />
            </div>
            </li>
            <li>
              <Link to={"/"} aria-label="learn more about truck-service">
                {t('NavListOne')}
              </Link>
            </li>
            <li>
              <Link to={"/"} aria-label="Best truck-services we provide">
                {t('NavListTwo')}
              </Link>
            </li>
            <li>
              <Link to={"/"} aria-label="Best Comissions for truck-service">
                {t('NavListThree')}
              </Link>
            </li>
            <li>
              <Link to={"/"} aria-label="Get in touch with us">
                {t('NavListFour')}
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
  )
}

export default AppDrawer;