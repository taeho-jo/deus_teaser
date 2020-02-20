import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import App from "./App";
import Traveler from "./pages/Traveler";
import Partner from "./pages/Partner";
import ScrollToTop from "./ScrollToTop";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Traveler} />
            <Route exact path="/partner" component={Partner} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Routes;
