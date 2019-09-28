import React, { Component } from "react";

import { Route, Switch, withRouter } from "react-router-dom";

import "./app.css";
import routes from "../../routes";

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={props => {
              return <route.component path={props.match} history={history} />;
            }}
          />
        ))}
      </Switch>
    );
  }
}

export default withRouter(App);
