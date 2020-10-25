import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from "./routes/routes";
import "./styles/base.scss";

function App() {
  return (
    <div className="app-wrapper">
      {/* <Loader /> */}
      <Switch>
        {routes.map((route, i) => (
          <Route 
          key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
