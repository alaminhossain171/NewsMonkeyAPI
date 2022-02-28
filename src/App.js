import React from "react";
import AllNewsCom from "./components/AllNewsCom";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App=()=> {


  let pageSize=8;
  let apiKey=process.env.REACT_APP_BLOG_API;
  // state={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   console.log(progress)
  //   setState({progress:progress})
  //    }

    return (
      <Router>
        <Header />
      
        <Switch>
          <Route  exact path="/">
            <AllNewsCom  apiKey={apiKey} pageSize={pageSize} category={`general`} />
          </Route>
          <Route key={`business`} exact path="/business">
            <AllNewsCom  apiKey={apiKey} pageSize={pageSize} category={`business`} />
          </Route>
          <Route key={`entertainment`} exact path="/entertainment">
            <AllNewsCom  apiKey={apiKey} pageSize={pageSize} category={`entertainment`} />
          </Route>
          <Route key={`health`} exact path="/health">
            <AllNewsCom  apiKey={apiKey} pageSize={pageSize} category={`health`} />
          </Route>
          <Route key={`science`} exact path="/science">
            <AllNewsCom  apiKey={apiKey} pageSize={pageSize} category={`science`} />
          </Route>
          <Route key={`sports`} exact path="/sports">
            <AllNewsCom  apiKey={apiKey} pageSize={pageSize} category={`sports`} />
          </Route>
          <Route key={`technology`} exact path="/technology">
            <AllNewsCom  apiKey={apiKey} pageSize={pageSize} category={`technology`} />
          </Route>
        </Switch>
      </Router>
    );
  
}
export default App;