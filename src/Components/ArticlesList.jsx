import React, { Component } from 'react'
import { getAllArticles } from '../api'
import ArticleListCard from './ArticleListCard'
import ErrorDisplay from './ErrorDisplay'
import SortBy from './SortBy'

export default class ArticlesList extends Component {
    state = {
        articles : [],
        sortBy : null,
        isLoading : true,
        err : null
    }

    render() {
        const {articles, isLoading, err} = this.state
        if(isLoading) return <p>Loading...</p>
        if (err) return <ErrorDisplay {...err} />
        return (
            <div className="articlesBox">
                <header className="articlesHeader">
                    <h2 className="articleListHeader">{this.props.topic || "All articles"} </h2>
                    <SortBy getOrder={this.getOrder}/>
                </header>
            <ul>
                {articles.map((article) => {
                    return <li key={article.article_id} className="noBulletPointsPlease">
                    <ArticleListCard article={article}/>
                    </li>
                })}
            </ul>
            </div>
        )
    }

    getOrder = sortBy => {
        this.setState({sortBy})
    }

    fetchArticles() {
        return getAllArticles(this.props.topic, this.state.sortBy)
            .then((articles) => {
                this.setState({
                    articles : articles,
                    isLoading : false
                })
            })
            .catch((err) => {
                console.log(err.response)
                this.setState({
                    
                    err : {status : err.response.status, msg : err.response.data.msg},
                    isLoading : false
                })
            });
    }

    componentDidMount() {
        this.fetchArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.sortBy !== this.state.sortBy) {
            this.fetchArticles()
        }
    }
}
