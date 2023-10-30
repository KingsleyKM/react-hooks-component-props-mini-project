import React from "react";
import blogData from "../data/blog";
import About from "./about";
import Article from "./Article";
import ArticleList from "./Articlelist";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
      <h1>Kings Blog</h1>
      </header>
      <About text="about the blog" image="https://via.placeholder.com/215"/>
      <Article title="This blog article" date="January 1,1970" preview="nice work"/>
      <ArticleList />
    </div>
  );
}

export default App;
