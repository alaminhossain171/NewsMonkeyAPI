/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SIngleNews from "./SIngleNews";
import axios from "axios";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const AllNewsCom = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleUpdate = () => {
    setloading(true);

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      )
      .then((res) => {
        const data = res.data;
        // console.log(data.totalResults);
        setArticles(data.articles);
        settotalResults(data.totalResults);
        setloading(false);
      });
  };

  
  useEffect(() => {
    document.title=capitalizeFirstLetter(props.category);
    handleUpdate();
  },[]);

  const fetchMoreData = () => {
    
    setpage(page + 1);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
      )
      
      .then((res) => {
        const data = res.data;
        console.log(data.totalResults);
        setArticles(articles.concat(data.articles));
        settotalResults(data.totalResults);
      });
  };
  // PrevClick = () => {

  //   setState({ page: state.page - 1 });
  //   handleUpdate();
  // };

  // NextClick = () => {
  //   if (
  //     state.page + 1 >
  //     Math.ceil(state.totalResults / state.page)
  //   ) {
  //   } else {

  //     setState({ page: state.page + 1 });
  //     handleUpdate();
  //   }
  // };

  return (
    <>
      <h1 className="my-4 text-center">
        {capitalizeFirstLetter(props.category)} Top Headline
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <Container className="mt-3">
          <Row xs={1} md={2} lg={4}>
            {/* !state.loading && */}

            {articles.map((item) => {
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
            disabled={state.page <= 1 ? true : false}
            variant="dark"
            onClick={PrevClick}
          >
            Previous
          </Button>
          <Button
            disabled={
              state.page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
            variant="dark"
            onClick={NextClick}
          >
            Next
          </Button>
        </div> */}
    </>
  );
};
AllNewsCom.defaultProps = {
  category: "science",
  pageSize: 5,
};
AllNewsCom.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
export default AllNewsCom;
