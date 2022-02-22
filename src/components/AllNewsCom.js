import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SIngleNews from "./SIngleNews";
import axios from 'axios';
export default class AllNewsCom extends Component {
   

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading:false,
      page:1
    };
  }
componentDidMount(){
  axios.get(`https://newsapi.org/v2/everything?q=apple&from=2022-02-21&to=2022-02-21&sortBy=popularity&apiKey=74f7e24d89a64630a7e5ac7a9fbef5a7&page=2`)
  .then(res => {
    const data = res.data;
    console.log(data);
    this.setState({ articles:data.articles });
  })
}
PrevClick=()=>{
  console.log("PreviousCLick");
}
NextClick=()=>{
  console.log("NextClick");
}
  render() {

    return (
      <Container>
        <h3 className="my-3">News Monkey top headline</h3>

        <Row xs={1} md={4} lg={4}>
          {this.state.articles.map((item) => {
            return (
              <Col key={item.url}>
                <SIngleNews 
                  description={item.description.slice(0,30)}
                  author={item.title.slice(0,15)}
                  imgUrl={item.urlToImage}
                  source={item.source.name}
                  url={item.url}
                />
              </Col>
            );
          })}
        </Row>
       
        <div className="d-flex justify-content-between my-2">
        <Button variant="dark" onClick={this.PrevClick}>Previous</Button>
         <Button variant="dark"onClick={this.NextClick}>Next</Button>
        </div>
      
      </Container>
    );
  }
}
