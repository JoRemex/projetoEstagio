import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Outro from "./components/Navbar";
import Home from "./Home";
function DashBoard() {
  return (
    <Fragment>
      <Navbar/>
      <Home />
    </Fragment>
  );
}
export default DashBoard;
