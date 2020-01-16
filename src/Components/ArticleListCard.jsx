import React from 'react'
import { Link } from '@reach/router'
import Votes from './Votes'
import moment from 'moment'

export default function ArticleListCard({article}) {
    return (
        <div className="articleCards">
            <h2>{article.title}</h2>
            <p>{moment(article.created_at).format("MMM Do YYYY")}</p>
            <p>{article.author}</p>
            <p>{article.comment_count} Comments</p>
            <Votes votes={article.votes}/>
            <Link to={`/articles/${article.article_id}`}>
            <button className="topicCardButtons">View full article</button>
            </Link>
        </div>
    )
}
