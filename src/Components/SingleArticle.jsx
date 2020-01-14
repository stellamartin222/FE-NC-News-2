import React, { Component } from 'react'
import { getArticle } from '../api'
import { Link, Router } from '@reach/router'
import Comments from './Comments'

export default class ArticleSingle extends Component {
    state = {
        article :[],
        isLoading : true
    }

    render() {
        const {article, isLoading} = this.state
        if (isLoading) return <p>Loading...</p>
        console.log(article)
        return (
            <div className="singleArticleFullBox">
                <main className="singleArticleBody">
                    <h2>{article.title}</h2>
                    <p className="singleArticleSmallText">{article.created_at}</p>
                    <p className="singleArticleSmallText">Created by user : {article.author}</p>
                    <h3>{article.body}</h3>
                </main>
                {/* <Link>
                <button>Show Comments</button>
                </Link>
                <Router>
                    <Comments/>
                </Router> */}
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
