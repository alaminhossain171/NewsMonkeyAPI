import React, { Component } from "react";
import AllNewsCom from "./components/AllNewsCom";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {


  pageSize=8;
  apiKey=process.env.REACT_APP_BLOG_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    console.log(progress)
    this.setState({progress:progress})
     }
  render() {
    return (
      <Router>
        <Header />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Switch>
          <Route  exact path="/">
            <AllNewsCom setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category={`general`} />
          </Route>
          <Route key={`business`} exact path="/business">
            <AllNewsCom setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category={`business`} />
          </Route>
          <Route key={`entertainment`} exact path="/entertainment">
            <AllNewsCom setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category={`entertainment`} />
          </Route>
          <Route key={`health`} exact path="/health">
            <AllNewsCom setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category={`health`} />
          </Route>
          <Route key={`science`} exact path="/science">
            <AllNewsCom setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category={`science`} />
          </Route>
          <Route key={`sports`} exact path="/sports">
            <AllNewsCom setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category={`sports`} />
          </Route>
          <Route key={`technology`} exact path="/technology">
            <AllNewsCom setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category={`technology`} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
