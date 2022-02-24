import React, { Component } from "react";
import AllNewsCom from "./components/AllNewsCom";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=20
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route  exact path="/">
            <AllNewsCom pageSize={this.pageSize} category={`general`} />
          </Route>
          <Route key={`business`} exact path="/business">
            <AllNewsCom pageSize={this.pageSize} category={`business`} />
          </Route>
          <Route key={`entertainment`} exact path="/entertainment">
            <AllNewsCom pageSize={this.pageSize} category={`entertainment`} />
          </Route>
          <Route key={`health`} exact path="/health">
            <AllNewsCom pageSize={this.pageSize} category={`health`} />
          </Route>
          <Route key={`science`} exact path="/science">
            <AllNewsCom pageSize={this.pageSize} category={`science`} />
          </Route>
          <Route key={`sports`} exact path="/sports">
            <AllNewsCom pageSize={this.pageSize} category={`sports`} />
          </Route>
          <Route key={`technology`} exact path="/technology">
            <AllNewsCom pageSize={this.pageSize} category={`technology`} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
