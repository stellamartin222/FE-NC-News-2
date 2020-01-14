import React from 'react';
import './App.css';
import Header from './Components/Header';
import {Router} from '@reach/router'
import Navbar from './Components/Navbar';
import Topics from './Components/Topics';
import Home from './Components/Home';
import ArticlesList from './Components/ArticlesList';
import SingleArticle from './Components/SingleArticle'
import ErrorDisplay from './Components/ErrorDisplay';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Router>
        <Home path="/"/>
        <Topics path="/topics"/>
        <ArticlesList path="/articles"/>
        <ArticlesList path="/topics/:topic/articles"/>
        <SingleArticle path="/articles/:article_id"/>
        <SingleArticle path="topics/:topic/articles/:article_id"/>
        <ErrorDisplay default/>
      </Router>
    </>
  );
}

export default App;
