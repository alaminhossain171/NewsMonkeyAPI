import React, { Component } from "react";
import AllNewsCom from "./components/AllNewsCom";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route  exact path="/">
            <AllNewsCom pageSize={8} category={`general`} />
          </Route>
          <Route key={`business`} exact path="/business">
            <AllNewsCom pageSize={8} category={`business`} />
          </Route>
          <Route key={`entertainment`} exact path="/entertainment">
            <AllNewsCom pageSize={8} category={`entertainment`} />
          </Route>
          <Route key={`health`} exact path="/health">
            <AllNewsCom pageSize={8} category={`health`} />
          </Route>
          <Route key={`science`} exact path="/science">
            <AllNewsCom pageSize={8} category={`science`} />
          </Route>
          <Route key={`sports`} exact path="/sports">
            <AllNewsCom pageSize={8} category={`sports`} />
          </Route>
          <Route key={`technology`} exact path="/technology">
            <AllNewsCom pageSize={8} category={`technology`} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
