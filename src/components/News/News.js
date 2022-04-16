import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
const postsPerPage = 3; 
const arrayForHoldingPosts = [];
const News = () => {

return (
    <div>
      <NewsList />
    </div>
  );
};
export default News;