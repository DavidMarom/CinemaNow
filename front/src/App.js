import { NavBar } from "./cmps/NavBar.jsx";
import { Explore } from './pages/Explore';
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <div className="outter-container">
        <div className="inner-container">
          <NavBar />

          <Switch>
            <Route exact component={Explore} path={"/"} />
            {/* <Route exact component={Manage} path={"/manage"} /> */}

          </Switch>
        </div>
      </div>
    </div>
  );
}