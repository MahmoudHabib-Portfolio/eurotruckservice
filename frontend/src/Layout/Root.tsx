import { Outlet } from "react-router";
import { Footer, Navebar } from "../component";
import AppDrawer from "../component/AppDrawer";

export default function Root() {

  return (
    <>
        <AppDrawer />

        <Navebar />
        
        <Outlet />

        <Footer />
    </>
  )
}
