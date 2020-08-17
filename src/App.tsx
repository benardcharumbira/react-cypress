import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";
import PlotlyChart from "./PlotlyChart";
import FrappeChart from "./FrappeChart";

// const styles = {
//   color: "red",
//   marginLeft: 700,
// };
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PlotlyChart} />
        <Route exact path="/1" component={FrappeChart} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
