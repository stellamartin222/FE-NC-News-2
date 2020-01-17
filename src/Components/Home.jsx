import React, { Component } from 'react'
import {getAllArticles} from "../api"
import Graph from './Graph'
import ArticleListCard from './ArticleListCard'

export default class Home extends Component {
    state = {
        articles : [],
        mostRecent : {},
        mostComments : {},
        mostLikes : {},
        isLoading : true
    }

    render() {
        const {isLoading, mostRecent, mostComments, mostLikes} = this.state
        if(isLoading) return <p>Loading...</p>
        return (
            <div className="homeBox">
                <h2>Articles per Topic</h2>
                <Graph articles={this.state.articles}/>
                <h2>Most Recent Article : </h2>
                <ArticleListCard article={mostRecent}/>
                <h2>Most Commented Article : </h2>
                <ArticleListCard article={mostComments}/>
                <h2>Most Liked Article : </h2>
                <ArticleListCard article={mostLikes}/>
            </div>
        )
    }

    fetchArticles(sortBy) {
        console.log('here')
        return getAllArticles(this.props.topic, sortBy)
            .then((articles) => {
                this.setState({
                    articles : articles,
                    isLoading : false
                })
            })
    }

    componentDidMount() {
        this.recentArticle()
        this.commentedArticle()
        this.likedArticle()
        this.fetchArticles()
    }

    recentArticle = () => {
        return getAllArticles(this.props.topic, "created_at")
        .then((articles) => {
            console.log('sendhelps')
            this.setState({
                mostRecent : articles[0]
            })
        })
    }

    commentedArticle = () => {
        return getAllArticles(this.props.topic,"comment_count")
        .then((articles) => {
            this.setState({
                mostComments : articles[0]
            })
        })
    }

    likedArticle = () => {
        return getAllArticles(this.props.topic,"votes")
        .then((articles) => {
            this.setState({
                mostLikes : articles[0]
            })
        })
    }
}
