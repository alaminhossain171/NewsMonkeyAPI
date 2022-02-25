import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SIngleNews from "./SIngleNews";
import axios from "axios";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class AllNewsCom extends Component {
  static defaultProps = {
    category: "science",
    pageSize: 5,
  };
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title=this.capitalizeFirstLetter(this.props.category);
  }
capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleUpdate = () => {
   
    this.setState({ loading: true });
    this.props.setProgress(10);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      )
      .then((res) => {
        const data = res.data;
        console.log(data.totalResults);
        this.setState({
          articles: data.articles,
          totalResults: data.totalResults,
          loading: false,
        });
      });
      this.props.setProgress(100);
  };
  componentDidMount() {
    this.handleUpdate();
 
  }
  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    )
    .then((res) => {
      const data = res.data;
      console.log(data.totalResults);
      this.setState({
        articles:this.state.articles.concat(data.articles) ,
        totalResults: data.totalResults,
        
      });
    });
  };
  // PrevClick = () => {
  
  //   this.setState({ page: this.state.page - 1 });
  //   this.handleUpdate();
  // };

  // NextClick = () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.state.page)
  //   ) {
  //   } else {
      
  //     this.setState({ page: this.state.page + 1 });
  //     this.handleUpdate();
  //   }
  // };
  render() {
    return (
      <>
        <h1 className="my-4 text-center">{this.capitalizeFirstLetter(this.props.category)} Top Headline</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner />}
        >
        <Container className="mt-3">
        <Row xs={1} md={2} lg={4}>
        {/* !this.state.loading && */}
       
          {
            this.state.articles.map((item) => {
              return (
                <Col key={item.url}>
                  <SIngleNews
                    publishedAt={item.publishedAt}
                    description={item.description?.slice(0, 30)}
                    author={item.title?.slice(0, 25)}
                    imgUrl={
                      item.urlToImage
                        ? item.urlToImage
                        : "https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg"
                    }
                    source={item.source?.name}
                    url={item.url}
                  />
                </Col>
              );
            })}
            
        </Row>
        </Container>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-2">
          <Button
            disabled={this.state.page <= 1 ? true : false}
            variant="dark"
            onClick={this.PrevClick}
          >
            Previous
          </Button>
          <Button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            variant="dark"
            onClick={this.NextClick}
          >
            Next
          </Button>
        </div> */}
      </>
    );
  }
}
