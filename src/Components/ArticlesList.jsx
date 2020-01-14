import React, { Component } from 'react'
import { getAllArticles } from '../api'
import ArticleListCard from './ArticleListCard'
import ErrorDisplay from './ErrorDisplay'

export default class ArticlesList extends Component {
    state = {
        articles : [],
        isLoading : true,
        err : null
    }

    render() {
        const {articles, isLoading, err} = this.state
        if(isLoading) return <p>Loading...</p>
        if (err) return <ErrorDisplay {...err} />
        return (
            <div className="articlesBox">
            <h2 className="articleListHeader">{this.props.topic || "All articles"} </h2>
            <ul>
                {articles.map((article) => {
                    return <ArticleListCard article={article}/>
                })}
            </ul>
            </div>
        )
    }

    componentDidMount() {
        return getAllArticles(this.props.topic)
            .then((articles) => {
                this.setState({
                    articles : articles,
                    isLoading : false
                })
            })
            .catch((err) => {
                this.setState({
                    err : {status : err.response.status, msg : err.response.msg},
                    isLoading : false
                })
            });
    }
}
