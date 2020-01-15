import React, { Component } from 'react'
import { getArticle } from '../api'
import CommentsList from './CommentsList'
import CommentToggle from './CommentToggle'
import Votes from './Votes'

export default class ArticleSingle extends Component {
    state = {
        article :[],
        isLoading : true
    }

    render() {
        const {article, isLoading} = this.state
        if (isLoading) return <p>Loading...</p>
        return (
            <div className="singleArticleFullBox">
                <main className="singleArticleBody">
                    <h2>{article.title}</h2>
                    <p className="singleArticleSmallText">{article.created_at}</p>
                    <p className="singleArticleSmallText">Created by : {article.author}</p>
                    <h3>{article.body}</h3>
                <Votes votes={article.votes}/>
                </main>
                <CommentToggle hideMessage="Hide Comments" showMessage="View comments">
                    <CommentsList article_id={this.props.article_id}/>
                </CommentToggle>
            </div>
        )
    }

    componentDidMount() {
        return getArticle(this.props.article_id)
        .then((article) => {
            this.setState({
                article : article,
                isLoading: false
            })
        })
    }
}
