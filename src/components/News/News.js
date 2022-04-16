import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import NewsData from "./NewsData";
import { Button } from 'antd';
const postsPerPage = 3; 
const arrayForHoldingPosts = [];
const App = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [count, setCount] = useState(1);
const loopThroughPosts = (count) => {
    for (
      let i = count * postsPerPage - postsPerPage;
      i < postsPerPage * count;
      i++
    ) {
      if (NewsData[i] !== undefined) {
        arrayForHoldingPosts.push(NewsData[i]);
      }
    }
    setPostsToShow(arrayForHoldingPosts);
    
  };
// load the first set of posts when the page loads
  // and then set the value of count to 2
  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);
const handleShowMorePosts = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };
return (
    <div>
      <NewsList postsToRender={postsToShow} />
      <Button onClick={handleShowMorePosts} type="link">Xem thêm</Button>
    </div>
  );
};
export default App;