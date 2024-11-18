import Styles from "./style.module.scss";
import Brands from "../Brands";
import Services from "../Services";
import SiteLocation from "../SiteLocation";
import Subscribe from "../Subscribe";
import TruckService from "../TruckService";

const Home = () => {
  return (
    <div className={Styles.home}>
      <TruckService />
      <Services />
      <Brands />
      <SiteLocation />
      <Subscribe />
    </div>
  )
}

export default Home