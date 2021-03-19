import { NavBar } from "./cmps/NavBar.jsx";
import { Explore } from './pages/Explore';
import { Shows } from './pages/Shows';
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <div className="outter-container">
        <div className="inner-container">
          <NavBar />

          <Switch>
            <Route exact component={Explore} path={"/"} />
            <Route exact component={Shows} path={"/shows"} />

          </Switch>
        </div>
      </div>
    </div>
  );
}